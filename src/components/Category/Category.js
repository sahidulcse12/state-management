import React, { useContext, useEffect, useState } from 'react';
import { CategoryContext } from '../../App';
import CategoryDetail from '../CategoryDetail/CategoryDetail';

const allProducts = [
    { name: 'Dell', category: 'Laptop' }, { name: 'Asus', category: 'Laptop' }, { name: 'Lenovo', category: 'Laptop' },
    { name: 'Samsung', category: 'Mobile' }, { name: 'Nokia', category: 'Mobile' }, { name: 'Apple', category: 'Mobile' },
    { name: 'Canon', category: 'Camera' }, { name: 'Nikon', category: 'Camera' }, { name: 'Sony', category: 'Camera' }

]

const Category = () => {
    const [category] = useContext(CategoryContext);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const categoryMatched = allProducts.filter(pd => pd.category.toLowerCase() === category.toLowerCase());
        setProducts(categoryMatched);
    }, [category])

    return (
        <div>
            <h1>Select your category : {category}</h1>
            {
                products.map(product => <CategoryDetail product={product}></CategoryDetail>)
            }
        </div>
    );
};

export default Category;