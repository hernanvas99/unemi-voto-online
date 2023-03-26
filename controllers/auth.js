const { response } = require('express');
const bcryptjs = require('bcryptjs');
const { generarJWT } = require('../helpers/generar-jwt');
const MySQL = require('../database/config');

const login = async (req, res = response) =>{
    try {
        var { email, password: userPassword } = req.body;

        const mysql = new MySQL();
        //Verificar si el correo existe
        const query = `SELECT u.*, r.nombre AS 'rol_name', 'administracion' AS tipo
                    FROM usuarios u, roles r
                    WHERE r.id = u.rol_id AND
                    u.email = '${ email }' `;
        const usuario = await mysql.ejecutarQuery( query );

        if (!usuario || usuario.length === 0){
            //BUSCAR EN LA TABLA ESTUDIANTES
            const query = `SELECT e.id, CONCAT( e.nombres, ' ', e.apellidos ) AS estudiante, e.cedula, CONCAT(e.curso, '', e.paralelo) AS curso, e.seccion, e.password, e.estado, 'estudiante' AS tipo, e.email
            FROM estudiantes e, especialidades es
            WHERE e.especialidad_id = es.id AND
            e.cedula = '${ email }'`;

            const estudiante = await mysql.ejecutarQuery( query );

            if (!estudiante || estudiante.length === 0){
                return res.status(400).json({ msg: "ERROR - no se encontró este usuario"})
            }else{
                //Si el usuario esta activo
                if(!estudiante[0].estado){
                    return res.status(400).json({
                        msg: "ERROR - El estudiante se encuentra inactivo"
                    })
                }else{
                    //Verificar contraseña
                    const validPassword = bcryptjs.compareSync(userPassword, estudiante[0].password);
                    if(!validPassword){
                        return res.status(400).json({
                            msg: "ERROR - La contraseña es incorrecta"
                        })
                    }else{
                        // //Generar JWT
                        const { estado, ...rest } = estudiante[0];
                        const token = await generarJWT( rest );
    
                        return res.json({
                            msg: 'Login ok',
                            token,
                            user: 'estudiante'        
                        }) 
                    }
                }
            }
        }


        // //Si el usuario esta activo
        if(!usuario[0].estado) {
            return res.status(400).json({
                msg: "ERROR - Este usuario se encuentra inactivo"
            })
        }
        // //Verificar contraseña
        const validPassword = bcryptjs.compareSync(userPassword, usuario[0].password);
        if(!validPassword){
            return res.status(400).json({
                msg: "ERROR - La contraseña es incorrecta"
            })
        }
        // //Generar JWT
        const { estado, password, ...rest } = usuario[0];
        const token = await generarJWT( rest );

        res.json({
            msg: 'Login ok',
            token,
            user: 'administrativo'            
        })        
    } catch (error) {
        console.log(error);
        return res.json({
            msg: 'Hable con el administrador'
        })
    }
}

module.exports = {
    login
}