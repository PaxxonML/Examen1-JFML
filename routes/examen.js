const express = require('express');
const router = express.Router();
const examenController = require('../controllers/examen');

router.get('/pagina', examenController.getPagina);

router.get('/validacion', examenController.getForm);
router.post('/validacion', examenController.validateTriangle);

module.exports = router;