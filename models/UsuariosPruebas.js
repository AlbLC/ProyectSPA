const Sequelize = require('sequelize');
const sequelize = require('../databases/sql');

const Usuario = sequelize.define('usuario_pruebas', {
    id_usuario_pruebas: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  fk_usuario: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  fk_pruebas: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  tarjeta: {
    type: Sequelize.STRING,
    allowNull: false,
  }, 
  dorsal: {
    type: Sequelize.STRING,
    allowNull: false,
  }, 
});
module.exports = Usuario;
