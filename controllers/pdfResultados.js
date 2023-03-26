const resultado = ( info ) => {
  let total = 0;
  let html = /*html*/`
<!DOCTYPE html>
<html lang="es">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Certificado de Votacion</title>
      
      <style>
        body{
          background-image: url("./imgs/unemi.jpg");
          background-repeat: no-repeat;
          width: 300px;
        }
      </style>
  </head>
  <body>
    <table style="width: 500px;">
      <tr>
        <td style="width: 50px; text-align:center">
          <img 
            style="position:relative; left: 25px"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/UNEMI-logo.jpg/800px-UNEMI-logo.jpg"
            width="115px" height="120px" >
        </td>
        <td style="width: 210px; margin-bottom: 25px; text-align:center;">
          <label style="position: relative; bottom: 12px; color: #2657a6">
            UNIVERSIDAD ESTATAL DE MILAGRO
          </label>
          <label style="position: relative; bottom: 10px; font-size: 13px">
            VC64+6CQ, Milagro
          </label>
          <br>
          <label style="position: relative; bottom: 8px; font-weight: 500;">
            ${ info.eleccionSelecta }
          </label>
          <br>
          <label style="position: relative; bottom: 6px; font-weight: 700;">
            RESULTADOS ELECTORALES
          </label>
        </td>
      </tr>
    </table>`


  html += /*html*/`
    <table style='margin-left: 110px; margin-top:23px;width: 350px' border="1">
      <tr>
        <td colspan="2" style="text-align:center">
          DETALLES DE LA ELECCION
        </td>
      </tr>
      <tr>
        <td style="text-align: right"><strong>Fecha de Votación:</strong></td>
        <td>&nbsp;&nbsp;${ info.fecha }</td>
      </tr>
      <tr>
        <td style="text-align: right"><strong>Horas de votacion:</strong></td>
        <td>&nbsp;&nbsp;${ info.horas }</td>
      </tr>
      <tr>
        <td style="text-align: right"><strong>Total de votos:</strong></td>
        <td>&nbsp;&nbsp;${ info.totalVotos }</td>
      </tr>
      <tr>
        <td style="text-align: right"><strong>N° de Candidatos:</strong></td>
        <td>&nbsp;&nbsp;${ info.numCandidatos }</td>
      </tr>
      <tr>
        <td style="text-align: right"><strong>Ganador:</strong></td>
        <td>&nbsp;&nbsp;${ info.ganador }</td>
      </tr>
    </table>`

  html += /*html*/`
    <table style='margin-left: 55px; margin-top:23px; color: #088006;width: 440px'>
      <tr>
        <td>
        <img 
          style="position:relative; left: 50px"
          src='${ info.estadistica }'
          width="335px" height="190px" >
        </td>
      </tr>
    </table>`
    
  html += /*html*/`
    <table style='margin-right: 20px; margin-top:23px; color: #088006;width: 640px'>
      <tr>
        <td>
        <img 
          style="position: relative; right: 43px"
          src='${ info.comitiva }'
          width="685px" height="140px" >
        </td>
      </tr>
    </table>`
    
  html += `</body>
</html>`

return html
}

module.exports = {
  resultado
}