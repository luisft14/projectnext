"use client"
import { createContext, useEffect, useState } from "react";

export const TokenContext = createContext();

export const TokenProvider = ({children}) => {

    const [tokenValidated,setTokenValidated] = useState([]);
    
    useEffect(() => {
        let data = localStorage.getItem('token') ?? ''
        setTokenValidated(data);
    }, [])
    
    return <TokenContext.Provider
    value={tokenValidated}
    >
        {children}
    </TokenContext.Provider>
}