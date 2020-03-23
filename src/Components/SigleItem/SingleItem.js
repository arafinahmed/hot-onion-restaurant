import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import data from '../../Data/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './SingleItem.css'
import ThreButton from '../Threbutton/ThreButton';
import UseAuth from '../Login/UseAuth';

const element = <FontAwesomeIcon icon={faShoppingCart} />

const SingleItem = () => {
    const auth = UseAuth();
    console.log('formsingle', auth);
    const [count, setCount] = useState(0);
    const countHandle = (type) => {
        if(type==='plus'){
            setCount(count+1);
        }
        else if(type==='minus'){
            const z = count-1;
            if(z>=0){
                setCount(z);
            }
        }
    }
    const id = useParams();
    const key = Number(id.key);
    let pkeyFor;
    let pkeyBack;
    if(key%10===6){
        pkeyFor = key - 5;
    }
    else{
        pkeyFor = key+1;
    }
    if(key%10===1){
        pkeyBack = key+5;
    }
    else{
        pkeyBack = key-1;
    }
    const load = data;
    const product = load.filter(pd => pd.id === key);
    const pd1 = load.filter(pd => pd.id === pkeyBack);
    const pd2 = load.filter(pd => pd.id === pkeyFor);
    
    const {picture, name, LongDescription, price} = product[0];

    const addToCart = ()  => 
    {
        auth.updateCart(key, count);
    }
    
    return (
        <div className="container">
            <ThreButton></ThreButton>
            <div className="d-flex justify-content-center justify-content-around">
            <div className="col-md-6 left-side">
                <h1>{name}</h1>
                <p>{LongDescription}</p>
                <div className="d-flex align-items-center">
                <h2>${price}</h2>
                <div className="plus-minus">
                <h5><button className="selection-button1"
                onClick={()=>{
                    countHandle('minus')
                }}>-</button>
                {count}
                <button className="selection-button1"onClick={()=>{
                    countHandle('plus')
                }}>+</button></h5>
                </div>                
                </div>
                <div className="AddtoCart">
                    <button onClick={addToCart} className="btn btn-danger">{element} Add</button>
                </div>
                <div className="extra-image d-flex justify-content-start">
                    <div className="col-md-4">
                        <Link to={"/"+pd1[0].id}>
                        <img className="img-fluid"src={pd1[0].picture} alt=""/>
                        </Link>
                    </div>
                    <div className="col-md-4">
                    <Link to={"/"+pd1[0].id}>
                    <img className="img-fluid"src={pd2[0].picture} alt=""/>
                    </Link>
                    </div>
                </div>

            </div>
            <div className="col-md-6">
                <img className="img-fluid" src={picture} alt=""/>
            </div>
            </div>
        </div>
    );
};

export default SingleItem;