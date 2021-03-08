import React, { useContext } from 'react';
import { CategoryContext } from '../../App';
import Category from '../Category/Category';

const Home = () => {
    const category = useContext(CategoryContext);
    //console.log(count)
    return (
        <div style={{ border: '1px solid gray' }}>
            <h1>This is home : {category}</h1>
            <Category></Category>
        </div>
    );
};

export default Home;