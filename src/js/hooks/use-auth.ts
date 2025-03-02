import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuchContext";

const USER_NAME_KEY = "user-name";

export const useAuth = () => {
    const {isLoggeIn, setIsLoggeIn, userName, setUserName} =
    useContext(AuthContext);

    const login = () => {
        if(userName) {
     setIsLoggeIn(true)
     localStorage.setItem(USER_NAME_KEY, userName)
        }    
    };

    const logout = () => {
        setIsLoggeIn(false);
        setUserName("")
        localStorage.removeItem(USER_NAME_KEY)
    };

//マウント時にローカルストレージからユーザ名を取得する
// ユーザ名が取得できた場合はログイン中として扱う
useEffect(() => {
  const userNameData = localStorage.getItem(USER_NAME_KEY);
    if(userNameData) {
        setUserName(userNameData);
        setIsLoggeIn(true);
    }
}, []);
    return { isLoggeIn, login, logout, userName, setUserName}
}