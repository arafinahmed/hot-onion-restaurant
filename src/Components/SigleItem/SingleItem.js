import React, { useState, useEffect } from 'react';
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
    const vvv = {
        picture: "",
        name: "", LongDescription: "", price: "", id: ""
    }
    console.log('formsingle', auth);
    const [count, setCount] = useState(0);
    const [load, setLoad] = useState(null);
    const [product, setProduct] = useState(vvv);
    const [pd1, setPd1] = useState(vvv);
    const [pd2, setPd2] = useState(vvv);

    useEffect(() => {
        fetch('https://damp-ocean-20947.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setLoad(data);
            })
    }, []);
    console.log(load);
    const key = useParams();
    useEffect(() => {
        if (load) {
            
            console.log(key.key);
            const datum = clickChange(Number(key.key));
            const {pkeyBack, pkeyFor} = datum;
            console.log(key.key, pkeyBack, pkeyFor);
            const xx = load.filter(pd => pd.id === Number(key.key));
            const yy = load.filter(pd => pd.id === pkeyBack);
            const zz = load.filter(pd => pd.id === pkeyFor);
            setProduct(xx[0]);
            setPd1(yy[0]);
            setPd2(zz[0]);
            console.log('ran');
        }

    }, [load, key])
    console.log(product, pd1, pd2);
    const countHandle = (type) => {
        if (type === 'plus') {
            setCount(count + 1);
        }
        else if (type === 'minus') {
            const z = count - 1;
            if (z >= 0) {
                setCount(z);
            }
        }
    }

    const clickChange = (key) => {
        let pkeyFor;
        let pkeyBack;
        if (key % 10 === 6) {
            pkeyFor = key - 5;
        }
        else {
            pkeyFor = key + 1;
        }
        if (key % 10 === 1) {
            pkeyBack = key + 5;
        }
        else {
            pkeyBack = key - 1;
        }
        return {pkeyBack, pkeyFor};
        
    }




    const { picture, name, LongDescription, price } = product;

    const addToCart = () => {
        auth.updateCart(Number(key.key), count);
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
                                onClick={() => {
                                    countHandle('minus')
                                }}>-</button>
                                {count}
                                <button className="selection-button1" onClick={() => {
                                    countHandle('plus')
                                }}>+</button></h5>
                        </div>
                    </div>
                    <div className="AddtoCart">
                        <button onClick={addToCart} className="btn btn-danger">{element} Add</button>
                    </div>
                    <div className="extra-image d-flex justify-content-start">
                        <div className="col-md-4">
                            <Link to={"/" + pd1.id}>
                                <img className="img-fluid" src={pd1.picture} alt="" />
                            </Link>
                        </div>
                        <div className="col-md-4">
                            <Link to={"/" + pd2.id}>
                                <img className="img-fluid" src={pd2.picture} alt="" />
                            </Link>
                        </div>
                    </div>

                </div>
                <div className="col-md-6">
                    <img className="img-fluid" src={picture} alt="" />
                </div>
            </div>
        </div>
    );
};

export default SingleItem;