// Import the ORM to create functions that will interact with the database.
var orm = require("../config/connection.js");

 let burger = {
    //read - Display all burgers on the page
    read: function(callback) {
        orm.read(function(results) {
            callback(results);
        });
    },
    //create - Create new burger
    create: function(burger_name, callback) {
        console.log("burger.js line 13: burger_name: " + burger_name);
        orm.create(burger_name, function(results) {
            callback(results);
        });
    },
    //update - Change burger to devoured
    update: function(setCondition, callback) {
        orm.update(setCondition, function(results) {
            callback(results);
        });
    }
 };

module.exports = burger;