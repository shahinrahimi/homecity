import React from 'react'
import { useParams } from 'react-router-dom'
import { useProjectStore } from '../../app/store'
import NotFound from "../notfound/NotFound"

const ProjectPage = () => {
  const { id } =  useParams()
  const { getProjectById } = useProjectStore()
  const project = getProjectById(id)

  if (!project){
    return <NotFound />
  }
  return (
    <main>
      
    </main>
  )
}

export default ProjectPage