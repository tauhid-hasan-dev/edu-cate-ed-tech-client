import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app);
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const user = { displayName: "Tauhid hasan" }



    const value = { user, createUser }

    return (
        <AuthContext.Provider value={value} >
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;