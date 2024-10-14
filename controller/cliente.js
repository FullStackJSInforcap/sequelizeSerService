const { findAll, findByRut, insert, update, deleteByRut } = require("../service/cliente");

const findAllController = async (req, res) => {
    const respuesta = await findAll();
    console.log(respuesta);
    res.send('FindAll');
}

const findByRutController = async (req, res) => {
    const rut = req.query.rut;
    const respuesta = await findByRut(rut);
    console.log(respuesta);
    res.send('findByRut');
}

const insertController = async (req, res) => {
    const id = req.body.id;
    const rut = req.body.rut;
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const correo = req.body.correo;
    const respuesta = await insert(id, rut, nombre, apellido, correo);
    console.log(respuesta);
    res.send('Insert');
}

const updateController = async (req, res) => {
    const rut = req.body.rut;
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const correo = req.body.correo;
    const respuesta = await update(rut, nombre, apellido, correo);
    console.log(respuesta);
    res.send('Update');
}

const deleteByRutController = async (req, res) => {
    const rut = req.query.rut;
    const respuesta = await deleteByRut(rut);
    console.log(respuesta);
    res.send('deleteByRut');
}

module.exports = {
    findAllController,
    findByRutController,
    insertController,
    updateController,
    deleteByRutController
}