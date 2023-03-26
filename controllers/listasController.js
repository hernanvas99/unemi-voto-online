const { response } = require('express');
const MySQL = require('../database/config');

const listasGet = async (req, res = response) => {
    const mysql = new MySQL();

    try{
        let query = `SELECT l.*, p.nombre AS periodo
        FROM listas l, periodos p
        WHERE l.periodo_id = p.id`;

        if (req.params.estado == 'activos') 
            query += '  AND l.estado = 1'

        if (req.query.periodo_id != '') 
            query += ` AND l.periodo_id = ${ req.query.periodo_id }`

        query += ' ORDER BY l.id DESC'

        const listas = await mysql.ejecutarQuery( query );
                
        res.json({ listas })        
    }catch (error) {
        console.log(error);
        return res.json({ msg: 'Error al cargar las listas' })
    }
}
const listasByPeriodo = async (req, res = response) => {
    const mysql = new MySQL();

    try{
        let query = `SELECT l.*, p.nombre AS periodo
            FROM listas l, aperturas a, periodos p
            WHERE l.periodo_id = p.id AND
            p.id = a.periodo_id AND
            a.id = ${ req.params.apertura_id } AND l.estado = 1`;

        const listas = await mysql.ejecutarQuery( query );
                
        res.json({ listas })        
    }catch (error) {
        console.log(error);
        return res.json({ msg: 'Error al cargar las listas' })
    }
}

const listaPost = async (req, res = response) =>{
    const { periodo_id, representante, descripcion, siglas } = req.body;

    const mysql = new MySQL();

    try {
        //Verificar si el correo existe
        const query = `INSERT INTO listas(periodo_id, descripcion, siglas, representante_legal) VALUES( ${ periodo_id }, '${ descripcion }', '${ siglas }', '${ representante }' )`;
        await mysql.ejecutarQuery( query );
                
        res.json({ msg: "Lista Agregada exitosamente" })        
    } catch (error) {
        console.log(error);
        return res.json({
            msg: 'Error, no se logro guardar al estudiante'
        })
    }
}

const setEstado = async (req, res = response) =>{
    const { lista_id, estado } = req.params;
    const mysql = new MySQL();

    try {
        const query = `UPDATE listas SET estado = ${ estado } WHERE id = ${ lista_id }`;
        await mysql.ejecutarQuery( query );
                
        res.json({ msg: "Lista editado exitosamente" })        
    } catch (error) {
        return res.json({ msg: 'Error al editar al estudiante' })
    }
}

const borrarLista = async (req, res = response) =>{
    const { lista_id } = req.params;
    const mysql = new MySQL();

    try {
        const query = `DELETE FROM listas WHERE id = ${ lista_id }`;
        await mysql.ejecutarQuery( query );
                
        res.json({ msg: "Lista eliminado exitosamente" })        
    } catch (error) {
        res.status(500).json({ message: 'Error, Esta apertura no se puede eliminar' })
    }
}

listaPut = async (req, res = response) =>{
    const { id, periodo_id, representante, descripcion, siglas } = req.body;

    const mysql = new MySQL();

    try {
        let query = `UPDATE listas SET 
            periodo_id     = '${ periodo_id }',
            descripcion    = '${ descripcion }',
            siglas         = '${ siglas }',
            representante_legal   = '${ representante }'
            WHERE id       =  ${ id }`;
        
        await mysql.ejecutarQuery( query );
                
        res.json({ msg: "Lista actualizado exitosamente" })        
    }catch (error) {
        return res.json({ msg: error.sqlMessage })
    }
}

module.exports = {
    listasByPeriodo,
    borrarLista,
    setEstado,
    listasGet,
    listaPost,
    listaPut
}