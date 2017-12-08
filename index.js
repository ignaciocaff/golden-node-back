const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const server = require('http').createServer(app);
const torneosRouter = require('./src/routes/torneos-router');
const morgan = require('morgan');

// Middleware - Morgan
app.use(morgan('dev'));

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, 'index.html'));
});

// Middleware Body - parser
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// Middleware - Registrar un router
app.use('/torneos', torneosRouter);

server.listen( port, () => {
console.log("Servidor en ejecucion en puerto: ", port);
});