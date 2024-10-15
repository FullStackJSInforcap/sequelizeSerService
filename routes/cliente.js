const { Router } = require('express');
const { findAllController, findByRutController, insertController, updateController, deleteByRutController, preInsertController, preUpdateController } = require('../controller/cliente');

const router = Router();

router.get('/', findAllController);

router.get('/findByRut', findByRutController);

router.get('/insert', preInsertController);

router.post('/insert', insertController);

router.get('/update', preUpdateController);

router.post('/update', updateController);

router.get('/deleteByRut', deleteByRutController);

module.exports = router;