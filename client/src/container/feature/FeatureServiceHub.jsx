import React from 'react'
import { IoIosSchool as EducationIcon } from "react-icons/io"
import { GiPassport as ImmigrationIcon } from "react-icons/gi"
import { BsCurrencyExchange as ExchangeIcon } from "react-icons/bs"
import { MdHealthAndSafety as InsuranceIcon } from "react-icons/md"
import { AiOutlineGlobal as TranslationIcon } from "react-icons/ai"
import { GoLaw as LawIcon } from "react-icons/go"
import { Simplify, Section } from "../../components"
import {
  service_education,
  service_exchange,
  service_immigration,
  service_insurance,
  service_law,
  service_translation
} from "../../assets/img"

import { useTranslation } from 'react-i18next'

const service_items = [
  {
    title: "feature_education_service_h",
    icon: EducationIcon,
    image: service_education,
    content: "feature_education_service_p",
    color: "c-blue-500",
  },
  {
    title: "feature_exchange_service_h",
    icon: ExchangeIcon,
    image: service_exchange,
    content: "feature_exchange_service_p",
    color: "c-yellow-500",
  },
  {
    title: "feature_immigration_service_h",
    icon: ImmigrationIcon,
    image: service_immigration,
    content: "feature_immigration_service_p",
    color: "c-red-400",
  },

  {
    title: "feature_insurance_service_h",
    icon: InsuranceIcon,
    image: service_insurance,
    content: "feature_insurance_service_p",
    color: "c-green-500",
  },
  {
    title: "feature_law_service_h",
    icon: LawIcon,
    image: service_law,
    content: "feature_law_service_p",
    color: "c-black-500",
  },
  {
    title: "feature_insurance_service_h",
    icon: TranslationIcon,
    image: service_translation,
    content: "feature_insurance_service_p",
  },
]

const ServiceCard = ({index, item, activeIndex, setActiveIndex}) => {
  const { t } = useTranslation() 
  return (
    <li 
    onClick={() => setActiveIndex(index)}
    className={`flex flex-col lg:flex-row text-center items-center gap-2  shadow-sharp ${index === activeIndex ? "scale-105 bg-white" : "scale-100 bg-slate-200"} p-4 cursor-pointer transition-all duration-500 rounded-md`} key={index} 
    >
      <div className={`grid place-content-center text-${item.color} bg-${item.color}/25 border border-gray-400/25 rounded-lg text-2xl w-10 h-10`}>
        {<item.icon />}
      </div>
      <div className="flex flex-col">
        <h1 className="font-semibold capitalize">{t(item.title)}</h1>
        {/* <p>Lorem, ipsum dolor.</p> */}
      </div>
    </li>
  )
}

const ServiceContent = ({index, item, activeIndex}) => {
  const { t } = useTranslation() 

  return (
    <li className={`${index === activeIndex ? "block" : "hidden"} animate-menu-slideIn flex flex-col items-center gap-4`}>
      <div className="rounded-md overflow-hidden w-[calc(80%)] bg-red-500">
        <img 
          src={item.image} alt=""
          className="w-full object-cover" 
        />
      </div>
      <div className="flex flex-col items-center mt-4 gap-2">
        <h2 className="capitalize text-2xl font-bold">{t(item.title)}</h2>
        <p className="text-center">{t(item.content)}</p>
      </div>
      
    </li>
  )
}

const ServiceContents = () => {
  const [activeIndex, setActiveIndex] = React.useState(0)

  return (
    <div className="flex flex-col lg:flex-row justify-between gap-2">
      {/* service cards */}
      <ul className="grid grid-cols-3 grid-rows-2 lg:grid-cols-1 lg:grid-rows-6 lg:w-1/3 lg:shrink-0 gap-4">
        {service_items.map((item, index) => {
          return (
            <ServiceCard
              item={item}
              key={index}
              index={index}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          )
        })}
      </ul>
      {/* service content and image */}
      <ul className="flex flex-col justify-center gap-4 items-center p-8">
        {service_items.map((item, index) => {
          return (
            <ServiceContent 
              item={item}
              key={index}
              index={index}
              activeIndex={activeIndex}
            />
          )
        })}
      </ul>
    </div>
  )
}


const FeatureServiceHub = ({ id, isDark , background }) => {

  const { t } = useTranslation() 

  return (
    <Section id={id} isDark={isDark} background={background} >
      <div className="mb-6">
        <h1 className="text-4xl font-bold mb-4 text-center">{t("feature_servicehub_h")}</h1>
        <p className="text-xl text-center">{t("feature_servicehub_p")}</p>
      </div>
      {<ServiceContents />}
    </Section>
  )
}

export default FeatureServiceHub