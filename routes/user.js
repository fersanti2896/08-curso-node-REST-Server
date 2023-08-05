
const { Router } = require('express');
const { usuariosGET, usuariosPOST, usuariosPUT, usuariosDELETE } = require('../controller/userController');

const router = Router();

router.get('/', usuariosGET);

router.post('/', usuariosPOST);

router.put('/', usuariosPUT);

router.delete('/', usuariosDELETE);

module.exports = router;