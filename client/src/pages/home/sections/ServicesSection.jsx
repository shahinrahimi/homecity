import React from "react"
import { IoIosSchool } from "react-icons/io"
import { GiPassport } from "react-icons/gi"
import { BiSolidBank } from "react-icons/bi"
import { BsCurrencyExchange } from "react-icons/bs"
import { MdRealEstateAgent, MdHealthAndSafety } from "react-icons/md"
import { AiOutlineGlobal } from "react-icons/ai"
import { GoLaw } from "react-icons/go"
import { FaHome } from "react-icons/fa"
import { Simplify, Section } from "../../../components"
import {
  service_education,
  service_exchange,
  service_immigration,
  service_insurance,
  service_law,
  service_realestate,
  service_translation
} from "../../../assets/img"

const service_items = [
  {
    title: "education service",
    icon: IoIosSchool,
    image: service_education,
    content: "Our education services connect you with top-tier institutions in Turkey, providing tailored programs for a seamless academic journey.",
    color: "c-blue-500",
  },
  {
    title: "exchange service",
    icon: BsCurrencyExchange,
    image: service_exchange,
    content: "Elevate your financial journey in Turkey with our services, facilitating the creation of bank accounts and currency exchange for a smooth transition.",
    color: "c-yellow-500",
  },
  {
    title: "immigration service",
    icon: GiPassport,
    image: service_immigration,
    content: "Navigate immigration effortlessly with our comprehensive services, offering expert guidance on visas, permits, and residency for a stress-free transition.",
    color: "c-red-400",
  },

  {
    title: "insurance service",
    icon: MdHealthAndSafety,
    image: service_insurance,
    content: "Safeguard your well-being with our tailored insurance services, covering health, travel, and property to ensure worry-free exploration of Turkey.",
    color: "c-green-500",
  },
  {
    title: "law service",
    icon: GoLaw,
    image: service_law,
    content: "Our legal services provide expert advice and support, ensuring your rights and interests are protected throughout your stay in Turkey.",
    color: "c-black-500",
  },
  {
    title: "translation service",
    icon: AiOutlineGlobal,
    image: service_translation,
    content: "Break down language barriers with our translation services, offering accurate document translations and interpretations for seamless communication in Turkey.",
    color: "fuchsia-500",
  },
]


const serveces = service_items.map((item, index) => {
  const textClass = `text-${item.color}`
  const bgClass = `bg-${item.color}`
  const shadowClass = `shadow-${item.color}/50`
  return (
    <li 
      className="" 
      key={index}
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay={`${index * 100}`}
      data-aos-once="true"
    >
      {/* content-1 */}
      <div className="">
        <div className="w-full h-full grid place-content-center p-7">
          <h1 className="text-center grid place-content-center text-6xl mb-4">
            <item.icon className={`${textClass}`}/>
          </h1>
          <h2 className="text-center text-2xl font-bold capitalize whitespace-nowrap">
            {item.title}
          </h2>        
        </div>
      </div>

      

      {/* image */}

      <div className={`relative group h-[calc(300px)] overflow-hidden rounded-lg shadow-xl ${shadowClass}`}>
        {/* image and filter */}
        <div className={`absolute top-0 left-0 w-full h-full after:absolute after:h-full after:w-full group-hover:after:${bgClass}`}>
            
            <img src={item.image} alt={item.name}
              className="absolute top-0 left-0  object-cover bg-no-repeat bg-center h-full w-full  group-hover:scale-125 transition-all group-hover:blur-sm group-hover:grayscale"
            />
            
        </div>

        {/* image content */}
        <div className="absolute h-full grid place-content-center translate-y-full transition-all duration-500 group-hover:translate-y-0 p-4">
          <div className={`absolute top-0 left-0 w-full h-full ${bgClass} opacity-25`}></div>
          <p className="text-center text-2xl font-bold text-black">{item.content}</p>
        </div>
        
      </div>
           
      
    </li>
  )
})

const services2 = service_items.map((item, index) => {
  return (
    <li className="flex items-center gap-2 bg-white shadow-sharp p-4 cursor-pointer" key={index} >
      <div className={`grid place-content-center text-${item.color} bg-${item.color}/25 border border-gray-400/25 rounded-lg text-2xl w-10 h-10`}>
        {<item.icon />}
      </div>
      <div className="flex flex-col">
        <h1 className="font-semibold capitalize">{item.title}</h1>
        <p>Lorem, ipsum dolor.</p>
      </div>
    </li>
  )
})

const ServiceCard = ({index, item, activeIndex, setActiveIndex}) => {
  return (
    <li 
    onClick={() => setActiveIndex(index)}
    className={`flex flex-col lg:flex-row text-center items-center gap-2  shadow-sharp ${index === activeIndex ? "scale-105 bg-white" : "scale-100 bg-slate-200"} p-4 cursor-pointer transition-all duration-500 rounded-md`} key={index} 
    >
      <div className={`grid place-content-center text-${item.color} bg-${item.color}/25 border border-gray-400/25 rounded-lg text-2xl w-10 h-10`}>
        {<item.icon />}
      </div>
      <div className="flex flex-col">
        <h1 className="font-semibold capitalize">{item.title}</h1>
        {/* <p>Lorem, ipsum dolor.</p> */}
      </div>
    </li>
  )
}

const ServiceContent = ({index, item, activeIndex}) => {
  return (
    <li className={`${index === activeIndex ? "block" : "hidden"} animate-menu-slideIn flex flex-col items-center gap-4`}>
      <div className="rounded-md overflow-hidden w-[calc(80%)] bg-red-500">
        <img 
          src={item.image} alt=""
          className="w-full object-cover" 
        />
      </div>
      <div className="flex flex-col items-center mt-4 gap-2">
        <h2 className="capitalize text-2xl font-bold">{item.title}</h2>
        <p className="text-center">{item.content}</p>
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

const ServicesSection = ({ id, isDark , background }) => {

  return (
    <Section id={id} isDark={false} background={background} >
      <div className="mb-6">
        <h1 className="text-4xl font-bold mb-4 text-center">Turkish Support Hub</h1>

        <p className="text-xl text-center">Experience Turkey with Ease: Your one-stop solution for education, exchange, immigration, insurance, law, real estate, and translation services.</p>

      </div>
      

      {<ServiceContents />}
    </Section>
  )
}

export default ServicesSection