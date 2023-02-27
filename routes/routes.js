const express = require('express');
const router = express.Router();
const connect = require('../connection/connect');


// Get all products
router.get('/products', async (req, res) => {
    var sql = "SELECT * FROM products";
    connect.query(sql, function (err, result) {
        if (err) throw err;
        res.send(result);
    });
})

// Add new product
router.post('/addProduct', async (req, res) => {
    const data = req.body;
    var sql = "INSERT INTO products (id, title, price, category, description, img) VALUES (?,?,?,?,?,?)";
    connect.query(sql,
        [
            data.id, data.title, data.price, data.category, data.description, data.img
        ],
        function (err, result) {
        if (err) throw err;
        res.send("1 record inserted, ID: " + data.id);
    });
})

// Update a product
router.put('/update/:id', async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    var sql = `UPDATE products SET title = ?, price = ?, category = ?, description = ?, img = ? WHERE id = ${id}`;
    connect.query(sql,
        [
            data.title, data.price, data.category, data.description, data.img
        ],
        function (err, result) {
        if (err) throw err;
        res.send("updated, ID: " + id);
    });
})

// Delete a product
router.delete('/delete/:id', async (req, res) => {
    const id = req.params.id;
    var sql = `DELETE FROM products WHERE id = ${id}`;
    connect.query(sql, function (err, result) {
        if (err) throw err;
        res.send("deleted, ID: " + id);
    });
})

module.exports = router;