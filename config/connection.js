var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "basic",
    password: "basic",
    database: "burgers_db"
});

module.exports = connection;