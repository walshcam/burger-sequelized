let express = require("express");

let router = express.Router();

// Import the model (burger.js) to use its database functions.
let burger = require("../models/burger.js");

//************ROUTES********************* */

//Route to Render Initial Page
router.get("/", function(req, res) {
    burger.read(function(data) {
        let burgerObject = {
            burgers: data
        };
        console.log("burgers_controller.js line 16: " + burgerObject);
        res.render("index", burgerObject);
    });
});

//Route to POST new burger
router.post("/api/burgers", function(req, res) {
    console.log("burgers_controller.js line 23: req.body input: " + req.body.burger_name);
    burger.create(req.body.burger_name, function(results) {
        //Send back ID of new burger
        res.json({id: results.insertId});
    });
});

//Route to UPDATE(put) burger to devoured
router.put("/api/burgers/:id", function(req, res) {
    let setCondition = "id = " + req.params.id;

    console.log("burgers_controller.js line 33: condition: " + setCondition);

    burger.update(
        setCondition,
        function(results) {
            if (results.changedRows === 0) {
                return res.status(404).end();
            }
            res.status(200).end();
        }
    )
});

module.exports = router;