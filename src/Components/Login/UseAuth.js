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

     const [cart, setCart] = useState(u);

     const saveTolocal = (newCart) => {
        localStorage.clear();
        localStorage.setItem('cart', JSON.stringify(newCart));
     }
     const getUser = () => {
        const existingUser = localStorage.getItem('userId');
        if (existingUser) {
            return existingUser; 
        } else {
            const newUser = 'user-' + new Date().getTime();
            localStorage.setItem('userId', newUser)
            return newUser;
        }
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
                setUser(data);
                console.log('success', data);
                setUser(res.user);
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
     const provider = new firebase.auth.GoogleAuthProvider();        
    
    const signInWithGoogle = () => {
        return firebase.auth().signInWithPopup(provider)
        .then(res => {
            
            return res.user;
        })
        .catch(err => {
            console.log(err);
            setUser(null);
            return err.message;
        })
    }

     useEffect(() => {
        firebase.auth().onAuthStateChanged(function(usr) {
            if (usr) {
              // User is signed in.
              const cUser = getUser(usr);
              setUser(cUser);
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
        signInWithGoogle, 
        cart, 
        updateCart
    }
};

export default UseAuth;