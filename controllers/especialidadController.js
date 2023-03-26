const { response } = require('express');
const MySQL = require('../database/config');

const especialidadesGet = async (req, res = response) =>{

    const mysql = new MySQL();

    try{
        let query = `SELECT * FROM especialidades`;

        if (req.params.estado == 'activos') 
            query += '  WHERE estado = 1'
        
        query += ' ORDER BY id DESC'
        const especialidades = await mysql.ejecutarQuery( query );
                
        res.json({ especialidades })        
    }catch (error) {
        console.log(error);
        return res.json({ msg: 'Error al consultar en la DB' })
    }
}

const especialidadPost = async (req, res = response) =>{
    const { nombre } = req.body;

    const mysql = new MySQL();

    try{
        const query = `INSERT INTO especialidades(nombre) VALUES('${ nombre }')`;

        await mysql.ejecutarQuery( query );

        res.json({ msg: 'Especialidad insertado exitosamente' })
    }catch (error) {
        console.log(error);
        return res.json({ msg: 'Error al consultar en la DB' })
    }
}

const especialidadPut = async (req, res = response) =>{
    const { nombre, id } = req.body;
    const mysql = new MySQL();

    try{
        const query = `UPDATE especialidades SET nombre = '${ nombre }' WHERE id = ${ id }`;
        await mysql.ejecutarQuery( query );

        res.json({ msg: 'Especialidad editado exitosamente' })
    }catch (error) {
        console.log(error);
        return res.json({ msg: 'Error al consultar en la DB' })
    }
}

const setEstado = async (req, res = response) =>{
  const { id, estado } = req.params;
  const mysql = new MySQL();

  try {
      const query = `UPDATE especialidades SET estado = ${ estado } WHERE id = ${ id }`;
      await mysql.ejecutarQuery( query );
              
      res.json({ msg: "Especialidad seteado exitosamente" })        
  } catch (error) {
      return res.json({ msg: 'Error al eliminar al usuario' })
  }
}

const especialidadDelete = async (req, res = response) =>{
    const { especialidad_id } = req.params;
    const mysql = new MySQL();

    try{
        await mysql.ejecutarQuery( `DELETE FROM especialidades WHERE id = ${ especialidad_id }` );
        
        res.json({ msg: 'Especialidad eliminado exitosamente' })
    }catch (error) {
      console.log( error );
        return res.status(500).json({ msg: 'Error, no puede eliminar esta dignidad' })
    }
}

module.exports = {
  especialidadesGet,
  especialidadPost,
  especialidadPut,
  setEstado,
  especialidadDelete
}