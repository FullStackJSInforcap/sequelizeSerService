const { findAll, findByRut, insert, update, deleteByRut } = require("../service/cliente");

const findAllController = async (req, res) => {
    const respuesta = await findAll();
    res.render('index', {
        titulo: 'Inicio',
        respuesta
    });
}

const findByRutController = async (req, res) => {
    const rut = req.query.rut;
    const respuesta = await findByRut(rut);
    res.render('index', {
        titulo: 'Búsqueda por rut',
        respuesta
    });
}

const preInsertController = (req, res) => {
    res.render('insert');
}

const insertController = async (req, res) => {
    const id = req.body.id;
    const rut = req.body.rut;
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const correo = req.body.correo;
    const respuesta = await insert(id, rut, nombre, apellido, correo);
    res.render('index', {
        titulo: 'Post insertar',
        respuesta
    });
}

const preUpdateController = async (req, res) => {
    const rut = req.query.rut;
    const respuesta = await findByRut(rut);
    respuesta.datos = respuesta.datos[0];
    console.log(respuesta);
    
    res.render('update', {
        titulo: 'Actualizar',
        respuesta
    });
}

const updateController = async (req, res) => {
    const rut = req.body.rut;
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const correo = req.body.correo;
    const respuesta = await update(rut, nombre, apellido, correo);
    res.render('index', {
        titulo: 'Post actualizar',
        respuesta
    });
}

const deleteByRutController = async (req, res) => {
    const rut = req.query.rut;
    const respuesta = await deleteByRut(rut);
    res.render('index', {
        titulo: 'Eliminado por rut',
        respuesta
    });
}

module.exports = {
    findAllController,
    findByRutController,
    preInsertController,
    insertController,
    preUpdateController,
    updateController,
    deleteByRutController
}