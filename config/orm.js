var connection = require('../config/connection.js');

var orm = {
    selectAll = (tableInput, cb) => {
        var queryString = "SELECT * FROM" + tableInput + ";";
        connection.query(queryString, (err, result) => {
            if (err) {
                console.log(err);
            }
            console.log(result);
            cb(result);
        });
    },
    insertOne = (burger, cb) => {
        var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
        connection.query(queryString, [burger], (err, result) => {
            if (err) {
                console.log(err);
            }
            console.log(result);
            cb(result);
        });
    },
    updateOne = (devoured, burgerId, cb) => {
        var queryString = "UPDATE burgers set devoured = ? WHERE id = ?";
        connection.query(queryString, [devoured, burgerId], (err, result) => {
            if(err) {
                console.log(err)
            }
            console.log(result);
            cb(result);
        }); 
    }

}



module.exports = orm; 