
const { response } = require('express');

const usuariosGET = (req, res = response) => {
    res.status(200).json({
        "msg": "GET API - Controlador"
    });
}

const usuariosPOST = (req, res = response) => {
    res.status(201).json({
        "msg": "POST API - Controlador"
    });
}

const usuariosPUT = (req, res = response) => {
    res.json({
        "msg": "PUT API - Controlador"
    });
}

const usuariosDELETE = (req, res = response) => {
    res.json({
        "msg": "DELETE API - Controlador"
    });
}

module.exports = {
    usuariosDELETE,
    usuariosGET,
    usuariosPOST,
    usuariosPUT
}