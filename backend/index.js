//Importando o Framwork Express
const express = require('express');

//Instanciando o express
const app = express();

// CABEÇALHOS
app.use(function (req, res, next) {
    res.header("Content-Type", "application/x-www-form-urlencoded");
    res.header("Content-Type", "text/plain; charset=UTF-8");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods","POST, GET");
    res.header("Access-Control-Allow-Headers","*");
    res.header("Access-Control-Max-Age","86400");
    next();
  });

//Importando o bando de dados
const database = require('../backend/database');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Importando Controller
const createUser = require('./controller/createUser')
app.use('/', createUser)

app.listen(3000, ()=>{
    console.log('Servidor rodando na porta 3000');
});

