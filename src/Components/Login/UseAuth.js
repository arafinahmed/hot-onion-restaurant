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
     const [user, setUser] = useState(null);

     const signUpFirebase = (data) =>{
            console.log('from useAuth', data);
            return firebase.auth().createUserWithEmailAndPassword(data.email, data.password1)
            .then(res => {
                setUser(data);
                console.log('success', data);
                return res.user;
            })
            .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log('arafin message',errorMessage);
            return error.message;
            setUser(null);
          });
     }
     const signInFirebase = (data) => {
         console.log('signin firebase', data.email, data.password);
        return firebase.auth().signInWithEmailAndPassword(data.email, data.password)
        .then((res) =>
        {
            console.log("signIn");
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

     useEffect(() => {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              // User is signed in.
              var displayName = user.displayName;
              var email = user.email;
              var emailVerified = user.emailVerified;
              var photoURL = user.photoURL;
              var isAnonymous = user.isAnonymous;
              var uid = user.uid;
              var providerData = user.providerData;
              console.log('useEffect');
              // ...
            } else {
              // User is signed out.
              // ...
            }
          });
     }, [])

    return {
        user,
        signUpFirebase, 
        signInFirebase
    }
};

export default UseAuth;