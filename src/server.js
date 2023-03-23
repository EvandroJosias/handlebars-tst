const express = require('express');
const exphbs  = require('express-handlebars');

const app = require('../src/app');

const port = normalizaPort(process.env.PORT || '3000');

function normalizaPort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
}

app.use('/static', express.static(__dirname + '/static'))

// define qual o template a ser utilizado
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

// define a extensão e a instância do handlebars com o modelo que será interpretado o código
app.engine( 'hbs', exphbs.engine( {
    extname: '.hbs',
    defaultView: 'main',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/'
}));

app.listen(port, function () {
    console.log(`A aplicação esta ativa na porta ${port}`)
});