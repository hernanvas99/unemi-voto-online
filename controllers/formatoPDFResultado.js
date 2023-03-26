const plantilla = ( candidatos, ganador ) => {
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
              ELECCIONES 2023
          </label>
          <br>
          <label style="position: relative; bottom: 6px; font-weight: 700;">
            RESULTADOS ELECTORALES
          </label>
        </td>
      </tr>
    </table>

    <table style="margin-top: 30px; width: 440px; margin-left: 49px" border="1">
      <tr style="text-align: center">
        <td style="font-size: 12px;font-weight: 700;">
          CANDIDATOS
        </td>
        <td style="font-size: 12px;font-weight: 700;">
          LISTAS
        </td>
        <td style="font-size: 12px;font-weight: 700;">
          VOTOS
        </td>
      </tr>`

    candidatos.forEach(c => {
      total += c.totalVotos;
      html += `
      <tr style="text-align: center">
        <td style="font-size: 12px;">
          ${ c.candidato }
        </td>
        <td style="font-size: 12px;">
          ${ c.descripcion }
        </td>
        <td style="font-size: 12px;">
          ${ c.totalVotos }
        </td>
      </tr>`
    });

  html += `
    <tr style="text-align: right">
      <td style="font-size: 12px;"></td>
      <td style="font-size: 12px;font-weight: bold">
        Total de Votos
      </td>
      <td style="font-size: 12px;text-align:center; background-color: #e8e8e8" colspan="3">
        ${ total }
      </td>
    </tr>
  </table>`

  html += /*html*/`
    <table style='margin-left: 50px; margin-top:43px; color: #088006;width: 440px'>
      <tr>
        <td>
          ${ ganador.length == 1 ? 
            `Ganador ${ganador[0].candidato } con ${ ganador[0].totalVotos } votos` 
            : 
            'Se genero un empate'}
        </td>
      </tr>
    </table>
  `
    
  html += `</body>
</html>`

return html

}

const noVotaronPlantilla = ( estudiantes, eleccion, tipo_reporte ) => {
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
              ${ eleccion }
          </label>
          <br>
          <label style="position: relative; bottom: 6px; font-weight: 700;">
            RESULTADOS ELECTORALES
          </label>
        </td>
      </tr>
    </table>

    <table style="margin-top: 15px; width: 480px; margin-left: 29px">
      <tr style="text-align: center">
        <td style="font-size: 13px;font-weight: 700;">
        ${ tipo_reporte == 'Estudiantes que no votaron' ? 
            'LISTADO DE ESTUDIANTES QUE NO VOTARÓN'
          :
            'LISTADO DE ESTUDIANTES QUE VOTARÓN'
        }
          
        </td>
      </tr>
    </table>

    <table style="margin-top: 20px; width: 480px; margin-left: 29px" border="1">
      <tr style="text-align: center">
        <td style="font-size: 12px;font-weight: 700;">
          ESTUDIANTES
        </td>
        <td style="font-size: 12px;font-weight: 700;">
          ESPECIALIDAD
        </td>
        <td style="font-size: 12px;font-weight: 700;">
          CURSOS
        </td>
      </tr>`

    estudiantes.forEach(e => {
      html += `
      <tr style="text-align: eenter">
        <td style="font-size: 11px;">
          ${ e.estudiante }
        </td>
        <td style="font-size: 11px;text-align:center">
          ${ e.especialidad }
        </td>
        <td style="font-size: 11px;text-align:center">
          ${ e.curso }
        </td>
      </tr>`
    });

    
  html += `</table>
  </body>
</html>`

return html
}

module.exports = {
  plantilla,
  noVotaronPlantilla
}