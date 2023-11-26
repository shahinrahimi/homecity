import React from 'react'
import { useQuery } from 'react-query'
import { getAllBlogs } from '../../../api/blogApi'
import { Loading } from '../../../components'

const BlogCard = ({ blog }) => {

    const {
        id,
        imageSrc,
        title,
        summry,
        createdAt,
        updatedAt
    } = blog
    return (
        <article>
            <div className="">
                <img src={imageSrc} alt="" />
            </div>
            <h1>{title}</h1>
            <p>{summry}</p>
        </article>
    )
}
const Blogs = () => {

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

    let content = ""
    if (isLoading){
        content =  <Loading />
    }

    if (isSuccess){
        content = (
            <ul>
                {blogs.map((blog, index) => <BlogCard key={index} blog={blog} />)}
            </ul>
        )
    }


  return content
}

export default Blogs