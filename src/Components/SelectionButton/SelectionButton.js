import React, { useState } from 'react';
import LoadInformation from '../LoadInformation/LoadInformation';

import './SelectionButton.css'
import UseAuth from '../Login/UseAuth';
<<<<<<< HEAD
import { useEffect } from 'react';
=======
>>>>>>> 79acd08969d0f46e83ba580797d5c5b645fdcbf3

const SelectionButton = () => {
    const auth = UseAuth();
    console.log(auth);
    const [mydata, setMydata] = useState('lunch');
    const [sixdata, setSixdata] = useState(null);
    const [data18, setData18] = useState(null);
    useEffect(()=>{
        fetch('https://damp-ocean-20947.herokuapp.com/products')
        .then(res => res.json())
        .then(data => {
            console.log(data, 'data from data base');
            setData18(data);
        })
    }, []);
    useEffect(()=>{
        if(data18){
            const x = data18.filter(x => x.type==='lunch');
            setSixdata(x);
        }
    }, [data18])
    const linktocart = () => {
        window.location.pathname = '/cart';
    }
    const handleButton = (value) => {
        setMydata(value);
        if(data18){
            const x = data18.filter(x => x.type===value);
            setSixdata(x);        }
    }
    return (
        <div className="container">
            <br/>
            <div className="d-flex justify-content-center">
            <div>
                <button className="selection-button"
                onClick={() => {
                    handleButton('breakfast')
                }}>
                    Breakfast</button>
        
            </div>
            <div>
            <button className="selection-button"
            onClick={() => {
                    handleButton('lunch')
                }}>
                Lunch</button>
            </div>
            <div>
            <button className="selection-button"
            onClick={() => {
                    handleButton('dinner')
                }}>
                Dinner</button>
            </div>
            </div>
            <br/>
            <div className="">
            {
               sixdata && sixdata.map(d => <LoadInformation key= {d.id} data={d}></LoadInformation>)

            }
            </div>
            <br/>
            <br/>
            <div className="text-center">
                <br/>
                <br/>
                <br/>
                <br/>
            {
                
                auth.cart ? 
<<<<<<< HEAD
                    <button onClick={linktocart} className="btn btn-success btn-lg">Checkout  Your Food</button> :
=======
                    <button className="btn btn-success btn-lg">Checkout  Your Food</button> :
>>>>>>> 79acd08969d0f46e83ba580797d5c5b645fdcbf3
                    <button className="btn btn-secondary btn-lg">Checkout Your Food</button>
                
            }
            </div>
            <br/>
            
        </div>
    );
};

export default SelectionButton;