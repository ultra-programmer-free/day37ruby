// zustand使って状態管理とloginやlogout、isLoginCheckDondeの判定処理をできるようにしたので、このカスタムフック一旦不要になった

// import {useContext, useEffect } from "react";
// import { useAuthStore } from "../stores/use-auth-store";
// import {AuthContext}

// const USER_NAME_KEY = "user-name"
// export const useAuth = () => {
//     const {
//         isLoggedIn, 
//         setIsLoggedIn, 
//         isLoginCheckDone,
//         setisLoginCheckDone, 
//         userName, 
//         setUserName,
//     } = useContext(AuthContext);

//     const login = () => {
//         if(userName) {
//             setIsLoggedIn(true)
//             localStorage.removeItem(USER_NAME_KEY, userName);
//         }
//     };

//     const logout = () => {
//         setIsLoggedIn(false);
//         setUserName("");
//         localStorage.removeItem(USER_NAME_KEY);
//     };

//     //マウント時にローカルストレージからユーザ名を取得する
//     // ユーザー名が取得できた場合はログイン中として扱う
//     useEffect(() => {
//         const userNameData = localStorage.getItem(USER_NAME_KEY);
//         if (userNameData) {
//             setUserName(userNameData)
//             setIsLoggedIn(true)
//         }
//     }, [])
    
//     return { isLoggedIn, isLoginCheckDone, login, logout, userName, setUserName}
// }