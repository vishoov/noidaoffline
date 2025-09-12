import React, { createContext, useState } from 'react';
import { useEffect } from 'react';
export const AuthContext = createContext();

export function AuthProvider({ children }){
    const [user, setUser] = useState(null);

    //methods for authcontext

    

    const login = async (email, password)=>{



        //api call to backend simulated

        if(email && password){
            setUser({email, password});
            localStorage.setItem('user', JSON.stringify({email, password}));
            return;
        }

        throw new Error('Invalid credentials');

    }

    const logout = ()=>{
        localStorage.removeItem('user');
        setUser(null);
    }



    return (
        <AuthContext.Provider value={{
            user, login, logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}