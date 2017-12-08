const torneosRouter = require('express').Router();
const db = require('../db/db-manager');
const torneos = require('../db/models/torneos');

torneosRouter.get('/', (request, response) => {
    response.json(torneos.misTorneos());
});

//torneosRouter.post('/', (request, response) => {
//const torneo = request.body;

//console.log("Torneo recibido", torneo);

// torneos.push(torneo);
//response.json(torneo);
//});

module.exports = torneosRouter;