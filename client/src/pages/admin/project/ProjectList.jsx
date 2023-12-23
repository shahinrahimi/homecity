import React from 'react'
import { Link } from 'react-router-dom'
import { useProjectStore } from '../../../app/store'
import ProjectListItem from './ProjectListItem'

const ProjectList = () => {

  const { projects } = useProjectStore()

  let content

  if (projects && projects.length === 0) {
    content = <>No project found</>
  } else {
    content = projects.map((project, index) => <ProjectListItem key={index} project={project} />)
  }


  return (
    <main className='flex flex-col'>
      <Link 
        to="new"
        className='bg-green-600 capitalize text-white hover:bg-green-500 transition-colors rounded-lg grid place-content-center'
      >create a new project</Link>
      <ul className='flex flex-col w-full gap-4 mt-4 justify-between items-center'>
        {content}
      </ul>
    </main>
  )
}

export default ProjectList