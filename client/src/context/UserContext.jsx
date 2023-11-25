import React from "react";
import { jwtDecode } from "jwt-decode";
import { useAuthStore } from "../app/store";
export const UserContext = React.createContext()

export const UserProvider = ({ children }) => {

    const [userInfo, setUserInfo] = React.useState(null)

    const token = useAuthStore.getState().token
    const {setToken} = useAuthStore()

    React.useEffect(() => {
        if (token) {
            const { userInfo } = jwtDecode(token)
            setUserInfo(userInfo)
        }
    },[token, setToken])

    return (
        <UserContext.Provider value={{ userInfo }}>
            { children }
        </UserContext.Provider>
    )
}