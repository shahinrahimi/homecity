import React from 'react'
import { GoEye, GoEyeClosed } from "react-icons/go";

const LoginForm = ({
    username,
    password,
    setUsername,
    setPassword,
    rememberMe,
    setRememberMe,
    handleSubmit
}) => {
    const [revealPasswod, setReavelPassword] = React.useState(false)

    return (
        <form 
        className='bg-white shadow-cutome-1 flex flex-col justify-between px-20 py-16 gap-8 rounded-md'
        onSubmit={handleSubmit}
        >
            <h1
            className='text-4xl text-c-black-500/75 uppercase font-light text-center mb-4'
            >admin login</h1>
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
            {/* password group */}
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

            {/* remember group */}
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
            
            </div>
            
            <button
            className='bg-c-black-800 text-white grid place-content-center py-2 hover:bg-c-black-400 transition-colors cursor-pointer font-semibold capitalize'
            type='submit'
            >login</button>
        </form>
    )
}

export default LoginForm