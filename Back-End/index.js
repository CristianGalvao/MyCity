const express = require('express');
const app = express();

//IMPORTANDO O BANCO DE DADOS
const Database = require('./Database/connection');

//IMPORTADNO OS CONTROLLER
const user = require('./Controller/userController');

//USANDO O USE NOS CONTROLLER
app.use('/', user);

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//CRIANDO SERVIDOR
app.listen(3000, ()=>{
    console.log("SERVIDOR RODANDO")
});