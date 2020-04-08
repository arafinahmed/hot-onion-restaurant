import React from 'react';
import UseAuth from '../Login/UseAuth';


const FakeCart = () => {
    const auth = UseAuth();
    if(auth.cart){
        window.location.pathname = '/cart';
    }
    
    return (
        <div>
            <h3>Your Cart is empty</h3>
        </div>
    );
};

export default FakeCart;