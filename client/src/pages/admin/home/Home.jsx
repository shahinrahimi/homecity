import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="">
        <h1 className='font-bold text-3xl mb-10'>Home</h1>
        
        <ul className='flex flex-col gap-4'>
            <Link to="blog" >Blogs</Link>
            <Link to="franchise">Franchises</Link>
            <Link to="realestate">Realstates</Link>
        </ul>
    </div>
  )
}

export default Home