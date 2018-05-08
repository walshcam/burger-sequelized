//Sequalize Standard Library
let Sequalize = require("sequelize");

//sequalize references our connection to the database
let sequalize = require("../config/connection.js");

//create "burger" model that matches up with the database

let burger = sequalize.define("burgers", {
    //id is assumed by Sequalize by default
    
    //burger_name
    burger_name: Sequalize.STRING,
    //devoured?
    devoured: Sequalize.BOOLEAN
},{
    timestamps: false
});

//  let burger = {
//     //read - Display all burgers on the page
//     read: function(callback) {
//         orm.read(function(results) {
//             callback(results);
//         });
//     },
//     //create - Create new burger
//     create: function(burger_name, callback) {
//         console.log("burger.js line 13: burger_name: " + burger_name);
//         orm.create(burger_name, function(results) {
//             callback(results);
//         });
//     },
//     //update - Change burger to devoured
//     update: function(setCondition, callback) {
//         orm.update(setCondition, function(results) {
//             callback(results);
//         });
//     }
//  };

module.exports = burger;