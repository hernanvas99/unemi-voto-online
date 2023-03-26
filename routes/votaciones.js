const { Router } = require('express');
const { check } = require('express-validator');
const { getCandidatos, agregarVoto, comprobarVoto, getVotos, getComitiva } = require('../controllers/votacionesController');

const { validarCampos, validarJWT } = require('../middlewares');

const router = Router();

router.get('/get', [
  validarJWT,
  validarCampos,
], getCandidatos); 

router.get('/votos/get/:apertura_id', [
  validarJWT,
  validarCampos,
], getVotos); 

router.get('/votos/getComitiva/:apertura_id/:lista_name', [
  validarJWT,
  validarCampos,
], getComitiva); 

router.get('/comprobar-voto/:estudiante_id', [
  validarJWT,
  validarCampos,
], comprobarVoto); 

router.post('/add', [
  validarJWT,
  validarCampos,
], agregarVoto); 

module.exports = router;



