const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
    res.status(200).send({
        title: "Node Express API",
        version: "0.0.1"
    });
});

router.get('/sobre', function (req, res, next) {
    // envia o arquivo da página principal
    vmPath = __dirname.substr(0,__dirname.indexOf("routers"));
    //vmPath = vmPath.slice(-2).join('/');
    console.log(vmPath)
    res.sendFile( vmPath + '/views/index.html')
});

router.get('/sobre1',function (req, res, next ) {
    res.send("Um simples teste de NodeJS.")
});

router.get('/hbs', (req, res) => {
    //res.render('index',{layout:'main'})
    res.render('tstbody')
})

module.exports = router;