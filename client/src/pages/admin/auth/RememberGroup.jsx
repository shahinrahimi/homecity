import React from 'react'

const RememberGroup = ({ rememberMe, setRememberMe }) => {
  return (
    <div className="flex justify-between items-center mt-1">
        <div className="flex flex-row-reverse items-center">
        <label 
            htmlFor="rememberme"
            className='text-sm font-light text-c-black-500 cursor-pointer'
            onClick={() => setRememberMe(prev => !prev)}

        >Remember me</label>
        <input
            className='accent-c-blue-400 w-4 h-4 border-c-black-500 mr-1 cursor-pointer'
            name="rememberme"
            type="checkbox"
            checked={rememberMe}
            onChange={() => setRememberMe(prev => !prev)}
        />
        </div>

        <a 
        href=""
        className='text-sm font-light text-c-black-500'
        >Forgot Password?</a>
    </div>
  )
}

export default RememberGroup