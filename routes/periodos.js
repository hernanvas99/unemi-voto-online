const { Router } = require('express');
const { check } = require('express-validator');
const { periodoPost, periodosGet, periodoPut, setEstado, periodoDelete } = require('../controllers/periodoController');

const { validarCampos, validarJWT } = require('../middlewares');

const router = Router();

router.get('/:estado', [
  validarJWT,
  validarCampos,
], periodosGet); 

router.post('/', [
  validarJWT,
  check('nombre', 'Ingresa el nombre del periodo').not().isEmpty(),
  validarCampos,
], periodoPost); 

router.put('/', [
  validarJWT,
  check('nombre', 'Ingresa el nombre del periodo').not().isEmpty(),
  validarCampos,
], periodoPut); 

router.delete('/:id/:estado', [
  validarJWT,  
  validarCampos
], setEstado); 

router.delete('/:periodo_id', [
  validarJWT,
  validarCampos,
], periodoDelete);

module.exports = router;



