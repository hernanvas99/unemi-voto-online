const { Router } = require('express');
const { check } = require('express-validator');
const { dignidadGet, dignidadPost, dignidadPut, dignidadDelete } = require('../controllers/dignidadController');

const { validarCampos, validarJWT } = require('../middlewares');

const router = Router();

router.get('/', [
  validarJWT,
  validarCampos,
], dignidadGet); 

router.post('/', [
  validarJWT,
  check('nombre', 'Ingresa el nombre de la dignidad').not().isEmpty(),
  validarCampos,
], dignidadPost); 

router.put('/', [
  validarJWT,
  check('nombre', 'Ingresa el nombre de la dignidad').not().isEmpty(),
  validarCampos,
], dignidadPut); 

router.delete('/:dignidad_id', [
  validarJWT,
  validarCampos,
], dignidadDelete);

module.exports = router;



