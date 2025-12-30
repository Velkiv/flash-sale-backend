const Pool = require('pg').Pool


require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 2000;
const pool = new Pool({
    user: process.env.DBUSER,
    host: process.env.DBHOST,
    database: process.env.DBSOURCE,
    password: process.env.DBPASSWORD,
    port: process.env.DBPORT
})

app.use(express.json())

const product = [
    { id: 1, name: 'smartphone Flagship', price: 15000000, current_stock: 45},
    { id: 2, name: 'smartphone Lowship', price: 15000000, current_stock: 45},
];

const order = [
    { id: 1, user_id: 123, product_id: 1 },
    { id: 2, user_id: 123, product_id: 2 },
];


app.post('/flash-sale/buy', (req, res) => {

})

app.get('/products/:id', (req, res) => {
    const id = parseInt(req.params.id)

    pool.query('SELECT * FROM instance.product WHERE id = $1', [id], (error, results) => {
        if (error) {
        throw error
        }
        res.json(results.rows)
    })
    // const found = product.find((p)=> p.id ===id)
    // res.json(found)
})

app.get('/orders', (req, res) => {
    pool.query('SELECT * FROM instance.order ORDER BY id ASC', (error, results) => {
    if (error) {
        throw error
    }
        res.json(results.rows)
    })
})


app.listen(port, ()=>{
    console.log(`Sedang berjalan di port ${port}`)
})
