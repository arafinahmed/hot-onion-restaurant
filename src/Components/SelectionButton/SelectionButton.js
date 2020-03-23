import React, { useState } from 'react';
import LoadInformation from '../LoadInformation/LoadInformation';
import data from '../../Data/data';
import './SelectionButton.css'
import UseAuth from '../Login/UseAuth';

const SelectionButton = () => {
    const auth = UseAuth();
    console.log(auth);
    const [mydata, setMydata] = useState('lunch');
    const data18 = data;
    const x = data18.filter(x => x.type==='lunch');
    const [sixdata, setSixdata] = useState(x);
    const handleButton = (value) => {
        setMydata(value);
        const x = data18.filter(x => x.type===value);
        setSixdata(x);
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
                sixdata.map(d => <LoadInformation key= {d.id} data={d}></LoadInformation>)

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
                    <button className="btn btn-success btn-lg">Checkout  Your Food</button> :
                    <button className="btn btn-secondary btn-lg">Checkout Your Food</button>
                
            }
            </div>
            <br/>
            
        </div>
    );
};

export default SelectionButton;