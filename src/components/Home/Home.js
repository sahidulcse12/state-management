import React from 'react';
import Category from '../Category/Category';

const Home = (props) => {
    const { count } = props;
    //console.log(count)
    return (
        <div style={{ border: '1px solid gray' }}>
            <h2>This is home : {count}</h2>
            <Category count={count}></Category>
        </div>
    );
};

export default Home;