const mysql = require("mysql");

const connected = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "admin",
  database: "alistamento",
});

module.exports = connected;
