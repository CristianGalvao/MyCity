//CRIANDO VARIAVEL DE ROTA
const express = require('express');
const router = express.Router();

const sequelize = require('sequelize')

//IMPORTANDO A CONEXÃO COM BANCO DE DADOS
const Database = require('../Database/connection');

//CRIANDO ROTAS
router.get('/userList', async (req, res) => {

    const sql = `SELECT * FROM users;`;

    await Database.query(sql, function (error, results, fields) {

        if (error){
            console.log('ERRO NO LISTAR USUARIOS')
        };
     
        res.send(results)

    })
});

module.exports = router;