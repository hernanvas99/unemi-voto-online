 const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');

class Serverr{
    
    constructor(){
        this.cnn = "testing";
        this.app = express();

        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')( this.server, {
            cors: {
              origin: "http://localhost:9000"
            }
          } );

        this.port = process.env.PORT;

        this.paths = {
            auth:   '/api/auth',
            buscar: '/api/buscar',
            roles: '/api/roles',
            usuarios: '/api/usuarios',
            dignidades: '/api/dignidades',
            especialidades: '/api/especialidades',
            estudiantes: '/api/estudiantes',
            listas: '/api/listas',
            periodos: '/api/periodos',
            presidentes: '/api/presidentes',
            aperturas: '/api/aperturas',
            votaciones: '/api/votaciones',
            reportes: '/api/reportes'
        }
        
        //Midlewares
        this.midlewares();
        //Rutas de mi aplicacion
        this.routes();

        this.sockets();
    }

    midlewares(){
        //CORDS
        this.app.use( cors() );

        //Lectura y Parseo del body
        this.app.use( express.json() );

        //Directorio publico
        this.app.use(express.static('public'));

        //Carga de archivos
        this.app.use(fileUpload({
            useTempFiles : true,
            tempFileDir : '/tmp/',
            createParentPath: true
        }));
    }

    routes(){
        this.app.use(this.paths.auth, require('../routes/auth'));
        this.app.use(this.paths.aperturas, require('../routes/aperturas'));
        this.app.use(this.paths.buscar, require('../routes/buscar'));
        this.app.use(this.paths.usuarios, require('../routes/usuarios'));
        this.app.use(this.paths.listas, require('../routes/listas'));
        this.app.use(this.paths.roles, require('../routes/roles'));
        this.app.use(this.paths.dignidades, require('../routes/dignidades'));
        this.app.use(this.paths.especialidades, require('../routes/especialidades'));
        this.app.use(this.paths.estudiantes, require('../routes/estudiantes'));
        this.app.use(this.paths.periodos, require('../routes/periodos'));
        this.app.use(this.paths.presidentes, require('../routes/presidentes'));
        this.app.use(this.paths.reportes, require('../routes/reportes'));
        this.app.use(this.paths.votaciones, require('../routes/votaciones'));
    }
 
    sockets(){
        this.io.on('connection', (socket) => {
            // console.log('a user connected');

            socket.on('voto-generado', ( payload ) => {
                this.io.emit('actualizar-grafica');
            })
        });
    }

    listen(){        
        this.server.listen(this.port, () => {
            console.log(`Example app listening at http://localhost:${this.port}`)

            // socket.on('disconnect', () => {
            //     console.log('user disconnected');
            // });
        })
    }
}

module.exports = Serverr;