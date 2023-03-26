const plantilla = ( req ) => {
  return /*html*/`
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
    <table style="width: 500px; margin-top: 30px">
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
              ${ req.eleccion }
          </label>
          <br>
          <label style="position: relative; bottom: 6px; font-weight: 700;">
            RESULTADOS ELECTORALES
          </label>
        </td>
      </tr>
    </table>

    <table style="margin-top: 30px; width: 440px; margin-left: 49px">
      <tr style="text-align: center">
        <td style="font-size: 14px;font-weight: 700;">
          CERTIFICADO DE PARTICIPACIÓN EN LAS VOTACIONES ELECTRONICAS DEL CONSEJO ESTUDIANTIL DE LA UNEMI
        </td>
      </tr>
    </table>

    <table style="margin-top: 10px; width: 420px; margin-left: 59px">
      <tr style="text-align: left">
        <td style="font-size: 12px;text-align: justify">
          <br>
          <label style="font-weight: 700;">
            LA SECRETARÍA DE LA UNIVERSIDAD ESTATAL DE MILAGRO CERTIFICA:
          </label>
          <br><br>
          <label style="position: relative; top: 10px; line-height: 24px">
            QUE EL SR(TA). ${ req.estudiante } CON NÚMERO DE CÉDULA DE IDENTIDAD ${ req.cedula }, HA PARTICIPADO EN LA ELECCIÓN 2023 CORRESPONDIENTE AL ${ req.periodo }, EN LA FECHA DEL ${ req.fecha_votacion } A LAS ${ req.hora_votacion }.
          </label> 
          <br><br>
          <label style="position: relative; top: 14px; line-height: 24px">
            CONSTANCIA QUE ESCRIBO A SOLICITUD DE LA PARTE INTERESADA PARA LOS
            FINES PERTINENTES
          </label> 
        </td>
      </tr>
    </table>

    <table style="margin-top: 23px; width: 470px; margin-left: 10px">
      <tr style="text-align: right">
        <td style="font-size: 13px;">
          <label style="font-weight: 700;">
            Milagro, ${ req.fecha_votacion }
          </label>
        </td>
      </tr>
    </table>

  </body>
</html>
    `
}

module.exports = {
  plantilla
}