const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Enable CORS
app.use(cors());

// Hardcoded data
const categories = ['Electronics', 'Books', 'Clothing', 'Food'];
const products = [
    { id: 1, name: 'Laptop', category: 'Electronics', image: '/images/laptop.jpg' },
    { id: 2, name: 'Smartphone', category: 'Electronics', image: '/images/smartphone.jpg' },
    { id: 3, name: 'T-Shirt', category: 'Clothing', image: '/images/tshirt.jpg' },
    { id: 4, name: 'Fiction Book', category: 'Books', image: '/images/book.jpg' },
    { id: 5, name: 'Apple', category: 'Food', image: '/images/apple.jpg' }
];


// Define the API endpoints
app.get('/categories', (req, res) => {
    res.json(categories);
});

app.get('/products', (req, res) => {
    res.json(products);
});

// Optional: Define a route for the root URL
app.get('/', (req, res) => {
    res.send('Welcome to the Shopping Cart API');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
