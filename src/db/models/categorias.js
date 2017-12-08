const sequelize = require('../db-manager');
const Sequelize = require('sequelize');

const categorias = sequelize.define('categorias', {
    id_categoria: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    descripcion: Sequelize.TEXT
  })

  module.exports = categorias;