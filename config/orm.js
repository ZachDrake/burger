var connection = require('./connection.js');

var orm = {
    selectAll = (tableInput) => {
        var queryString = "SELECT * FROM" + tableInput + ";";
        connection.query(queryString, (err, result) => {
            if (err) {
                console.log(err);
            }
            cb(result);
        });
    },
    insertOne = (burger) => {
        var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
        connection.query(queryString, [burger], (err, result) => {
            if (err) {
                console.log(err);
            }
            console.log(result);
        });
    },
    updateOne = (devoured, burgerId) => {
        var queryString = "UPDATE burgers set devoured = ? WHERE id = ?";
        connection.query(queryString, [devoured, burgerId], (err, result) => {
            if(err) {
                console.log(err)
            }
            console.log(result);
        }); 
    }

}



module.exports = orm; 