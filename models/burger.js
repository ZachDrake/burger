var orm = require('../config/orm.js');

var burgerMethods = {
    all: (cb) => {
        orm.selectAll("burger", (res) => {
            cb(res);
        });
    },
    insertOne: (burger, cb) => {
        orm.insertOne("burger", burger, cb, (res) => {
            cb(res);
        });
    },
    updateOne: (devoured, burgerId, cb) => {
        orm.updateOne("burger", devoured, burgerId, cb, (res) => {
            cb(res);
        });
    }
    
};

module.exports = burger;