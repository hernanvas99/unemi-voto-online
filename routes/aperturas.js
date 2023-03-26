const { Router } = require('express');
const { check } = require('express-validator');
const { aperturaPost, aperturaGet, aperturaPut, setEstado, borrarApertura } = require('../controllers/aperturaController');
const { borrarEstudiante } = require('../controllers/estudianteController');

const { validarCampos, validarJWT } = require('../middlewares');

const router = Router();

router.get('/:estado', [
  validarJWT,
  validarCampos,
], aperturaGet); 

router.post('/', [
  validarJWT,
  check('periodo_id', 'Ingresa el periodo lectivo').not().isEmpty(),
  check('lugar', 'Ingresa el lugar de votacion').not().isEmpty(),
  check('fecha_inicio', 'Ingresa la fecha de inicio').not().isEmpty(),
  check('hora_inicio', 'Ingresa la hora de inicio').not().isEmpty(),
  check('hora_fin', 'Ingresa la hora de finalización').not().isEmpty(),
  validarCampos,
], aperturaPost); 

router.put('/', [
  validarJWT,
  check('periodo_id', 'Ingresa el periodo lectivo').not().isEmpty(),
  check('lugar', 'Ingresa el lugar de votacion').not().isEmpty(),
  check('fecha_inicio', 'Ingresa la fecha de inicio').not().isEmpty(),
  check('hora_inicio', 'Ingresa la hora de inicio').not().isEmpty(),
  check('hora_fin', 'Ingresa la hora de finalización').not().isEmpty(),
  validarCampos,
], aperturaPut); 

router.delete('/:id/:estado', [
  validarJWT,  
  validarCampos
], setEstado); 

router.delete('/:apertura_id', [
  validarJWT,
  validarCampos,
], borrarApertura);

module.exports = router;



