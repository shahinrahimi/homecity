import React from 'react'
import { Link } from 'react-router-dom'
import { useBlogStore } from '../../../app/store'
import BlogListItem from './BlogListItem'

const BloagList = () => {

  let blogs = useBlogStore.getState().blogs

  // make sure component rerender that updated state
  // just for admin pannel
  const { setBlogs } = useBlogStore()
  React.useEffect(() => {
    blogs = useBlogStore.getState().blogs
  },[setBlogs])

  let content 

  if (blogs && blogs.length === 0) {
    content = <>No blog found</>
  } else {
    content = blogs.map((blog,index) => <BlogListItem key={index} blog={blog} /> )
  }

  return (
    <main className='flex flex-col'>
      <Link 
        to="new"
        className='bg-green-600 capitalize text-white hover:bg-green-500 transition-colors rounded-lg grid place-content-center'
      >create a new Blog</Link>
      <ul className='flex flex-col w-full gap-4 mt-4 justify-between items-cente'>
        {content}
      </ul>
    </main>
    
  )
}

export default BloagList