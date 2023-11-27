import React from 'react'
import { useBlogStore } from '../../app/store'

const BlogsPage = () => {
    const blogs = useBlogStore.getState().blogs

    console.log(blogs)

  return (
    <>Blogs</>
  )
}

export default BlogsPage