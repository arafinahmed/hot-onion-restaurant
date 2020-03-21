import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './HeadHome.css'

const element = <FontAwesomeIcon icon={faShoppingCart} />


const HeadHome = () => {
    return (
        <div className="">
            <div className="d-flex justify-content-between align-items-center">

                <div className="logo-image">
                    <img className="img-fluid" src="images/logo2.png" alt=""/>
                </div>

                <div className="d-flex justify-content-end align-items-center">
                    <div className="right">
                        {element}
                    </div>
                    <div className="right">
                        <button className="btn btn-outline-success">Login</button>
                    </div>
                    <div className="right">
                        <button className="btn btn-danger">Sign Up</button>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default HeadHome;