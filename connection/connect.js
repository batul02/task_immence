const mysql = require('mysql');

const connect = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "products"
});

module.exports = connect;