const Pool = require('pg').Pool
const pool = new Pool({
    user: "ta",
    host: "localhost",
    database: "flash-sale",
    password: "ServBay.dex"
})

require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 2000;

app.use(express.json())

const product = [
    { id: 1, name: 'smartphone Flagship', price: 15000000, current_stock: 45},
    { id: 2, name: 'smartphone Lowship', price: 15000000, current_stock: 45},
];

const order = [
    { id: 1, user_id: 123, product_id: 1 },
    { id: 2, user_id: 123, product_id: 2 },
];

app.get('/product/:id', (req, res) => {
    res.json(product)
})

app.get('/order', (req, res) => {
    res.json(order)
})


app.listen(port, ()=>{
    console.log(`Sedang berjalan di port ${port}`)
})
