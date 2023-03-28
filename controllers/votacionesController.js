const { response } = require('express');
const MySQL = require('../database/config');

const { plantilla } = require('./formatoCertificado');
const nodemailer = require('nodemailer');
var pdf = require('html-pdf');

const getCandidatos = async (req, res = response) => {
    const mysql = new MySQL();

    try{
        let msg = null;

        let query = `SELECT IF(a.fecha_inicio = CURRENT_DATE(), TRUE, FALSE) AS disponible, IF(CURRENT_TIME() < a.hora_inicio, FALSE, TRUE) AS inicio_votacion, 
        IF(CURRENT_TIME() > a.hora_fin, TRUE, FALSE) AS finalizo_votacion,
        a.hora_inicio, a.hora_fin, a.fecha_inicio, a.descripcion
        FROM aperturas a WHERE a.estado = 1`;
        const response = await mysql.ejecutarQuery( query );

        if ( response.length == 0) {
          msg = "No hay elecciones activas actualmente"
        }else{
          let query = `SELECT e.id, CONCAT(e.nombres, ' ', e.apellidos) AS participante, p.ruta_foto, l.descripcion, l.siglas, p.id AS presidente_id, pr.nombre AS periodo
          FROM presidentes p, estudiantes e, listas l, aperturas a, periodos pr
          WHERE p.estudiante_id = e.id AND
          p.apertura_id = a.id AND
          a.periodo_id = pr.id AND
          p.lista_id = l.id AND p.apertura_id = ( SELECT id FROM aperturas WHERE estado = 1 )`;

          const candidados = await mysql.ejecutarQuery( query );
          msg = candidados;
        }
                
        res.json({ msg, response: response[0] })        
    }catch (error) {
        console.log(error);
        return res.json({ msg: 'Error al cargar las listas' })
    }
}
const getVotos = async (req, res = response) => {
    const mysql = new MySQL();
    const { apertura_id } = req.params;
    try{
        let query = `SELECT COUNT(v.presidente_id) AS totalVotos, v.presidente_id, CONCAT(e.nombres, ' ', e.apellidos) AS candidato, l.descripcion, a.fecha_inicio, a.hora_inicio, a.hora_fin, e.cedula, IF(a.fecha_inicio = CURRENT_DATE(), TRUE, FALSE) AS disponible, IF(CURRENT_DATE() < a.fecha_inicio , TRUE, FALSE) AS comenzo_votacion, IF(CURRENT_TIME() > a.hora_fin, TRUE, FALSE) AS finalizo_votacion
        FROM votaciones v, presidentes p, estudiantes e, listas l, aperturas a
        WHERE v.presidente_id = p.id AND
        p.lista_id = l.id AND
        p.apertura_id = a.id AND
        p.apertura_id = ${ apertura_id } AND
        p.estudiante_id = e.id GROUP BY v.presidente_id`;

        const votos = await mysql.ejecutarQuery( query );
                
        res.json({ msg: votos })        
    }catch (error) {
        console.log(error);
        return res.json({ msg: 'Error al cargar las listas' })
    }
}

const comprobarVoto = async (req, res = response) => {
    const mysql = new MySQL();

    try{
        let query = `SELECT IF(COUNT(v.id) > 0, TRUE, FALSE) AS voto
        FROM votaciones v, presidentes p, aperturas a
        WHERE v.presidente_id = p.id AND
        p.apertura_id = a.id AND a.estado = 1 AND v.votante_id = ${ req.params.estudiante_id }`;
        const existeVoto = await mysql.ejecutarQuery( query );
                
        res.json({ existeVoto: existeVoto[0] })        
    }catch (error) {
        console.log(error);
        return res.json({ msg: 'Error al cargar las listas' })
    }
}

const agregarVoto = async( req, res = response ) => {
  const { votante_id, presidente_id, email } = req.body;

  const mysql = new MySQL();
  
  try {
      const query = `INSERT INTO votaciones(presidente_id, votante_id, fecha, hora) VALUES( ${ presidente_id }, '${ votante_id }', CURRENT_DATE(), CURRENT_TIME())`;

      await mysql.ejecutarQuery( query );

    enviarCorreo( email, 'UNIVERSIDAD ESTATAL DE MILAGRO - UNEMI', 
        'Saludos gracias por participar en la elección estudiantil', res, req );

      res.json({ msg: `Se envio su certificado al siguiente correo: ${email}` })       
  } catch (error) {
        console.log(error);
        return res.json({
            msg: 'Error, no se logro agregar el voto'
        })
  }
}

const enviarCorreo = async ( email, asunto, mensaje, res, req ) => {
    const config = {
        host: 'smtp.gmail.com', port: 587,
        auth: { user: 'hvasconezm@unemi.edu.ec', pass: 'scfvppxtzaegxcez' }
    }

    var contenido = plantilla( req.body );

    let ruta_pdf = './public/pdfs/certificadp.pdf'
    var options = { format: 'A5' };
      
    pdf.create(contenido, options).toFile(ruta_pdf, async function(err, res) {
        if (err){
            console.log(err);
        } else {
            const message = {
                from: 'hvasconezm@unemi.edu.ec',
                to: email,
                subject: asunto,
                text: mensaje,
                attachments: [
                  { filename: 'certificado.pdf', path: ruta_pdf }
                ]
            }
        
            const transport = nodemailer.createTransport(config);
        
            try {
              await transport.sendMail(message);
              console.log("Correo Enviado Exitosamente");      
            } catch (error) {
              console.log(error);
            }
        }
    });
}

const getComitiva = async (req, res = response) => {
    const mysql = new MySQL();
    const { apertura_id, lista_name } = req.params;
    try{
        let query = `SELECT CONCAT( e.nombres, ' ', e.apellidos) AS candidato, e.cedula, d.nombre
        FROM estudiantes e, presidentes p, listas l, candidatos c, dignidades d
        WHERE p.lista_id = l.id AND
        l.descripcion = '${ lista_name }' AND
        p.apertura_id = ${ apertura_id } AND
        p.id = c.presidente_id AND
        c.estudiante_id = e.id AND
        c.dignidad_id = d.id`;

        const comitiva = await mysql.ejecutarQuery( query );
                
        res.json({ msg: comitiva })        
    }catch (error) {
        console.log(error);
        return res.json({ msg: 'Error al cargar las listas' })
    }
}

module.exports = {
  comprobarVoto,
  getCandidatos,
  getComitiva,
  agregarVoto,
  getVotos
}