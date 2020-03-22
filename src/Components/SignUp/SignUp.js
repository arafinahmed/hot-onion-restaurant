import React, { useState } from 'react';
import UseAuth from '../Login/UseAuth';
import './SignUp.css'

const SignUp = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password1: '',
        password2: ''
    });
    console.log(user);
    const handleChange = (event) => {
        const newUserInfo = {
            ...user
        };
        if(event.target.name==='name'){
            console.log(event.target.name, event.target.value);
            newUserInfo['name'] = event.target.value;
        }
        if(event.target.name==='email'){
            console.log(event.target.name, event.target.value);
            newUserInfo['email'] = event.target.value;
        }
        if(event.target.name==='password1'){
            console.log(event.target.name, event.target.value);
            newUserInfo['password1'] = event.target.value;
        }
        if(event.target.name==='password2'){
            console.log(event.target.name, event.target.value);
            newUserInfo['password2'] = event.target.value;
        }
        setUser(newUserInfo);
        

    }
    const auth = UseAuth();
    console.log(auth);
    const handleSignUp = () => {
        if(user.password1===user.password2){
            auth.signUpFirebase(user)
        .then(res => {
            console.log(res);
        })
        }
        else{
            alert('Password Not Match');
        }
    }
    return (
        <div className="signUp">
            <img src="images/logo2.png" alt=""/>
            <form onSubmit={handleSignUp}>
                <input className="signUpForm" onBlur={handleChange} type="text" name="name" placeholder="Name" required/>
                <br/>
                <input className="signUpForm" onBlur={handleChange} type="text" name="email" placeholder="Email" required/>
                <br/>
                <input className="signUpForm" onBlur={handleChange} type="password" name="password1" placeholder="Password" required/>
                <br/>
                <input className="signUpForm" onBlur={handleChange} type="password" name="password2" placeholder="Confirm Password" required/>
                <br/>
                <input className="signUpForm signupButton" type="submit" value="Sign Up"/>
            </form>
        </div>
    );
};

export default SignUp;