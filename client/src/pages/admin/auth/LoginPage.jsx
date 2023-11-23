import React from 'react'
import { login } from "../../../api/authApi"
import { getAllUser } from "../../../api/userApi"
import { HashLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../../../context/UserContext';
import useAuthStore from '../../../app/store';
import { useQuery, useMutation } from 'react-query';
import LoginForm from './LoginForm';
import { usePersistLogin } from '../../../hooks/usePersistLogin';
import { AuthContext } from '../../../context/AuthContext';
const LoginPage = () => {
  const navigate = useNavigate()
  const { setToken } = React.useContext(AuthContext)
  const { persist, setPersist } = usePersistLogin()

  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [loginError, setLoginError] = React.useState(false)
  
  const [rememberMe, setRememberMe] = React.useState(false)

  const loginMutation = useMutation(formData => login({...formData}))
  const {
    isIdle, 
    isLoading, 
    isError, 
    isSuccess, 
    error,
    mutate: loginMutate,
    data
  } = loginMutation

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (username !== "" && password !== ""){
      loginMutate({ username, password })
    }else{
      alert("please check your password and username")
    }

  }

  React.useEffect(() => {
    if (isSuccess) {
      const accessToken = data?.data?.accessToken
      setToken(accessToken)
      // get to privious page
      navigate(-1)
    }
  },[isSuccess])

  React.useEffect(() => {
    if (isError) {
      console.log(error)
    }
  },[isError])

  let content = <LoginForm 
                  username={username}
                  setUsername={setUsername}
                  password={password}
                  setPassword={setPassword}
                  rememberMe={persist}
                  setRememberMe={setPersist}
                  handleSubmit={handleSubmit}  />
  if (isLoading){
    content =  <HashLoader />
  }

  if (isError) {
    content = <>Error ...{JSON.stringify(error.message)} </>
  }


  return (
    <main className='w-full min-h-screen grid place-content-center text-c-black-500'>
      {content}
    </main>
  )
}

export default LoginPage