const sequelize = require('../db-manager');
const Sequelize = require('sequelize');

const tiposTorneos = sequelize.define('tipos_torneos', {
    id_tipo: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    descripcion: Sequelize.TEXT
  })

  module.exports = tiposTorneos;