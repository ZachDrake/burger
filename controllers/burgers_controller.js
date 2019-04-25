var express = require('express');

var router = express.Router();

var burger = require('../models/burger.js');

router.get("/", (req, res) => {
    burger.selectAll((data) => {
        var handlebars = {
            burger: data
        };
        console.log(handlebars);
        res.render("index", handlebars);
    });
});

router.post("/api/burgers", (req, res) => {
    burger.insertOne([
        "burger"
    ], [
        req.body.burger_name
    ], (result) => {
        res.json({ id: result.inserId });
    });
});

router.put("/api/burgers/:id", (req, res) =>{
    var id = req.params.id;
    var devoured = req.params.devoured;

    burger.updateOne({ devoured }, id, (result) => {
        if (result.changedRows == 0) {
            return res.status(404).end;
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;

