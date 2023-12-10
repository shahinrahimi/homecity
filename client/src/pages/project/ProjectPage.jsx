import React from 'react'
import { useParams } from 'react-router-dom'
import { useProjectStore } from '../../app/store'
import NotFound from "../notfound/NotFound"
import { Section } from '../../components'
import { CiLocationOn as AddressIcon } from "react-icons/ci";

import ProjectCarousel from './ProjectCarousel'
const ProjectPage = () => {
  const { id } =  useParams()
  const { getProjectById } = useProjectStore()
  const project = getProjectById(id)

  if (!project){
    return <NotFound />
  }

  const {
    title,
    summary,
    content,
    country,
    city,
    district,

    startingPrice,
    totalArea,
    totalUnits,
    maxRoomCount,
    maxBathCount,
    startYear,
    endYear,

    isPreSale,    
    isInstallment, 
    Boolean,

    translations,
    tags,
    facilities,
    code,

    coverSrc,
    imagesSrc,
    videoSrc
  } = project
  return (
    <main className='min-h-screen flex flex-col p-40'>
      {/* title */}
      <div className="flex justify-between">
        <h1>{title} | {code}</h1>
        <h1>${startingPrice && startingPrice}</h1>
      </div>

      {/* tags */}
      <ul className="flex">
        {tags.map((tag, index) => {
          return (
            <li key={index} className='bg-gray-600 text-white'>
              {tag.en}
            </li>
          )
        })}
      </ul>

      {/* address */}
      <div className="flex items-center capitalize gap-2">
        <AddressIcon />
        {country} - {city} - {district}
      </div>

      <ProjectCarousel 
        project={project}
      />
      
      {/* facilities */}
      <h1>Facilities</h1>
      <ul className="flex flex-wrap">
        {facilities.map(facility => {
          return (
            <li className='flex items-center basis-1/2 gap-2 capitalize'>
              <div className="w-8">
                <img src={facility.iconSrc} alt="" />
              </div>
              <div className="">
                {facility.en}
              </div>
            </li>
          )
        })}
      </ul>

      <div dangerouslySetInnerHTML={{__html: content}}>
      </div>

      
    </main>

  )
}

export default ProjectPage