const { response } = require('express');
const MySQL = require('../database/config');

const aperturaGet = async (req, res = response) =>{
    const mysql = new MySQL();

    try{
        let query = `SELECT a.*, p.nombre AS periodo
        FROM aperturas a, periodos p
        WHERE a.periodo_id = p.id`;

        if (req.params.estado == 'activos') 
            query += '  AND a.estado = 1'

        query += ' ORDER BY a.id DESC'

        const aperturas = await mysql.ejecutarQuery( query );
                
        res.json({ aperturas })        
    }catch (error) {
        console.log(error);
        return res.json({ msg: 'Error al cargar las aperturas' })
    }
}

const aperturaPost = async (req, res = response) =>{
    const { 
        periodo_id, lugar, descripcion, fecha_inicio, hora_inicio,
        hora_fin, observacion } = req.body;

    const mysql = new MySQL();

    try {
        await mysql.ejecutarQuery( `UPDATE aperturas SET estado = 0` );    
        //Verificar si el correo existe
        const query = `INSERT INTO aperturas(periodo_id,descripcion,lugar_votacion,fecha_inicio,hora_inicio,hora_fin, observacion) VALUES( ${ periodo_id }, '${ descripcion }', '${ lugar }', '${ fecha_inicio }', '${ hora_inicio }', '${ hora_fin }', '${ observacion }' )`;
        await mysql.ejecutarQuery( query );
                
        res.json({ msg: "Apertura Agregado exitosamente" })        
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
        if ( estado ) 
            await mysql.ejecutarQuery(`UPDATE aperturas SET estado = 0`);            

        const query = `UPDATE aperturas SET estado = ${ estado } WHERE id = ${ id }`;
        await mysql.ejecutarQuery( query );
                
        res.json({ msg: "Apertura editado exitosamente" })        
    } catch (error) {
        return res.json({ msg: 'Error al editar al estudiante' })
    }
}

const borrarApertura = async (req, res = response) =>{
    const { apertura_id } = req.params;
    const mysql = new MySQL();

    try {
        const query = `DELETE FROM aperturas WHERE id = ${ apertura_id }`;
        await mysql.ejecutarQuery( query );
                
        res.json({ msg: "Apertura eliminado exitosamente" })        
    } catch (error) {
        res.status(500).json({ message: 'Error, Esta apertura no se puede eliminar' })
    }
}

const aperturaPut = async (req, res = response) =>{
    const { id, periodo_id, lugar, descripcion, fecha_inicio, hora_inicio,
        hora_fin, observacion } = req.body;

    const mysql = new MySQL();

    try {
        let query = `UPDATE aperturas SET 
            periodo_id     = '${ periodo_id }',
            descripcion    = '${ descripcion }',
            lugar_votacion = '${ lugar }',
            fecha_inicio   = '${ fecha_inicio }',
            hora_inicio    = '${ hora_inicio }',
            hora_fin       = '${ hora_fin }',
            observacion    = '${ observacion }' 
            WHERE id       =  ${ id }`;
        
        await mysql.ejecutarQuery( query );
                
        res.json({ msg: "Apertura actualizado exitosamente" })        
    }catch (error) {
        return res.json({ msg: error.sqlMessage })
    }
}

module.exports = {
    borrarApertura,
    setEstado,
    aperturaGet,
    aperturaPost,
    aperturaPut
}