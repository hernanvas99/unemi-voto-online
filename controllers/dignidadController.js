const { response } = require('express');
const MySQL = require('../database/config');

const dignidadGet = async (req, res = response) =>{
    const mysql = new MySQL();

    try{
        const query = `SELECT * FROM dignidades ORDER BY id DESC`;

        const dignidades = await mysql.ejecutarQuery( query );
                
        res.json({ dignidades })        
    }catch (error) {
        console.log(error);
        return res.json({ msg: 'Error al consultar en la DB' })
    }
}

const dignidadPost = async (req, res = response) =>{
    const { nombre } = req.body;

    const mysql = new MySQL();

    try{
        const query = `INSERT INTO dignidades(nombre) VALUES('${ nombre }')`;

        await mysql.ejecutarQuery( query );

        res.json({ msg: 'Dignidad insertado exitosamente' })
    }catch (error) {
        console.log(error);
        return res.json({ msg: 'Error al consultar en la DB' })
    }
}

const dignidadPut = async (req, res = response) =>{
    const { nombre, id } = req.body;
    const mysql = new MySQL();

    try{
        const query = `UPDATE dignidades SET nombre = '${ nombre }' WHERE id = ${ id }`;
        await mysql.ejecutarQuery( query );

        res.json({ msg: 'Dignidad editado exitosamente' })
    }catch (error) {
        console.log(error);
        return res.json({ msg: 'Error al consultar en la DB' })
    }
}

const dignidadDelete = async (req, res = response) =>{
    const { dignidad_id } = req.params;
    const mysql = new MySQL();

    try{
        await mysql.ejecutarQuery( `DELETE FROM dignidades WHERE id = ${ dignidad_id }` );
        
        res.json({ msg: 'Dignidad eliminado exitosamente' })
    }catch (error) {
        return res.status(500).json({ msg: 'Error, no puede eliminar esta dignidad' })
    }
}

module.exports = {
    dignidadGet,
    dignidadPost,
    dignidadPut,
    dignidadDelete
}