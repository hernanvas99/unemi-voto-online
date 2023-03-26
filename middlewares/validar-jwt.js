const { response, request } = require('express');
const jwt = require('jsonwebtoken');
const MySQL = require('../database/config');

const validarJWT = async (req = request, res = response, next) =>{
    const token = req.header('Authorization');
    
    if(!token){
        return res.status(401).json({
            msg: "No hay token en la peticion"
        }); 
    }

    try {
        const { user: { id, tipo } } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
        
        const mysql = new MySQL();

        let usuario = null;


        if ( tipo != 'estudiante' ) {
            const query = `SELECT * FROM usuarios WHERE id = '${ id }'`;
            usuario = await mysql.ejecutarQuery( query );
        }else{
            const consulta = `SELECT * FROM estudiantes WHERE id = '${ id }'`;
            usuario = await mysql.ejecutarQuery( consulta );
        }

        if (!usuario || usuario.length === 0) {
            if (!usuario || usuario.length === 0) {
                return res.status(401).json({
                    msg: 'token no valido - usuario no existe en la BD'
                })
            }
        }

        //Verificar si el uid tiene estado true
        if (!usuario[0].estado) {
            return res.status(401).json({
                msg: 'token no valido - usuario inactivo'
            })
        }

        req.usuarioAuth = usuario;
        next();        
    } catch (error) {
        res.status(401).json({
            msg: "Token no valido"
        })
    }

}

module.exports = {
    validarJWT
}