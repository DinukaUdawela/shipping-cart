import React from 'react';

const CategoryMenu = ({ categories, setSelectedCategory }) => (
    <div className="category-menu">
        {categories.map(category => (
            <div
                className="category-item"
                key={category}
                onClick={() => setSelectedCategory(category)}
            >
                <h2>{category}</h2>
            </div>
        ))}
    </div>
);

export default CategoryMenu;
