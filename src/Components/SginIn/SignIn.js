import React, { useState } from 'react';
import UseAuth from '../Login/UseAuth';

const SignIn = () => {
    const auth = UseAuth();
    const [user, setUser] = useState({
        email:'',
        password:''
    });
    console.log(auth.user);
    const handleGoogle = () => {
        auth.signInWithGoogle()
        .then( res => {
            console.log(res);
            setUser(res);
        })
        .catch(err => {
            console.log(err);
        })
    }
    const handleChange = (event) => {
        const newUserInfo = {
            ...user
        };
        
        if(event.target.name==='email'){
            console.log(event.target.name, event.target.value);
            newUserInfo['email'] = event.target.value;
        }
        if(event.target.name==='password'){
            console.log(event.target.name, event.target.value);
            newUserInfo['password'] = event.target.value;
        }
        console.log(newUserInfo);
        setUser(newUserInfo);
    }
    const handleSignIn = (event) => {
        let x =10;
        console.log(auth);
        auth.signInFirebase(user)
        .then(res => {console.log(res);
            x = 12;
        })
        .catch(err => {
            console.log(err.message);
            x = 13;
        });
        console.log(x);
        event.preventDefault();
        event.target.reset();

    }
    return (
        <div className="signUp">
            <img src="images/logo2.png" alt=""/>
            <form onSubmit={handleSignIn}>
                <input className="signUpForm" onBlur={handleChange} type="text" name="email" placeholder="Email" required/>
                <br/>
                <input className="signUpForm" onBlur={handleChange} type="password" name="password" placeholder="Password" required/>
                <br/>
                <input className="signUpForm signupButton" type="submit" value="Signin"/>
            </form>

            <button onClick={handleGoogle}>Signin With Google</button>
        </div>
    );
};

export default SignIn;