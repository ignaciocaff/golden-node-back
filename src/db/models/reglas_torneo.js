const sequelize = require('../db-manager');
const Sequelize = require('sequelize');

const reglasTorneo = sequelize.define('reglas_torneo', {
    id_regla: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    descripcion: Sequelize.TEXT
  })

  module.exports = reglasTorneo;