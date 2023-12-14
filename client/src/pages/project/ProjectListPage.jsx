import React from 'react'
import { Section, ProjectCard } from '../../components'
import { useProjectStore } from '../../app/store'
import { background1 as bg } from '../../assets/img'
const ProjectListPage = () => {

  const projects = useProjectStore.getState().projects
  console.log(projects)

  return (
    <main className='py-20'>
      <Section background={bg} className="h-[calc(80vh)] grid place-content-center">
        <h1 className='text-6xl font-semibold text-center text-white drop-shadow-md mb-2'>Homecity</h1>
        <h1 className='text-4xl font-medium text-center text-white drop-shadow-md'>By investing $400,000 in the real estate sector, you can become a Turkish citizen.</h1>
        <p className='text-2xl font-medium text-center text-yellow-500 drop-shadow-sm'>Our professional and dynamic team of real estate investment consultants is ready to assist you with the most suitable options available.</p>
      </Section>
      <Section className="border-2 ">
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative -top-40 gap-8'>
          {projects.map((project,index)=> {
            return (
              <li key={index} className='p-2 grid place-content-center'>
                <ProjectCard project={project} />
              </li>
            )
          })}
        </ul>
      </Section>
    </main>
  )
}

export default ProjectListPage