const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

// Import hardcoded data
const { products, categories } = require('./data');

// API endpoints
app.get('/products', (req, res) => {
    res.json(products);
});

app.get('/categories', (req, res) => {
    res.json(categories);
});

app.get('/', (req, res) => {
    res.send('Welcome to the Shopping Cart API');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
