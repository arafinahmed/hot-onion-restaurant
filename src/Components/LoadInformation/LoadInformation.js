import React from 'react';
import './LoadInformation.css'

const LoadInformation = (props) => {
    const {picture, price, name, shortDescription} = props.data;
    
    return (
        <div className="col-md-4 special-effects">
            <div>
                <img className="img-fluid fixed-image" src={picture} alt=""/>
                
                <p>
                    <b>{name}</b>
                    <br/>
                    {shortDescription}
                    <br/>
                    <b>${price}</b>
                </p>
                
            </div>
        </div>
    );
};

export default LoadInformation;