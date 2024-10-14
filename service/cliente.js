const Cliente = require("../models/cliente")

const findAll = async () => {
    try {
        const clientes = await Cliente.findAll();
        if (clientes.length == 0) {
            return {
                msg: 'No hay datos en la tabla',
                status: 204,
                datos: []
            }
        }
        return {
            msg: 'Los datos consultados son: ',
            status: 200,
            datos: clientes.map(cliente => cliente.dataValues)
        }
    } catch (error) {
        console.log(error.message);
        return {
            msg: 'Error en el servidor',
            status: 500,
            datos: []
        }
    }
}

const findByRut = async (rut) => {
    try {
        const cliente = await Cliente.findOne({
            where: {
                rut: rut
            }
        });
        if (cliente === null) {
            return {
                msg: `El cliente con rut ${rut} no existe`,
                status: 204,
                datos: []
            }
        }
        return {
            msg: `El cliente con rut ${rut} existe`,
            status: 200,
            datos: [cliente.dataValues]
        }
    } catch (error) {
        console.log(error.message);
        return {
            msg: 'Error en el servidor',
            status: 500,
            datos: []
        }
    }
}

const insert = async (id, rut, nombre, apellido, correo) => {
    try {
        const cliente = await Cliente.create({
            id,
            rut,
            nombre,
            apellido,
            correo
        });
        return {
            msg: `El cliente con rut ${rut} y nombre ${nombre} ${apellido} se insertó correctamente`,
            status: 201,
            datos: [cliente.dataValues]
        }
    } catch (error) {
        console.log(error.message);
        return {
            msg: 'Error en el servidor',
            status: 500,
            datos: []
        }
    }
}

const update = () => {

}
const deleteByRut = () => {

}

