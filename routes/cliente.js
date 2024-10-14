const { Router } = require('express');
const { findAllController, findByRutController, insertController, updateController, deleteByRutController } = require('../controller/cliente');

const router = Router();

router.get('/', findAllController);

router.get('/findByRut', findByRutController);

router.post('/insert', insertController);

router.post('/update', updateController);

router.get('/deleteByRut', deleteByRutController);

module.exports = router;