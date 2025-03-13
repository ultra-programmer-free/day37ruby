// //zustand使って状態管理をできるようにしたので、このコンテキスト一旦不要になった

// import * as React from 'react';
// import { createContext, PropsWithChildren, useState } from "react";

// type AuthContextType = {
//     isLoggeIn: boolean;
//     setIsLoggeIn: React.Dispatch<React.SetStateAction<boolean>>;
//     isLoginCheckDone: boolean;
//     setIsLoginCheckDone: React.Dispatch<React.SetStateAction<boolean>>;
//     userName: string;
//     setUserName: React.Dispatch<React.SetStateAction<string>>;
// }

// export const AuthContext = createContext<AuthContextType>({
//     isLoggeIn: false,
//     setIsLoggeIn:() => {},
//     isLoginCheckDone: false,
//     setIsLoginCheckDone:() => {},
//     userName:"",
//     setUserName:() => {},
// });

// export const AuthProvider = ({children}:PropsWithChildren) =>{
// const [isLoggeIn, setIsLoggeIn] =useState<boolean>(false);
// const [isLoginCheckDone, setIsLoginCheckDone] =useState<boolean>(false);
// const [userName, setUserName] =useState<string>("");
//     return (
//     <AuthContext.Provider value={{isLoggeIn,  setIsLoggeIn, isLoginCheckDone, setIsLoginCheckDone, userName, setUserName}}>
//         {children}
//         </AuthContext.Provider>
//     )
// }
