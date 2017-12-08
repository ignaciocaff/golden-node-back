const sequelize = require('../db-manager');
const Sequelize = require('sequelize');

const modalidades = sequelize.define('modalidades', {
    id_modalidad: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    descripcion: Sequelize.TEXT
  })

  module.exports = modalidades;