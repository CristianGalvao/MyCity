const database = require('../database');
const express = require('express');
const router = express.Router();

router.post('/createUser', (req, res)=>{

    let {first_name} = req.body;
    let {last_name} = req.body;
    let {cpf} = req.body;
    let {cep} = req.body;
    let {address} = req.body;
    let {number_house} = req.body;
    let {complement} = req.body;
    let {tutorial} = req.body;
    let {email} = req.body;
    let {password_user} = req.body;

const sql = `INSERT INTO users(first_name, last_name, cpf, cep, address, number_house, complement, tutorial, email, password_user) values("${first_name}", "${last_name}", "${cpf}", "${cep}", "${address}", "${number_house}","${complement}", ${tutorial}, "${email}","${password_user}");`
    database.query(sql).then(
        (users)=>{
            res.send(users)
        }
    )
}
);


module.exports = router;