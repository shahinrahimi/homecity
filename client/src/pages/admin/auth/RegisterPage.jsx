import React from 'react'
import RegisterForm from './RegisterForm';
import { useMutation } from 'react-query';
import { register } from '../../../api/userApi';
import { HashLoader } from 'react-spinners';
const RegisterPage = () => {

  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [password2, setPassword2] = React.useState("")
  const mutation = useMutation(formData => register({...formData}))
  const {
    isIdle,
    isLoading,
    isSuccess,
    isError,
    error,
    data,
    mutate: registerMutate
  } = mutation

  React.useEffect(() => {
    if (isSuccess) {
      console.log(data)
    }
  },[isSuccess])

  React.useEffect(() => {
    if (isError) {
      console.log(error)
    }
  },[isError])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password === password2 && password !== "" && username !== ""){
      registerMutate({ username, password })
      
    }
  }

  let content = <RegisterForm 
                  username={username}
                  setUsername={setUsername}
                  password={password}
                  setPassword={setPassword}
                  password2={password2}
                  setPassword2={setPassword2}
                  handleSubmit={handleSubmit}
                />
  if (isLoading){
    content = <HashLoader />
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

export default RegisterPage