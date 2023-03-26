const { Router } = require('express');
const { check } = require('express-validator');
const { estudiantePost, estudianteGet, estudiantePut, setEstado, borrarEstudiante, candidatosDisponibles, setPassword } = require('../controllers/estudianteController');

const { validarCampos, validarJWT } = require('../middlewares');

const router = Router();

router.get('/:estado', [
  validarJWT,
  validarCampos,
], estudianteGet); 

router.get('/candidatos_disponibles/:apertura_id', [
  validarJWT,
  validarCampos,
], candidatosDisponibles); 

router.post('/', [
  validarJWT,
  check('nombres', 'Ingresa los nombres del estudiante').not().isEmpty(),
  check('apellidos', 'Ingresa los apellidos del estudiante').not().isEmpty(),
  check('cedula', 'Ingresa un numero de cedula valido').isLength({ min: 10, max: 10 }),
  check('celular', 'Ingresa un numero de celular valido').isLength({ min: 10, max: 10 }),
  validarCampos,
], estudiantePost); 

router.post('/setPassword', [
  validarJWT,
  validarCampos,
], setPassword); 

router.put('/', [
  validarJWT,
  check('nombres', 'Ingresa los nombres del estudiante').not().isEmpty(),
  check('apellidos', 'Ingresa los apellidos del estudiante').not().isEmpty(),
  check('cedula', 'Ingresa un numero de cedula valido').isLength({ min: 10, max: 10 }),
  check('celular', 'Ingresa un numero de celular valido').isLength({ min: 10, max: 10 }),
  validarCampos,
], estudiantePut); 

router.delete('/:id/:estado', [
  validarJWT,  
  validarCampos
], setEstado); 

router.delete('/:estudiante_id', [
  validarJWT,
  validarCampos,
], borrarEstudiante);

module.exports = router;



