import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectCurrentToken } from "../app/api/authSlice"
import jwtDecode from "jwt-decode"
import ROLES from "../constants/roles"

const useAuth = () => {
  const token = useSelector(selectCurrentToken)
  let isManager = false
  let isAdmin = false
  let status = "Admin"

  if (token) {
    const decode = jwtDecode(token)
    const { username, roles } = decode.UserInfo

    isManager = roles.includes(ROLES.Manger)
    isAdmin = roles.includes(ROLES.Admin)

    if (isManager) status = ROLES.Manger
    if (isAdmin) status = ROLES.Admin

    return {
      username,
      roles,
      status,
      isManager,
      isAdmin
    }

  }

  return {
    username:'',
    roles:[],
    isManager,
    isAdmin,
    status
  }
}

export default useAuth