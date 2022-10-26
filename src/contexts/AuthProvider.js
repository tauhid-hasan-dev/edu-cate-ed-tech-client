import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app);
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [toggle, setToggle] = useState(false);



    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth);
    }

    const googleSignIn = (provider) => {
        return signInWithPopup(auth, provider)
    }

    const gitHubSignIn = (provider) => {
        return signInWithPopup(auth, provider)
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        })

        return () => {
            unsubscribe()
        }
    }, [])

    const value = { user, createUser, signIn, logOut, updateUser, googleSignIn, gitHubSignIn, loading, toggle, setToggle }

    return (
        <AuthContext.Provider value={value} >
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;