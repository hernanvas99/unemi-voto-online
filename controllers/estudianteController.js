const { response } = require('express');
const bcryptjs = require('bcryptjs');
const MySQL = require('../database/config');

const estudianteGet = async (req, res = response) =>{
    const mysql = new MySQL();

    try{
        let query = `SELECT e.*, es.nombre AS especialidad FROM estudiantes e, especialidades es WHERE e.especialidad_id = es.id`;

        if (req.params.estado == 'activos') 
            query += '  AND e.estado = 1'

        query += ' ORDER BY e.id DESC'

        const estudiantes = await mysql.ejecutarQuery( query );
                
        res.json({ estudiantes })        
    }catch (error) {
        console.log(error);
        return res.json({ msg: 'Error al cargar los estudiantes' })
    }
}

const candidatosDisponibles = async (req, res = response) =>{
    const { apertura_id } = req.params;

    const mysql = new MySQL();

    try{
        let listEstudiantes = '';
        let query = `SELECT c.estudiante_id, p.estudiante_id AS presidente_id
        FROM candidatos c, presidentes p
        WHERE c.presidente_id = p.id AND
        p.apertura_id = ${ apertura_id }`;

        const estudiantes = await mysql.ejecutarQuery( query );
        
        if( estudiantes.length == 0 )
            listEstudiantes = '0' 
        else{
            estudiantes.forEach( estudiante => {
                if( !listEstudiantes.includes(estudiante.estudiante_id) )
                    listEstudiantes += `${ ( listEstudiantes == '' ) ? '' : ','} ${ estudiante.estudiante_id }`
                if( !listEstudiantes.includes(estudiante.presidente_id) )
                    listEstudiantes += `${ ( listEstudiantes == '' ) ? '' : ','} ${ estudiante.presidente_id }`
            })
        }

        let consulta = `SELECT e.*, es.nombre AS especialidad 
        FROM estudiantes e, especialidades es 
        WHERE e.especialidad_id = es.id AND
        e.estado = 1 AND
        e.id NOT IN( ${ listEstudiantes } ) ORDER BY e.id DESC`

        const estudiantes_permitidos = await mysql.ejecutarQuery( consulta );
        res.json({ estudiantes: estudiantes_permitidos })        
    }catch (error) {
        console.log(error);
        return res.json({ msg: 'Error al cargar los estudiantes' })
    }
}

const estudiantePost = async (req, res = response) =>{
    const { 
      especialidad_id,
      nombres,
      apellidos,
      email,
      cedula,
      celular,
      curso,
      paralelo,
      seccion
     } = req.body;
    const mysql = new MySQL();

    try {
        //Verificar si el correo existe
        const query = `INSERT INTO estudiantes(especialidad_id, nombres, apellidos, cedula, celular, curso, paralelo, seccion, email) VALUES( ${ especialidad_id }, '${ nombres.toUpperCase() }', '${ apellidos.toUpperCase() }', '${ cedula }', '${ celular }', '${ curso }', '${ paralelo }', '${ seccion }', '${ email }')`;
        await mysql.ejecutarQuery( query );
                
        res.json({ msg: "Estudiante Agregado exitosamente" })        
    } catch (error) {
        console.log(error);
        return res.json({
            msg: 'Error, no se logro guardar al estudiante'
        })
    }
}

const setEstado = async (req, res = response) =>{
    const { id, estado } = req.params;
    const mysql = new MySQL();

    try {
        const query = `UPDATE estudiantes SET estado = ${ estado } WHERE id = ${ id }`;
        await mysql.ejecutarQuery( query );
                
        res.json({ msg: "Estudiante editado exitosamente" })        
    } catch (error) {
        return res.json({ msg: 'Error al editar al estudiante' })
    }
}

const setPassword = async (req, res = response) =>{
    const { estudiante_id, password } = req.body;
    const mysql = new MySQL();
    
    try {
        //Encriptar contraseña
        const salt = bcryptjs.genSaltSync();
        const passwordEncriptada = bcryptjs.hashSync(password, salt);

        const query = `UPDATE estudiantes SET password = '${ passwordEncriptada }' WHERE id = ${ estudiante_id }`;
        await mysql.ejecutarQuery( query );
                
        res.json({ msg: "Contraseña editada exitosamente" })        
    } catch (error) {
        console.log( error );
        return res.json({ msg: 'Error al editar la contraseña' })
    }
}

const borrarEstudiante = async (req, res = response) =>{
    const { estudiante_id } = req.params;
    const mysql = new MySQL();

    try {
        const query = `DELETE FROM estudiantes WHERE id = ${ estudiante_id }`;
        await mysql.ejecutarQuery( query );
                
        res.json({ msg: "Estudiante eliminado exitosamente" })        
    } catch (error) {
        res.status(500).json({ message: 'Error, Este estudiante no se puede eliminar' })
    }
}

const estudiantePut = async (req, res = response) =>{
    const { 
      id,
      especialidad_id,
      nombres,
      apellidos,
      email,
      cedula,
      celular,
      curso,
      paralelo,
      seccion } = req.body;

    const mysql = new MySQL();

    try {
        let query = `UPDATE estudiantes SET 
        especialidad_id = ${ especialidad_id },
            nombres     = '${ nombres }',
            apellidos   = '${ apellidos }',
            cedula      = '${ cedula }',
            celular     = '${ celular }',
            curso       = '${ curso }',
            paralelo    = '${ paralelo }',
            seccion     = '${ seccion }', 
            email       = '${ email }' 
            WHERE id    =  ${ id }`;

        console.log( query );
        
        await mysql.ejecutarQuery( query );
                
        res.json({ msg: "Estudiante actualizado exitosamente" })        
    }catch (error) {
        return res.json({ msg: error.sqlMessage })
    }
}

module.exports = {
    borrarEstudiante,
    candidatosDisponibles,
    setEstado,
    setPassword,
    estudianteGet,
    estudiantePost,
    estudiantePut
}