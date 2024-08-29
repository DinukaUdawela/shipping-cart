import React from 'react';

const SearchBar = ({ setSearchTerm }) => (
    <div className="search-bar">
        <input
            type="text"
            placeholder="Search for products..."
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
        />
    </div>
);

export default SearchBar;
