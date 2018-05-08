// Set up MySQL connection.
var mysql = require("mysql");

// Setting up our connection information
var connection = {
  localhost: {
    port: 8889,
    host: "localhost",
    user: "root",
    password: "root",
    database: "burgers_db"
  }
};

// var mysql = require('mysql');
// var connection = mysql.createConnection(process.env.JAWSDB_URL);

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("connection.js line 15: error connecting: " + err.stack);
    return;
  }
  console.log("connection.js line 18: connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;