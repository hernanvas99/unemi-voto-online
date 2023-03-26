const { Router } = require('express');
const { check } = require('express-validator');
const { reporte, reporteGanadores } = require('../controllers/reporteController');

const { validarCampos, validarJWT } = require('../middlewares');

const router = Router();

router.post('/', [
  validarJWT,
  validarCampos,
], reporte); 

router.post('/ganador', [
  validarJWT,
  validarCampos,
], reporteGanadores); 

module.exports = router;



