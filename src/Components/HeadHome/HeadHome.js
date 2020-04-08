import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './HeadHome.css'
import { Link } from 'react-router-dom';
import UseAuth from '../Login/UseAuth';
import { useState } from 'react';
import { useEffect } from 'react';

const element = <FontAwesomeIcon icon={faShoppingCart} />


const HeadHome = () => {
    const auth = UseAuth();
    
    console.log(auth.user);
    console.log(auth);
    return (
        <div className="">
            <div className="d-flex justify-content-between align-items-center">

                <Link to="/"> 
                <div className="logo-image">
                    <img className="img-fluid" src="images/logo2.png" alt=""/>
                </div></Link>

                <div className="d-flex justify-content-end align-items-center">
<<<<<<< HEAD
                    {
                        <Link to="/fakecart"> 
                        <div className="right">
                            {element}
                        </div>
                        </Link>
                    }
                    {
                        auth.user ? <div></div> :
                        <div className="right">
=======
                    <Link to="/cart"> 
                    <div className="right">
                        {element}
                    </div>
                    </Link>
                    <div className="right">
>>>>>>> 79acd08969d0f46e83ba580797d5c5b645fdcbf3
                        <Link to = "/signin"> <button className="btn btn-outline-success">Login</button></Link>
                    </div>
                    }
                    {
                        auth.user ? <div className="right">
                        <Link to="/"> <button onClick={auth.firebaseSingOut} className="btn btn-danger">Sign Out</button> </Link>
                    </div> :
                    <div className="right">
                    <Link to="/signup"> <button className="btn btn-danger">Sign Up</button> </Link>
                </div>
                    }
                </div>
                
            </div>
        </div>
    );
};

export default HeadHome;