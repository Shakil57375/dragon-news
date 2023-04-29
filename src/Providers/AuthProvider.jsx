import React from 'react';
import { getAuth } from "firebase/auth";
import { createContext } from 'react';
import app from '../firebase/firebaseConfig';
export const AuthContext = createContext(null);
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const user = null
    const authInfo = {
        user
    }
    return (
        <AuthContext.Provider value={authInfo}> 
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;