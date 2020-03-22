import React from 'react';
import ThreButton from '../Components/Threbutton/ThreButton';
import './Cart.css'

const Cart = () => {
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
                    <br/>
                    Arriving in 20-30 minutes. <br/>
                    107 Road No 8</p>
                </div>
            </div>
        </div>
    );
};

export default Cart;