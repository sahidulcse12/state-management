import React from 'react';
import CategoryDetail from '../CategoryDetail/CategoryDetail';

const Category = (props) => {
    const { count } = props;
    return (
        <div>
            <p>this is category</p>
            <CategoryDetail count={count}></CategoryDetail>
        </div>
    );
};

export default Category;