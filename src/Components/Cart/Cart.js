import React from 'react';
import ThreButton from '../Threbutton/ThreButton';
<<<<<<< HEAD

import './Cart.css'
import UseAuth from '../Login/UseAuth';
import data from '../../Data/data';
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const Cart = () => {
    const auth = UseAuth();
    
    const { register, handleSubmit, errors } = useForm();
    
    const [shipmentAdded, setShipmentAdded] = useState(null);
    const [pay, setPay] = useState(null);
    if(auth.cart == null){
        window.location.pathname = "/";
    }
    const onSubmit = data => {
        setShipmentAdded(data);
        
    }
    const item = data;
    console.log(item);
    const cart = auth.cart;
    const key = Object.keys(cart);
    console.log(auth.user);
=======
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
>>>>>>> 79acd08969d0f46e83ba580797d5c5b645fdcbf3
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
<<<<<<< HEAD
    const stripePromise = loadStripe('pk_test_Up5ZVvGDaufTuBqaaMMgtc3000FbsXBZ7I');
    
    const payNowButton = () => {
        if(shipmentAdded){
            setPay("null");
        }
        else{
            alert('Set Information First')
        }
    }
    const orderConfirm = (paymentMethod) => {
        //TODO: MOVE AFTER PAYMENT
        console.log(auth.user.email);
        const savedCart = JSON.parse(window.localStorage.getItem('cart'));
        const order = { email: auth.user.email, cart: savedCart, shipment: shipmentAdded,
            
        paymentMethod: paymentMethod };
        console.log(order);

        fetch('https://stark-anchorage-80275.herokuapp.com/placeorder', {
            method: 'POST',
            body: JSON.stringify(order),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(res => res.json())
            .then(order => {
                console.log('success', order);
                // setOrderId(order._id);                
                // processOrder();
            })

    }
=======
    
    
    
>>>>>>> 79acd08969d0f46e83ba580797d5c5b645fdcbf3
   
    return (
        <div className="container">
            <ThreButton></ThreButton>
            <div className="d-flex justify-content-between">
<<<<<<< HEAD
                <div style={{display:shipmentAdded &&'none'}} className="leftside">
                    <h3>Edit Delivery Details</h3>
                    <form className="savecontinue" onSubmit={handleSubmit(onSubmit)}>
                    <input name="name"  placeholder="Name" ref={register({ required: true })} />
                    {errors.name && <span className="error">Name field is required</span>}
                    <br/>

                    <input name="email"  placeholder="Email" ref={register({ required: true })} />
                    {errors.email && <span className="error">Email field is required</span>}
                    <br/>

                    <input name="Add1" placeholder="Address" ref={register({ required: true })} />
                    {errors.Add1 && <span className="error">Address 1  field is required</span>}
                    <br/>

                    <input name="Add2" placeholder="Address" ref={register} />
                    <br/>
                    <input name="city" placeholder="City" ref={register({ required: true })} />
                    <br/>
                    {errors.city && <span className="error">City field is required</span>}
                    <input name="country" placeholder="Country" ref={register({ required: true })} />
                    <br/>
                    {errors.country && <span className="error">Country field is required</span>}
                    <input name="ZipCode" placeholder="Zip Code" ref={register({ required: true })} />
                    {errors.ZipCode && <span className="error">Zip code field is required</span>}
                    <br/>
                        <input className="signUpForm signupButton" type="submit" value="Save & Continue" />
                    </form>
                </div>
                <div className="rightside" style={{display:pay &&'none'}}>
=======
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
>>>>>>> 79acd08969d0f46e83ba580797d5c5b645fdcbf3
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
<<<<<<< HEAD
                    <button onClick={payNowButton} className="btn btn-success">Pay Now</button>
                </div>
                <div style={{display: pay ? 'block':'none'}}>
                <h3>Payment Information</h3>
                <Elements stripe={stripePromise}>
                <CheckoutForm orderConfirm={orderConfirm}></CheckoutForm>
                </Elements>
=======
                    <button className="btn btn-success">Place Order</button>
>>>>>>> 79acd08969d0f46e83ba580797d5c5b645fdcbf3
                </div>
            </div>
        </div>
    );
};

export default Cart;