import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const CategoryDetail = (props) => {
    // const category = useContext(CategoryContext);
    const { name } = props.product;
    return (
        <div>
            <h2>this is category detail</h2>
            <h3>Selected category name from category list: {name}</h3>

        </div>
    );
};

export default CategoryDetail;