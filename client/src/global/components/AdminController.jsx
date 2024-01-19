import React from 'react'
import { Link } from 'react-router-dom'
import { useMutation } from 'react-query'
import { logout } from '../../api'
import { useAuthStore } from '../../app/store'
import { UserContext } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom'
import { IoLogOutOutline as LogoutIcon } from "react-icons/io5";

const AdminController = () => {
  const mutation = useMutation(logout)
  const navigate = useNavigate()
  const { setToken } = useAuthStore()
  const { userInfo } = React.useContext(UserContext)

  const {
    isIdle,
    isLoading,
    isSuccess,
    isError,
    error,
    data,
    mutate: logoutMutation
  } = mutation

  React.useEffect(() => {
    if (isSuccess){
      setToken(null)
      navigate("/")
    }
  },[isSuccess, navigate, setToken])

  return (
    <div className="flex flex-row justify-end items-center gap-2 m-1 text-xl text-white">
      {userInfo 
        ? 
          <>
            <Link to={"/admin/dash"}>{userInfo?.username}</Link>
            <LogoutIcon
              className="text-2xl text-white/70 cursor-pointer hover:text-white transition-all" 
              onClick={() => logoutMutation()}/>
          </>
        : ""}
    </div>
  )
}

export default AdminController