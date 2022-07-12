const mysql = require('mysql');

var config =
{
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mycity',
    port: 3306

};

const conn = new mysql.createConnection(config);

conn.connect(
    function (err) { 
    if (err) { 
        console.log("!!! Cannot connect !!! Error:");
        throw err;
    }
    else
    {
       console.log("Connection established.");
       return conn
    }
})

module.exports = conn