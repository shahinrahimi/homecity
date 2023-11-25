import React from 'react'
import { useParams } from 'react-router-dom'
import EditBlogForm from './EditBlogForm'
import { useBlogStore } from '../../../app/store'

const EditBlog = () => {

    const { id } = useParams()
    const blog = useBlogStore((state) => state.getBlogById(id))
    
    if (blog) {
        return <EditBlogForm blog={blog} />
    }
    return (
        <div>Not Found</div>
    )
}

export default EditBlog