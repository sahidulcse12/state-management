import React from 'react';

const CategoryDetail = (props) => {
    const { count } = props;
    return (
        <div>
            <p>this is category detail has : {count}</p>
        </div>
    );
};

export default CategoryDetail;