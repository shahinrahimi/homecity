import React from 'react'
import {  Outlet } from 'react-router-dom'
import { useMutation } from 'react-query'
import { refresh, validate } from '../../../api/authApi'
import { Loading } from "../../../components"
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../../app/store'

const RequiredAuth = () => {

  const naviagete = useNavigate()
  const effectRan = React.useRef(false)
  const token = useAuthStore.getState().token
  const { setToken } = useAuthStore()
  const [trueSuccess, setTrueSuccess] = React.useState(false)

  const {
    isIdle,
    isLoading,
    isSuccess,
    isError,
    error,
    data,
    mutate: refreshMutation
  } = useMutation('token2',refresh)

  const {
    isSuccess: isValidateSuccess,
    isLoading: isValidateLoading,
    isError: isValidateError,
    error: validateError,
    mutate: validateMutation
  } = useMutation('token',validate)

  React.useEffect(() => {
    // make effect ran just one even in development mode (strict mode)
    if (effectRan.current === true || process.env.NODE_ENV !== 'development') {

      // first visit or nuvalid token
      if (!token) {
        naviagete("/admin")
      } else {
        // validate token
        // scenario1: token is valid
        // scenario2: token is not valid
        validateMutation({ accessToken: token})
      }
    }
   
    return () => effectRan.current = true
  },[])

  // scenario1
  React.useEffect(() => {
    if (isValidateSuccess){
      setTrueSuccess(true)
    }
  }, [isValidateSuccess])

  // scenario2
  React.useEffect(() => {
    if (isValidateError){
      console.log(validateError)
      refreshMutation()
    }
  }, [isValidateError])

  // scenario2 case 1 => valid refresh token
  React.useEffect(() => {
    if (isSuccess) {
      console.log(isSuccess)
      const accessToken = data?.data?.accessToken
      setToken(accessToken)
      setTrueSuccess(true)
    }
  }, [isSuccess])

  // scenario2 case 2 cookie expired
  React.useEffect(() => {
    if (isError){
      useAuthStore.setState(null)
      naviagete("/admin")
    }
  }, [isError])

  let content = ""

  if (isLoading || isValidateLoading) {
    content = <Loading />
  }

  if (trueSuccess){
    content = <Outlet />
  }
  return content
}

export default RequiredAuth