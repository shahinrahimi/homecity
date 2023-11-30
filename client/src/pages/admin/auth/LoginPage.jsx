import React from 'react'
import { login } from '../../../api';
import { Loading } from "../../../components"
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import LoginForm from './LoginForm';
import { useAuthStore } from '../../../app/store';

const LoginPage = () => {
  const navigate = useNavigate()
  const { setToken } = useAuthStore()

  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")

  const {
    isIdle, 
    isLoading, 
    isError, 
    isSuccess, 
    error,
    mutate: loginMutate,
    data
  } = useMutation(formData => login({...formData}))

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
      navigate("/admin/dash")
    }
  },[isSuccess, setToken])

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
                    handleSubmit={handleSubmit}  />
  if (isLoading){
    content =  <Loading />
  }

  if (isError) {
    content = <>Error ...{JSON.stringify(error.message)} </>
  }

  // return content

  return (
    <main className='w-full h-[calc(80vh)]  grid place-content-center '>
      {content}
    </main>
  )
}

export default LoginPage