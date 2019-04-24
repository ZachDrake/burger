var orm = require('../config/orm.js');

var burgerMethods = {
    all: (cb) => {
        orm.selectAll("burger", (res) => {
            cb(res);
        });
    },
    
}