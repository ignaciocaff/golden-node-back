const sequelize = require('../db-manager');
const Sequelize = require('sequelize');
const tiposTorneos = require('./tipos_torneos');
const reglasTorneo = require('./reglas_torneo');
const categorias = require('./categorias');
const modalidades = require('./modalidades');
var listaTorneos;

const torneos = sequelize.define('torneos', {
  id_torneo: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombre: Sequelize.TEXT,
  descripcion: Sequelize.TEXT,
  fecha_inicio: {
    type: Sequelize.DATE
  },
  fecha_fin: {
    type: Sequelize.DATE
  },
  // It is possible to create foreign keys:
  id_tipo: {
    type: Sequelize.INTEGER,

    references: {
      // This is a reference to another model
      model: tiposTorneos,

      // This is the column name of the referenced model
      key: 'id_tipo',
    }
  },
  id_regla: {
    type: Sequelize.INTEGER,

    references: {
      // This is a reference to another model
      model: reglasTorneo,

      // This is the column name of the referenced model
      key: 'id_regla',
    }
  },
  id_modalidad: {
    type: Sequelize.INTEGER,

    references: {
      // This is a reference to another model
      model: modalidades,

      // This is the column name of the referenced model
      key: 'id_modalidad',
    }
  },
  id_categoria: {
    type: Sequelize.INTEGER,

    references: {
      // This is a reference to another model
      model: categorias,

      // This is the column name of the referenced model
      key: 'id_categoria',
    }
  }
});

function encontrarTodos() {
  return torneos.findAll({
    where: {
      id_torneo: 1
    },
    raw: true
  }).then(torneos => {
    listaTorneos = torneos;
  });
}

encontrarTodos();

exports.misTorneos = function listadoTorneos() {
  return listaTorneos;
};