import React from 'react'
import { deleteBlog } from '../../../api'
import { useMutation, useQueryClient } from 'react-query'
import { useBlogStore } from '../../../app/store'
import { useParams } from 'react-router-dom'
import { NotFound } from "../../../pages"
import { Loading, TimeAgo } from '../../../components'
import { IoMdTrash as DeleteIcon } from "react-icons/io";
import { MdEditDocument as EditIcon } from "react-icons/md";
import { Link } from 'react-router-dom'


const BlogPreview = () => {
    const { id } = useParams()
    const blog = useBlogStore((state) => state.getBlogById(id))

    const queryClient = useQueryClient()

    const {
        isSuccess,
        isLoading,
        isError,
        error,
        data,
        mutate: blogDeleteMutation
    } = useMutation('blogs', deleteBlog, {
        onSuccess: () => {
        // invalidates cache and refetch
        queryClient.invalidateQueries("blogs")
    }
    })

    const handleDelete = (e) => {
        e.preventDefault()
        blogDeleteMutation({ id })
    }

    if (!blog){
        return <NotFound />
    }

    if (isLoading) {
        return <Loading />
    }


  return (
    <main className='flex flex-col w-full items-center gap-6'>
        <h1>{blog.title}</h1>
        <div className="flex flex-col gap-1">
            <small className='self-end'>created: <TimeAgo timestamp={blog.createdAt}/></small>
            <small className='self-end'>updated: <TimeAgo timestamp={blog.updatedAt}/></small>
        </div>

        <div className="flex gap-4">
            <button 
                className='bg-white border-red-500 border-2 text-red-500 grid place-content-center rounded-md w-10 h-10 text-2xl hover:text-white hover:bg-red-500 transition-all'
                onClick={handleDelete}
            >
                <DeleteIcon />
            </button>

            <Link
                to={`/admin/blog/edit/${id}`}
                className='bg-white border-orange-400 border-2 text-orange-400 grid place-content-center rounded-md w-10 h-10 text-2xl hover:text-white hover:bg-orange-400 transition-all'
            >
                <EditIcon />
            </Link>
        </div>
        
        {/* image */}
        <div className="w-full rounded-lg overflow-hidden">
            <img 
                src={blog.imageSrc} alt=""
                className='h-full w-full object-cover'
            />
        </div>
        <summary>
            {blog.summary}
        </summary>
        <article dangerouslySetInnerHTML={{__html: blog.content}}>
        </article>
    </main>
  )
}

export default BlogPreview