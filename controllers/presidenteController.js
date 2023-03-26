const { response } = require('express');
const path = require('path');
const fs = require('fs');
const MySQL = require('../database/config');
const { subirArchivo } = require("./subirArchivo");

const presidenteGet = async (req, res = response) =>{
    const mysql = new MySQL();
    try{
        let query = `SELECT e.nombres, e.apellidos, e.cedula, l.descripcion AS lista, l.id AS lista_id, a.descripcion AS elecciones, a.id AS eleccion_id, p.participaciones, p.ruta_foto, p.estudiante_id AS presidente_id, p.id AS id_P, p.estado
        FROM presidentes p, listas l, aperturas a, estudiantes e
        WHERE p.estudiante_id = e.id AND
        p.lista_id = l.id AND p.apertura_id = a.id`;

        if (req.params.estado == 'activos') 
            query += ' AND p.estado = 1'

        if (req.query.apertura_id != '') 
            query += ` AND p.apertura_id = ${ req.query.apertura_id }`

        query += ' ORDER BY p.id DESC'

        const presidentes = await mysql.ejecutarQuery( query );
                
        res.json({ presidentes })   

    }catch (error) {
        console.log(error);
        return res.json({ msg: 'Error al cargar los estudiantes' })
    }
}
const candidatosGet = async (req, res = response) =>{
    const { presidente_id } = req.params;
    const mysql = new MySQL();

    try{
        let query = `SELECT c.estudiante_id, dignidad_id, e.nombres, e.apellidos
            FROM candidatos c, estudiantes e
            WHERE c.estudiante_id = e.id AND
            c.presidente_id = ${ presidente_id }`;

        const candidatos = await mysql.ejecutarQuery( query );
                
        res.json({ candidatos })   

    }catch (error) {
        console.log(error);
        return res.json({ msg: 'Error al cargar los candidatos' })
    }
}

const presidentePost = async (req, res = response) => {
  const { apertura_id, lista_id, participaciones, presidente_id, candidatos } = req.body;
  let nombreImagen = 'default.jpg';

  const mysql = new MySQL();
  
  try {
      if (req.files != null) 
        nombreImagen = await subirArchivo(req.files, undefined, 'imgs');
      
      const query = `INSERT INTO presidentes(apertura_id, estudiante_id, lista_id, participaciones, ruta_foto) VALUES( ${ apertura_id }, '${presidente_id}', '${ lista_id }', '${ participaciones }', '${ nombreImagen }' )`;
      await mysql.ejecutarQuery( query );

      //Obtener id del presidente ingresado
      const reponse_presidente = await mysql.ejecutarQuery( 'SELECT id FROM presidentes ORDER BY id DESC LIMIT 1' );

      //Ingresar candidatos
      const detalles = JSON.parse( candidatos );
      let sentencia_sql = 'INSERT INTO candidatos(estudiante_id, dignidad_id, presidente_id, fecha_registro) VALUES'
      detalles.forEach((detalle, index) => {
        sentencia_sql += ` ( 
            ${ detalle.candidato_id }, 
            '${ detalle.dignidad_id }', 
            '${ reponse_presidente[0].id }', 
            NOW())
            ${ ((index + 1) != detalles.length ) ? ',' : ';' }`;
      });
      await mysql.ejecutarQuery( sentencia_sql );
                
      res.json({ msg: "Presidente Agregado exitosamente" })        
  } catch (error) {
        console.log(error);
        return res.json({
            msg: 'Error, no se logro guardar al presidente'
        })
  }
}
const presidentePut = async (req, res = response) =>{
  const { id_P, apertura_id, lista_id, participaciones, presidente_id, candidatos, foto_old } = req.body;
  let nombreImagen = 'default.jpg';

  if (req.files != null){
    if ( foto_old != 'default.jpg' ){
      const uploadPath = path.join(__dirname , '../public/' , 'imgs', foto_old);
    
      if( fs.existsSync( uploadPath ) ){
        fs.unlinkSync(uploadPath);
      }
    }
  } 
  
  try {
    const mysql = new MySQL();

    if (req.files != null)
      nombreImagen = await subirArchivo(req.files, undefined, 'imgs');
    else
      nombreImagen = foto_old    

      //Eliminar candidatos
      await mysql.ejecutarQuery( `DELETE FROM candidatos WHERE presidente_id = ${ id_P }` );
  
      //Ingresar candidatos
      let sentencia_sql = 'INSERT INTO candidatos(estudiante_id, dignidad_id, presidente_id, fecha_registro) VALUES';
      const detalles_array = JSON.parse( candidatos );

      for (let index = 0; index < detalles_array.length; index++) {
          sentencia_sql += ` ( 
            ${ detalles_array[ index ].candidato_id }, 
            '${ detalles_array[ index ].dignidad_id }', 
            '${ id_P}', 
            NOW())
            ${ ((index + 1) != detalles_array.length ) ? ',' : ';' }`;
      }
      await mysql.ejecutarQuery( sentencia_sql );
    
    //Actualizar datos del presidente
    let query = `UPDATE presidentes SET 
        apertura_id     = '${ apertura_id }',
        estudiante_id   = '${ presidente_id }',
        lista_id        = '${ lista_id }',
        participaciones = '${ participaciones }',
        ruta_foto       = '${ nombreImagen }'
        WHERE id        =  ${ id_P }`;
    
    await mysql.ejecutarQuery( query );
            
    res.json({ msg: "Presidente actualizado exitosamente" })        
  }catch (error) {
      return res.json({ msg: error.sqlMessage })
  }
}

const setEstado = async (req, res = response) =>{
    const { id, estado } = req.params;
    const mysql = new MySQL();

    try {
        const query = `UPDATE presidentes SET estado = ${ estado } WHERE id = ${ id }`;
        await mysql.ejecutarQuery( query );
        res.json({ msg: "Presidente editado exitosamente" })        
    } catch (error) {
        return res.json({ msg: 'Error al editar al presidente' })
    }
}

const borrarPresidente = async (req, res = response) =>{
    const { presidente_id } = req.params;
    const mysql = new MySQL();

    try {
        const query = `DELETE FROM presidentes WHERE id = ${ presidente_id }`;
        await mysql.ejecutarQuery( query );
                
        res.json({ msg: "Presidente eliminado exitosamente" })        
    } catch (error) {
        res.status(500).json({ message: 'Error, Este presidente no se puede eliminar' })
    }
}

module.exports = {
    borrarPresidente,
    setEstado,
    presidenteGet,
    presidentePost,
    candidatosGet,
    presidentePut
}