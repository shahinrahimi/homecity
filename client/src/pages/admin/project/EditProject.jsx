import React from 'react'
import { useParams } from 'react-router-dom'
import EditProjectForm from './EditProjectForm'
import { useProjectStore } from '../../../app/store'


const EditProject = () => {
  
  const { id } = useParams()
  const project = useProjectStore((state) => state.getProjectById(id))

  if (!project){
    return <div>Not Found</div>
  }

  console.log(project)
  
  return <EditProjectForm project={project} />
}

export default EditProject