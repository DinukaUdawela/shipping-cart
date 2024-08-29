import React, { useState, useEffect } from 'react';
import ProductList from './components/ProductList';
import CategoryMenu from './components/CategoryMenu';
import SearchBar from './components/SearchBar';
import './styles.css';
import axios from 'axios';

const App = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const result = await axios.get('http://localhost:5000/products');
                setProducts(result.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        const fetchCategories = async () => {
            try {
                const result = await axios.get('http://localhost:5000/categories');
                setCategories(result.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchProducts();
        fetchCategories();
    }, []);

    const filteredProducts = products.filter(product => {
        const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="container">
            <div className="header">
                <h1>Shopping Cart</h1>
            </div>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search for products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
            <CategoryMenu categories={categories} setSelectedCategory={setSelectedCategory} />
            <ProductList products={filteredProducts} />
        </div>
    );
};

export default App;
