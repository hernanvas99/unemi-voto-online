const { Router } = require('express');
const { check } = require('express-validator');
const { listaPost, listasGet, listaPut, setEstado, borrarLista, listasByPeriodo } = require('../controllers/listasController');

const { validarCampos, validarJWT } = require('../middlewares');

const router = Router();

router.get('/:estado', [
  validarJWT,
  validarCampos,
], listasGet); 

router.get('/listasByPeriodo/:apertura_id', [
  validarJWT,
  validarCampos,
], listasByPeriodo); 

router.post('/', [
  validarJWT,
  check('periodo_id', 'Ingresa el periodo lectivo').not().isEmpty(),
  check('representante', 'Ingresa el representante lega').not().isEmpty(),
  check('descripcion', 'Ingresa la descripcion de la lista').not().isEmpty(),
  validarCampos,
], listaPost); 

router.put('/', [
  validarJWT,
  check('periodo_id', 'Ingresa el periodo lectivo').not().isEmpty(),
  check('representante', 'Ingresa el representante lega').not().isEmpty(),
  check('descripcion', 'Ingresa la descripcion de la lista').not().isEmpty(),
  validarCampos,
], listaPut); 

router.delete('/:lista_id/:estado', [
  validarJWT,  
  validarCampos
], setEstado); 

router.delete('/:lista_id', [
  validarJWT,
  validarCampos,
], borrarLista);

module.exports = router;



