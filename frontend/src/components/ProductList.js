import React from 'react';

const ProductList = ({ products }) => (
    <div className="product-list">
        {products.map(product => (
            <div className="product-item" key={product.id}>
                <img src={product.image} alt={product.name} />
                <h2>{product.name}</h2>
                <p>Category: {product.category}</p>
            </div>
        ))}
    </div>
);

export default ProductList;
