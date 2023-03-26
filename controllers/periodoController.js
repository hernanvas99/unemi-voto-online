const { response } = require('express');
const MySQL = require('../database/config');

const periodosGet = async (req, res = response) =>{

    const mysql = new MySQL();

    try{
        let query = `SELECT * FROM periodos`;

        if (req.params.estado == 'activos') 
            query += ' WHERE estado = 1'
        
        query += ' ORDER BY id DESC'
        const periodos = await mysql.ejecutarQuery( query );
                
        res.json({ periodos })        
    }catch (error) {
        console.log(error);
        return res.json({ msg: 'Error al consultar en la DB' })
    }
}

const periodoPost = async (req, res = response) =>{
    const { nombre } = req.body;

    const mysql = new MySQL();

    try{
        const query = `INSERT INTO periodos( nombre ) VALUES('${ nombre }')`;

        await mysql.ejecutarQuery( query );

        res.json({ msg: 'Periodo insertado exitosamente' })
    }catch (error) {
        console.log(error);
        return res.json({ msg: 'Error al nsertar el periodo' })
    }
}

const periodoPut = async (req, res = response) =>{
    const { nombre, id } = req.body;
    const mysql = new MySQL();

    try{
        const query = `UPDATE periodos SET nombre = '${ nombre }' WHERE id = ${ id }`;
        await mysql.ejecutarQuery( query );

        res.json({ msg: 'Periodo editado exitosamente' })
    }catch (error) {
        console.log(error);
        return res.json({ msg: 'Error al consultar en la DB' })
    }
}

const setEstado = async (req, res = response) =>{
  const { id, estado } = req.params;
  const mysql = new MySQL();

  try {
      const query = `UPDATE periodos SET estado = ${ estado } WHERE id = ${ id }`;
      await mysql.ejecutarQuery( query );
      res.json({ msg: "Periodo seteado exitosamente" })        
  } catch (error) {
      return res.json({ msg: 'Error al setear el periodo' })
  }
}

const periodoDelete = async (req, res = response) =>{
    const { periodo_id } = req.params;
    const mysql = new MySQL();

    try{
        await mysql.ejecutarQuery( `DELETE FROM periodos WHERE id = ${ periodo_id }` );
        
        res.json({ msg: 'Periodo eliminado exitosamente' })
    }catch (error) {
      console.log( error );
        return res.status(500).json({ msg: 'Error, no puede eliminar esta dignidad' })
    }
}

module.exports = {
  periodosGet,
  periodoPost,
  periodoPut,
  setEstado,
  periodoDelete
}