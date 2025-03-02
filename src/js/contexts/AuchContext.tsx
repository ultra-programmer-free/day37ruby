import * as React from 'react';
import { createContext, PropsWithChildren, useState } from "react";

type AuthContextType = {
    isLoggeIn: boolean;
    setIsLoggeIn: React.Dispatch<React.SetStateAction<boolean>>;
    userName: string;
    setUserName: React.Dispatch<React.SetStateAction<string>>;
}

export const AuthContext = createContext<AuthContextType>({
    isLoggeIn: false,
    setIsLoggeIn:() => {},
    userName:"",
    setUserName:() => {},
});

export const AuthProvider = ({children}:PropsWithChildren) =>{
const [isLoggeIn, setIsLoggeIn] =useState<boolean>(false);
const [userName, setUserName] =useState<string>("");
    return (
    <AuthContext.Provider value={{isLoggeIn,  setIsLoggeIn, userName, setUserName}}>
        {children}
        </AuthContext.Provider>
    )
}
