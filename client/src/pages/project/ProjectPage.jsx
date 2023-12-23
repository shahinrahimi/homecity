import React from 'react'
import { useParams } from 'react-router-dom'
import { useProjectStore } from '../../app/store'
import NotFound from "../notfound/NotFound"
import { Section } from '../../components'
import { CiLocationOn as AddressIcon } from "react-icons/ci";
import { useTranslation } from 'react-i18next'
import ProjectCarousel from './ProjectCarousel'
import { LanguageContext } from '../../context/LanguageContext'

const ProjectPage = () => {
  const { id } =  useParams()
  const { getProjectById } = useProjectStore()
  const project = getProjectById(id)
  const { t } = useTranslation()
  const { lang, dir } = React.useContext(LanguageContext)

  if (!project){
    return <NotFound />
  }

  const {
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

    tags,
    facilities,
    code,

    coverSrc,
    imagesSrc,
    videoSrc
  } = project


  const projectFa = project.translations.filter(t => t.language === "fa")[0]
  const projectAr = project.translations.filter(t => t.language === "ar")[0]
  const projectTr = project.translations.filter(t => t.language === "tr")[0]

  let title, content
  if (lang === "fa"){
      title = projectFa.title
      content = projectFa.content
  } else if (lang === "ar") {
      title = projectAr.title
      content = projectAr.content
  } else if (lang === "tr") {
      title = projectTr.title
      content = projectTr.content
  } else {
      title = project.title,
      content = project.content
  }

  return (
    <main className='min-h-screen flex flex-col py-40 container mx-auto gap-4'>
      {/* title */}
      <div className="flex justify-between">
        <h1>{title} | {code}</h1>
        <h1>${startingPrice && startingPrice}</h1>
      </div>

      {/* tags */}
      <ul className="flex gap-4">
        {tags.map((tag, index) => {
          return (
            <li key={index} className='bg-gray-600 text-white py-1 px-2'>
              {tag[lang]}
            </li>
          )
        })}
      </ul>

      {/* address */}
      <div dir="ltr" className="flex items-center capitalize gap-2">
        <AddressIcon />
        {country} - {city} - {district}
      </div>

      <ProjectCarousel 
        project={project}
      />

      {/* details */}
      <div className="w-full shadow-cutome-1 p-5 rounded-md">
        <h1 className='border-b-2 font-bold mb-2'>{t("details")}</h1>
        <ul className="flex flex-wrap">
          
        </ul>
      </div>
      
      {/* facilities */}
      <div className="w-full shadow-cutome-1 p-5 rounded-md">
        <h1 className='border-b-2 font-bold mb-2'>{t("facilities")}</h1>
        <ul className="flex flex-wrap">
          {facilities.map((facility, index) => {
            return (
              <li key={index} className='flex items-center basis-1/2 gap-2 capitalize p-1'>
                <div className="w-8">
                  <img src={facility.iconSrc} alt="" />
                </div>
                <div className="">
                  {facility[lang]}
                </div>
              </li>
            )
          })}
        </ul>
      </div>

      {/* description */}
      <div className="w-full shadow-cutome-1 p-5 rounded-md">
        <h1 className='border-b-2 font-bold mb-2'>{t("description")}</h1>
        <div dangerouslySetInnerHTML={{__html: content}}>
        </div>
      </div>
      

      
    </main>

  )
}

export default ProjectPage