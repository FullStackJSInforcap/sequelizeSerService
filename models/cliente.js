const { DataTypes } = require("sequelize");
const sequelize = require("../database/conexion");


const Cliente = sequelize.define('Cliente', {
   id: {
        primaryKey: true,
        type: DataTypes.INTEGER
   }, 
   rut: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
   },
   nombre: {
        type: DataTypes.STRING,
        allowNull: false
   },
   apellido: {
        type: DataTypes.STRING,
        allowNull: false
   },
   correo: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
   }
}, {
    tableName: 'clientes',
    timestamps: false
});

module.exports = Cliente;