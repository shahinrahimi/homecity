import React from 'react'
import { Outlet } from 'react-router-dom'
import { useMutation } from 'react-query'
import { refresh } from '../../../api/authApi'
import { usePersistLogin } from "../../../hooks/usePersistLogin"
import { HashLoader } from 'react-spinners'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../context/AuthContext'

const RequiredAuth = () => {
  const naviagete = useNavigate()
  
  const { persist } = usePersistLogin()
  const { token, setToken } = React.useContext(AuthContext)

  const mutation = useMutation(refresh)
  const {
    isIdle,
    isLoading,
    isSuccess,
    isError,
    error,
    data,
    mutate: refreshMutation
  } = mutation

  React.useEffect(() => {
    if (!token && persist){
      try {
        refreshMutation()
      } catch (e) {
        console.log(e)
      }
    }

    if (!token && !persist){
      // redirect to login page
      naviagete("/admin")
    }
  },[])

  React.useEffect(() => {
    if (isSuccess) {
      const accessToken = data?.data?.accessToken
      setToken(accessToken)
    }
  }, [isSuccess])


  React.useEffect(() => {
    if (isError){
      console.log(error)
      naviagete("/admin")
    }
  }, [isError])

  React.useEffect(() => {
    // console.log(data)
  },[data])

  let content = ""

  if (isLoading) {
    content = <HashLoader />
  }

  if (isSuccess) {
    content = <Outlet />
  }

  return content
}

export default RequiredAuth