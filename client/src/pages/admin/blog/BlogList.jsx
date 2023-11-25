import React from 'react'
import { Link } from 'react-router-dom'
import { getAllBlogs } from '../../../api/blogApi'
import { useQuery, useQueryClient, useMutation } from "react-query"
import { Loading } from "../../../components"
import { useBlogStore } from '../../../app/store'
import BlogListItem from './BlogListItem'

const BloagList = () => {

  const setBlogs = useBlogStore((state) => state.setBlogs)
  const {
    isSuccess,
    isLoading,
    isError,
    error,
    data: blogs
  } = useQuery('blogs', getAllBlogs, {
    select: data => data.map(d => {
      return {...d, id: d._id, imageSrc: `http://localhost:5000/${d.image}`}
    })
  })


  React.useEffect(() => {
    if (blogs){
      setBlogs(blogs)
    }
  },[blogs, setBlogs])


  let content = useBlogStore((state) => state.blogs.map((blog) => {
    return (
      <BlogListItem 
        key={blog.id}
        {...blog}
      />
    )
  }))

  if (isLoading){
    content = <Loading/>
  }

  if (isError){
    content = (
      <>
        <>fetch error: {error}</>
      </>
    )
  }

  if (blogs && blogs.length === 0) {
    content = <>No blog found</>
  }

  return (
    <main className='flex flex-col'>
      <Link 
        to="new"
        className='bg-green-600 capitalize text-white hover:bg-green-500 transition-colors rounded-lg grid place-content-center'
      >create a new Blog</Link>
      <ul className='flex flex-col w-full gap-4 mt-4'>
        {content}
      </ul>
    </main>
    
  )
}

export default BloagList