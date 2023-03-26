const { Router } = require('express');
const { check } = require('express-validator');
const { presidentePost, presidenteGet, candidatosGet, presidentePut, setEstado, borrarPresidente } = require('../controllers/presidenteController');

const { validarCampos, validarJWT } = require('../middlewares');

const router = Router();

router.get('/:estado', [
  validarJWT,
  validarCampos,
], presidenteGet); 

router.get('/candidatos/:presidente_id', [
  validarJWT,
  validarCampos,
], candidatosGet); 

router.post('/', [
  validarJWT,
  check('lista_id', 'Debes elegir la lista del candidato').not().isEmpty(),
  check('presidente_id', 'Debes elegir al candidato').not().isEmpty(),
  validarCampos,
], presidentePost); 

router.put('/', [
  validarJWT,
  check('lista_id', 'Debes elegir la lista del candidato').not().isEmpty(),
  check('presidente_id', 'Debes elegir al candidato').not().isEmpty(),
  validarCampos,
], presidentePut); 

router.delete('/:id/:estado', [
  validarJWT,  
  validarCampos
], setEstado); 

router.delete('/:presidente_id', [
  validarJWT,
  validarCampos,
], borrarPresidente);

module.exports = router;



