import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {

  return (
    <div className=" grid place-content-center">
        <h1 className='font-bold text-3xl mb-10'>Dashboard</h1>
        
        <ul className='grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 text-5xl gap-6 text-white/50'>
          <li className='h-40 w-96 md:h-96 grid place-content-center shadow-sharp cursor-pointer hover:shadow-cutome-1 hover:text-white hover:scale-105 transition-all hover:rounded-3xl duration-500 hover:text-6xl bg-sky-500 '>
            <Link className='w-full h-full' to="/admin/franchise">Franchises</Link>
          </li>
          <li className='h-40 w-96 md:h-96 grid place-content-center shadow-sharp cursor-pointer hover:shadow-cutome-1 hover:text-white hover:scale-105 transition-all hover:rounded-3xl duration-500 hover:text-6xl bg-orange-500'>
            <Link className='w-full h-full' to="/admin/project">Projects</Link>
          </li>
          <li className='h-40 w-96 md:h-96 grid place-content-center shadow-sharp cursor-pointer hover:shadow-cutome-1 hover:text-white hover:scale-105 transition-all hover:rounded-3xl duration-500 hover:text-6xl bg-indigo-500'>
            <Link className='w-full h-full' to="/admin/blog">Blogs</Link>
          </li>
          <li className='h-40 w-96 md:h-96 grid place-content-center shadow-sharp cursor-pointer hover:shadow-cutome-1 hover:text-white hover:scale-105 transition-all hover:rounded-3xl duration-500 hover:text-6xl bg-green-500 '>
            <Link className='w-full h-full' to="/admin/tag">Tags</Link>
          </li>
        </ul>

    </div>
  )
}

export default Dashboard