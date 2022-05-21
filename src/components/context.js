import React,  { createContext, useState } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = (props) => {
    const [categorie, setCategorie] = useState({});

    return (
        <AuthContext.Provider value={{
                categorie, setCategorie
            }}>
            {props.children}
        </AuthContext.Provider>
    )
}