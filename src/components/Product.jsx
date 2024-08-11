import React, { useEffect, useState } from 'react';
import _ from 'lodash';

const Product = () => {
    const [products, setProducts] = useState([]);
    const [loading, setloading] = useState(false);

    const url = "https://fakestoreapi.com/products/";

    useEffect(() => {
        async function fetchData() {
            try {
                setloading(true)
                const response = await fetch(url);
                const data = await response.json();
                setProducts(data);
                setloading(false)
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);

    return (
        <div className='flex flex-wrap'>
            {products.map(product => {
                // Compute the short name for each product
                const shortName = _.truncate(product.title, {
                    length: 20,
                    omission: '...'
                });

                return (
                    <div key={product.id} className='bg-slate-300 inline-block p-4 w-52 rounded-lg my-4 mx-4'>
                        <img className='w-[70%] rounded-lg' src={product.image} alt={product.title} />
                        <div className='text-3xl font-bold'>{shortName}</div>
                        <div>${product.price}</div>
                    </div>
                );
            })}
        </div>
    );
};

export default Product;
