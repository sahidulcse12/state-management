import React, { useContext, useState } from 'react';
import { CategoryContext } from '../../App';

const Header = () => {
    const [category, setCategory] = useContext(CategoryContext);
    return (
        <div>
            <h2>This is a header : {category}</h2>
            <button onClick={() => setCategory('Laptop')}>Increment</button>
            <button onClick={() => setCategory('Mobile')}>Increment</button>
            <button onClick={() => setCategory('Camera')}>Increment</button>
        </div>
    );
};

export default Header;