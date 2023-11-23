import React from "react";
import { jwtDecode } from "jwt-decode";
import { AuthContext } from "./AuthContext";
export const UserContext = React.createContext()

export const UserProvider = ({ children }) => {

    const [userInfo, setUserInfo] = React.useState(null)

    const { token } = React.useContext(AuthContext)

    React.useEffect(() => {
        if (token) {
            const { userInfo } = jwtDecode(token)
            setUserInfo(userInfo)
        }
    },[token])

    return (
        <UserContext.Provider value={{ userInfo }}>
            { children }
        </UserContext.Provider>
    )
}