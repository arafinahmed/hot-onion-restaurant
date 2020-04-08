import React, { useState, useEffect, createContext, useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config'

firebase.initializeApp(firebaseConfig);

const AuthContext = createContext();

export const AuthProvider = (props) => {
    const auth = UseAuth();
    return <AuthContext.Provider value={auth}>{props.children} </AuthContext.Provider>
}
export const useAuth = () => {
    return useContext(AuthContext);
}

const UseAuth = () => {
    const u = JSON.parse(localStorage.getItem('cart')) ;
    const [user, setUser] = useState(null);
    const insertData = (data) => {
        fetch('https://damp-ocean-20947.herokuapp.com/addUser', {
            method:'POST',
            body:JSON.stringify(data),
            headers: {
               "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            console.log('post success');
            setUser(data);
        })
    }
    

     const [cart, setCart] = useState(u);

     const saveTolocal = (newCart) => {
        localStorage.clear();
        localStorage.setItem('cart', JSON.stringify(newCart));
     }
     const getUser = (usr) => {
        const {email} = usr;

        return {email:email};
    }
     const updateCart = (id, count) => {
            const newCart = {
                ...cart
            };
            newCart[id] = count;
            setCart(newCart);
            saveTolocal(newCart);
     }

     const signUpFirebase = (data) =>{
            console.log('from useAuth', data);
            return firebase.auth().createUserWithEmailAndPassword(data.email, data.password1)
            .then(res => {
                const sendData = {name: data.name, email: data.email};
                insertData(sendData);
                setUser(sendData);
                return res.user;
            })
            .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log('arafin message',errorMessage);
            setUser(null);
            return error.message;
          });
     }
     const signInFirebase = (data) => {
         console.log('signin firebase', data.email, data.password);
        return firebase.auth().signInWithEmailAndPassword(data.email, data.password)
        .then((res) =>
        {
            console.log("signIn");
            setUser(res.user);
            firebase.auth.Auth.Persistence.LOCAL = true;
            return res.user;
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log('error signin');
            return error.message;
            // ...
          });
     }
     const firebaseSingOut = () => {
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
            setUser(null);
          }).catch(function(error) {
            // An error happened.
          });
     }
         

     useEffect(() => {
        firebase.auth().onAuthStateChanged(function(usr) {
            if (usr) {
              // User is signed in.
              const x =getUser(usr)
                setUser(x);
               console.log('useEffect');
              // ...
            } else {
              // User is signed out.
              // ...
              setUser(null);
            }
          });
     }, [])

    return {
        user,
        signUpFirebase, 
        signInFirebase, 
        cart, 
        updateCart, 
        firebaseSingOut
    }
};

export default UseAuth;