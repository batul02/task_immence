const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routesUrls = require('./routes/routes')

require('dotenv').config();

const connect = require('./connection/connect');

connect.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
//   var sql = "CREATE TABLE products (id INT PRIMARY KEY, title VARCHAR(20), price INT, category VARCHAR(20), description text, img text)";
//   connect.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
});

app.use(bodyParser.json());

app.use(express.json())
app.use('/app', routesUrls)

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server started on port ${port}`));
