import React from 'react';
import ThreButton from '../Threbutton/ThreButton';
import './Cart.css'
import UseAuth from '../Login/UseAuth';
import data from '../../Data/data';

const Cart = () => {
    const item = data;
    console.log(item);
    const auth = UseAuth();
    const cart = auth.cart;
    const key = Object.keys(cart);
    console.log(cart)
    let sutotal = 0;
    let fee = 0;
    let delevery_charge = 0;
    let total = 0;
    
    for(let i=0; i<key.length; i++){
        item.map(it => {
            if(it.id===Number(key[i])){
                sutotal = sutotal + it.price*cart[key[i]];
            }
        })
        
    }
    if(sutotal>0){
        delevery_charge = 5;
        fee = 2;
    }
    total = sutotal + fee + delevery_charge;
    
    
    
   
    return (
        <div className="container">
            <ThreButton></ThreButton>
            <div className="d-flex justify-content-between">
                <div className="leftside">
                    <h3>Edit Delivery Details</h3>
                    <form className="savecontinue">
                        <input className="signUpForm sclass" type="text" name="name" placeholder="Delivery Type" required />
                        <br />
                        <input className="signUpForm sclass" type="text" name="email" placeholder="Road No." required />
                        <br />
                        <input className="signUpForm sclass" type="text" name="password1" placeholder="Flat No." required />
                        <br />
                        <input className="signUpForm sclass" type="text" name="password2" placeholder="Business Name" required />
                        <br />
                        <input className="signUpForm sclass" type="text" name="password2" placeholder="Delivery Instruction" required />
                        <br />
                        <input className="signUpForm signupButton" type="submit" value="Save & Continue" />
                    </form>
                </div>
                <div className="rightside">
                    <p>From <b>Gulshan Plaza Restaurant GPR</b>
                        <br />
                    Arriving in 20-30 minutes. <br />

                    107 Road No 8</p>
                    <br />
                    <div className="d-flex justify-content-between">
                        <div>
                            <h6>Subtotal</h6>
                            <h6>Fee</h6>
                            <h6>Delivery Charge</h6>
                            <h5>Total</h5>
                        </div>
                        <div className="text-right">
                            <h6>{sutotal}</h6>
                            <h6>{fee}</h6>
                            <h6>{delevery_charge}</h6>
                            <h5>{total}</h5>
                        </div>
                    </div>
                    <button className="btn btn-success">Place Order</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;