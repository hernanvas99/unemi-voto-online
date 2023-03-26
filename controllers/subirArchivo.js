const { v4: uuidv4 } = require('uuid');
const path = require('path');

const subirArchivo = ( { foto }, extensionesValidas = ['png', 'jpg', 'jpeg', 'gif'], carpeta = '' ) => {

    return new Promise( (resolve, reject) => {
        
        const nombreCortado = foto.name.split('.');
        const extension = nombreCortado[ nombreCortado.length -1 ];
        
        if (!extensionesValidas.includes(extension)) {    
            return reject(`La extension ${extension} no es permitida - ${extensionesValidas}`);
        }
    
        const nombreTemp = uuidv4() + '.' + extension ; 
        const uploadPath = path.join(__dirname , '../public/' , carpeta, nombreTemp);
       
        foto.mv(uploadPath, (err) => {
          if (err) {
              reject(err);            
          }
          resolve(nombreTemp);          
        });
    }) 
}

module.exports = {
    subirArchivo
}
