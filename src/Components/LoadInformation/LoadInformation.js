import React from 'react';
import './LoadInformation.css'
import { Link } from 'react-router-dom';

const LoadInformation = (props) => {
    const {picture, price, name, shortDescription, id} = props.data;
    
    return (
        <div className="col-md-4 special-effects">
            <Link to={"/"+id}>
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
            
            </Link>
        </div>
    );
};

export default LoadInformation;