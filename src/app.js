const express = require('express');
const app = express();
const router = express.Router();

//Rotas
const index = require('./routers/index');
const myRoute = require('./routers/myroute');

app.use('/', index);
app.use('/testes', myRoute);

module.exports = app;