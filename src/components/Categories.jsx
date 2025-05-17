

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/categories.css';

function Categories() {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        axios.get('/api/categories')
            .then((response) => setCategories(response.data.categories))
            .catch((error) => console.error('Error fetching categories'));
    }, []);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        
    };

    return (
        <div>
            <h3>Categories</h3>
            <select onChange={(e) => handleCategoryChange(e.target.value)} value={selectedCategory}>
                <option value="">Select Category</option>
                {categories.map((category) => (
                    <option key={category._id} value={category.name}>{category.name}</option>
                ))}
            </select>
        </div>
    );
}

export default Categories;
