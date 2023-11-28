import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {

  return (
    <div className="">
        <h1 className='font-bold text-3xl mb-10'>Dashboard</h1>
        
        <ul className='flex flex-col gap-4'>
            <Link to="/admin/tag">Tags</Link>
            <Link to="/admin/blog" >Blogs</Link>
            <Link to="/admin/franchise">Franchises</Link>
            <Link to="/admin/realestate">Realstates</Link>
        </ul>

    </div>
  )
}

export default Dashboard