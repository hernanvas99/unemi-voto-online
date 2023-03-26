const { response } = require('express');
const MySQL = require('../database/config');
const { resultado } = require('./pdfResultados')
const { plantilla, noVotaronPlantilla } = require('./formatoPDFResultado')
var pdf = require('html-pdf');

const reporte = async (req, res = response) => {
    const { apertura_id, tipo_reporte, especialidad_id, eleccion } = req.body;
    let contenido = '';

    var options = { 
        format: 'A5',
        paginationOffset: 1,       // Override the initial pagination number
        header: { "height": "10mm" },
        footer: { "height": "10mm" } 
    };

    if ( tipo_reporte == 'Resultado' ) {
        const resultados = await reporteResultados( apertura_id )
        contenido = plantilla( resultados.votos, resultados.ganador );
    }
    if ( tipo_reporte == 'Estudiantes que no votaron' ) {
        const result = await noVotaron( apertura_id, especialidad_id )
        contenido = noVotaronPlantilla( result.estudiantes, eleccion, tipo_reporte );
    }
    if ( tipo_reporte == 'Estudiantes que votaron' ) {
        const result = await votaron( apertura_id, especialidad_id )
        contenido = noVotaronPlantilla( result.estudiantes, eleccion, tipo_reporte );
    }
      
    try{
        pdf.create(contenido, options).toStream((error, stream) => {
            if (error) { respuesta.end("Error creando PDF: " + error)} 
            else{
                res.setHeader("Content-Type", "application/pdf");
                stream.pipe(res);
            }
        });
    }catch (error) {
        console.log(error);
        return res.json({ msg: 'Error al cargar las listas' })
    }
}
const reporteGanadores = async (req, res = response) => {
    // const { estadistica, comitiva } = req.body;

    let contenido = '';

    var options = { 
        format: 'A5',
        paginationOffset: 1,       // Override the initial pagination number
        header: { "height": "2mm" },
        footer: { "height": "10mm" } 
    };
      
    contenido = await resultado( req.body )
    try{
        pdf.create(contenido, options).toStream((error, stream) => {
            if (error) { respuesta.end("Error creando PDF: " + error)} 
            else{
                res.setHeader("Content-Type", "application/pdf");
                stream.pipe(res);
            }
        });
    }catch (error) {
        console.log(error);
        return res.json({ msg: 'Error al cargar las listas' })
    }
}

const reporteResultados = async( apertura_id ) => {
    const mysql = new MySQL();

    const query = `SELECT COUNT(v.presidente_id) AS totalVotos, CONCAT(e.nombres, ' ', e.apellidos) AS candidato,l.descripcion
        FROM votaciones v, presidentes p, estudiantes e, aperturas a, listas l
        WHERE v.presidente_id = p.id AND
        p.lista_id = l.id AND
        p.apertura_id = a.id AND
        p.apertura_id = ${apertura_id} AND
        p.estudiante_id = e.id GROUP BY v.presidente_id`

    const votos = await mysql.ejecutarQuery( query );

    //Obtener candido con mayor voto
    let maxValue=Math.max(...votos.map(x=>parseInt(x.totalVotos)))
    let ganador = votos.filter(x=>x.totalVotos==maxValue)

    return { votos, ganador };
}

const noVotaron = async( apertura_id, especialidad_id ) => {
    const mysql = new MySQL();

    let query = `SELECT DISTINCT CONCAT(e.nombres, ' ', e.apellidos) AS estudiante, es.nombre AS especialidad, CONCAT(e.curso, '', e.paralelo) AS curso
        FROM estudiantes e, votaciones v, especialidades es
        WHERE e.especialidad_id = es.id AND `

    if ( especialidad_id != null ) query += ` es.id = ${ especialidad_id } AND `
    
    query += `e.id NOT IN (SELECT v.votante_id FROM votaciones v, presidentes p
            WHERE v.presidente_id = p.id AND
            p.apertura_id = ${apertura_id})`

    const estudiantes = await mysql.ejecutarQuery( query );

    return { estudiantes };
}
const votaron = async( apertura_id, especialidad_id = '' ) => {
    const mysql = new MySQL();

    let query = `SELECT DISTINCT CONCAT(e.nombres, ' ', e.apellidos) AS estudiante, es.nombre AS especialidad, CONCAT(e.curso, '', e.paralelo) AS curso
    FROM estudiantes e, votaciones v, presidentes p, especialidades es
    WHERE v.presidente_id = p.id AND
    p.apertura_id = ${ apertura_id } AND`

    if ( especialidad_id != null) query += ` e.especialidad_id = ${ especialidad_id } AND`

    query += ` e.especialidad_id = es.id AND e.id = v.votante_id`

    const estudiantes = await mysql.ejecutarQuery( query );

    return { estudiantes };
}

module.exports = {
  reporte,
  reporteGanadores
}