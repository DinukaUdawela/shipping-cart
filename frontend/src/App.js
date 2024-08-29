import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from './components/ProductList';
import CategoryMenu from './components/CategoryMenu';
import SearchBar from './components/SearchBar';
import './styles.css';

const App = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            const result = await axios.get('http://localhost:5000/products');
            setProducts(result.data);
        };

        const fetchCategories = async () => {
            const result = await axios.get('http://localhost:5000/categories');
            setCategories(result.data);
        };

        fetchProducts();
        fetchCategories();
    }, []);

    const filteredProducts = products.filter(product => {
        return (
            (selectedCategory === '' || product.category === selectedCategory) &&
            (searchTerm === '' || product.name.toLowerCase().includes(searchTerm))
        );
    });

    return (
        <div className="container">
            <div className="header">
                <h1>Shopping Cart</h1>
            </div>
            <SearchBar setSearchTerm={setSearchTerm} />
            <CategoryMenu categories={categories} setSelectedCategory={setSelectedCategory} />
            <ProductList products={filteredProducts} />
        </div>
    );
};

export default App;
