const { Router } = require('express');
const { check } = require('express-validator');
const { especialidadesGet, especialidadPost, especialidadPut, setEstado, especialidadDelete } = require('../controllers/especialidadController');

const { validarCampos, validarJWT } = require('../middlewares');

const router = Router();

router.get('/:estado', [
  validarJWT,
  validarCampos,
], especialidadesGet); 

router.post('/', [
  validarJWT,
  check('nombre', 'Ingresa el nombre de la especialidad').not().isEmpty(),
  validarCampos,
], especialidadPost); 

router.put('/', [
  validarJWT,
  check('nombre', 'Ingresa el nombre de la especialidad').not().isEmpty(),
  validarCampos,
], especialidadPut); 

router.delete('/:id/:estado', [
  validarJWT,  
  validarCampos
], setEstado); 

router.delete('/:especialidad_id', [
  validarJWT,
  validarCampos,
], especialidadDelete);

module.exports = router;



