import React from 'react'
import { GoEye, GoEyeClosed } from "react-icons/go";

const RegisterForm = ({
    username,
    setUsername,
    password,
    setPassword,
    password2,
    setPassword2,
    handleSubmit
}) => {
    const [revealPasswod, setReavelPassword] = React.useState(false)
    return (
        <form 
            className='bg-white shadow-cutome-1 flex flex-col justify-between px-20 py-16 gap-6 rounded-md'
            onSubmit={handleSubmit}
        >
            <h1
            className='text-4xl text-c-black-500/75 uppercase font-light text-center mb-2'
            >register user</h1>
            {/* username group */}
            <div className="flex flex-col gap-2">
            <label 
                htmlFor="username"
                className='uppercase text-sm'
            >username</label>
            <div className="relative px-4 py-3">
                <input
                name='username'
                type='text'
                className='peer focus:border-transparent active:border-transparent outline-none'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
                {/* input animation border */}
                <div className="absolute top-0 left-0 w-full h-full border border-c-blue-400 opacity-0 rounded-md  peer-focus:animate-input-active pointer-events-none bg-transparent"></div>

                {/* input border */}
                <div className="absolute top-0 left-0 w-full h-full border border-c-black-100/25 rounded-md peer-focus:border-transparent pointer-events-none bg-transparent"></div>
            </div>
            
            </div>
            {/* password */}
            <div className="flex flex-col gap-2">
            <label 
                htmlFor="password"
                className='uppercase text-sm'
            >password</label>
            <div className="relative px-4 py-3 flex items-center">
                <input
                name='password'
                type={revealPasswod ? "text" : "password"}
                className='peer focus:border-transparent active:border-transparent outline-none'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <div 
                className="text-c-black-500/50 mr-1"
                onClick={() => setReavelPassword(prev => !prev)}
                >
                {revealPasswod 
                    ? <GoEyeClosed /> 
                    : <GoEye/>
                }
                </div>

                {/* input animation border */}
                <div className="absolute top-0 left-0 w-full h-full border border-c-blue-400 opacity-0 rounded-md peer-focus:animate-input-active pointer-events-none bg-transparent"></div>

                {/* input border */}
                <div className="absolute top-0 left-0 w-full h-full border border-c-black-100/25 rounded-md peer-focus:border-transparent pointer-events-none bg-transparent"></div>
                
            </div>        
            </div>

            {/* confirm password */}
            <div className="flex flex-col gap-2">
            <label 
                htmlFor="password"
                className='uppercase text-sm'
            >confirm password</label>
            <div className="relative px-4 py-3 flex items-center">
                <input
                name='password'
                type={revealPasswod ? "text" : "password"}
                className='peer focus:border-transparent active:border-transparent outline-none'
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
                />
                <div 
                className="text-c-black-500/50 mr-1"
                onClick={() => setReavelPassword(prev => !prev)}
                >
                {revealPasswod 
                    ? <GoEyeClosed /> 
                    : <GoEye/>
                }
                </div>

                {/* input animation border */}
                <div className="absolute top-0 left-0 w-full h-full border border-c-blue-400 opacity-0 rounded-md peer-focus:animate-input-active pointer-events-none bg-transparent"></div>

                {/* input border */}
                <div className="absolute top-0 left-0 w-full h-full border border-c-black-100/25 rounded-md peer-focus:border-transparent pointer-events-none bg-transparent"></div>
                
            </div>        
            </div>
            
        
            <button
            className='bg-c-black-800 text-white grid place-content-center py-2 hover:bg-c-black-400 transition-colors cursor-pointer font-semibold capitalize mt-4'
            type='submit'
            >register</button>
        </form>
    )
}

export default RegisterForm