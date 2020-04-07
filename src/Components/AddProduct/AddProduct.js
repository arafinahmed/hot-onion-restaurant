import React from 'react';
import data from '../../Data/data';

const AddProduct = () => {
    const load = data;
    const insertData = () => {
        fetch('http://localhost:4000/addProduct', {
            method:'POST',
            body:JSON.stringify(data),
            headers: {
               "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            console.log('post success');
        })
    }
    return (
        <div>
            <button onClick={insertData}>Add All Product</button>
        </div>
    );
};

export default AddProduct;