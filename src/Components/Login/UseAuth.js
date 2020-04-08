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
<<<<<<< HEAD
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
    
=======
>>>>>>> 79acd08969d0f46e83ba580797d5c5b645fdcbf3

     const [cart, setCart] = useState(u);

     const saveTolocal = (newCart) => {
        localStorage.clear();
        localStorage.setItem('cart', JSON.stringify(newCart));
     }
<<<<<<< HEAD
     const getUser = (usr) => {
        const {email} = usr;

        return {email:email};
    }
=======
    
>>>>>>> 79acd08969d0f46e83ba580797d5c5b645fdcbf3
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
<<<<<<< HEAD
                const sendData = {name: data.name, email: data.email};
                insertData(sendData);
                setUser(sendData);
=======
                setUser(data);
                console.log('success', data);
                setUser(res.user);
>>>>>>> 79acd08969d0f46e83ba580797d5c5b645fdcbf3
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
<<<<<<< HEAD
            firebase.auth.Auth.Persistence.LOCAL = true;
=======
>>>>>>> 79acd08969d0f46e83ba580797d5c5b645fdcbf3
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
<<<<<<< HEAD
     const firebaseSingOut = () => {
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
            setUser(null);
          }).catch(function(error) {
            // An error happened.
          });
     }
         
=======
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
>>>>>>> 79acd08969d0f46e83ba580797d5c5b645fdcbf3

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
<<<<<<< HEAD
        cart, 
        updateCart, 
        firebaseSingOut
=======
        signInWithGoogle, 
        cart, 
        updateCart
>>>>>>> 79acd08969d0f46e83ba580797d5c5b645fdcbf3
    }
};

export default UseAuth;