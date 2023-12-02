import React from 'react'
import { Link } from 'react-router-dom'
import { deleteProject } from '../../../api'
import { Loading, TimeAgo, SimpleTeather } from '../../../components'
import { useMutation, useQueryClient } from 'react-query'
import { IoMdTrash as DeleteIcon } from "react-icons/io";
import { MdEditDocument as EditIcon } from "react-icons/md";
import { useAuthStore } from '../../../app/store'

const ProjectListItem = ({ project }) => {

  const token = useAuthStore.getState().token

  const {
    id,
    title,
    summary,
    createdAt,
    updatedAt,
    imagesSrc,
    videoSrc,
  } = project

  const queryClient = useQueryClient()

  const {
    isSuccess,
    isLoading,
    isError,
    error,
    data,
    mutate: deleteProjectMutation
  } = useMutation('projects', deleteProject, {
    onSuccess: () => {
      // invalidates cache and refetch
      queryClient.invalidateQueries("projects")
  }
  })

  const handleDelete = (e) => {
    e.preventDefault()
    deleteProjectMutation({ id, accessToken: token })
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <article
      className='flex flex-col w-full  bg-white shadow-sharp p-5 md:p-10 rounded-lg justify-between'>
        <div className="flex flex-col lg:flex-row justify-between gap-10">
            {/* image */}
            <div className="lg:w-[calc(50%)] rounded-lg overflow-hidden">
                <SimpleTeather images={imagesSrc} />
            </div>
            {/* content */}
            <div className="flex flex-col lg:w-[calc(50%)]">
                <Link
                className='text-3xl font-bold mb-4'
                to={`${id}`}
                >{title}</Link>
                <p>{summary}</p>
            </div>
        </div>


        <div className="flex justify-between items-center mt-3">
          <small className='self-end text-gray-500 italic'>updated at <TimeAgo timestamp={updatedAt}/></small>

          <div className="flex gap-4">
            <button 
                className='bg-white border-red-500 border-2 text-red-500 grid place-content-center rounded-md w-10 h-10 text-2xl hover:text-white hover:bg-red-500 transition-all'
                onClick={handleDelete}
            >
                <DeleteIcon />
            </button>

            <Link
                to={`edit/${id}`}
                className='bg-white border-orange-400 border-2 text-orange-400 grid place-content-center rounded-md w-10 h-10 text-2xl hover:text-white hover:bg-orange-400 transition-all'
            >
                <EditIcon />
            </Link>
            </div>
        </div>        
    </article>
  )
}

export default ProjectListItem