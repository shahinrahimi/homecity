import { IoIosSchool } from "react-icons/io"
import { GiPassport } from "react-icons/gi"
import { BiSolidBank } from "react-icons/bi"
import { BsCurrencyExchange } from "react-icons/bs"
import { MdRealEstateAgent, MdHealthAndSafety } from "react-icons/md"
import { AiOutlineGlobal } from "react-icons/ai"
import { GoLaw } from "react-icons/go"
import { FaHome } from "react-icons/fa"
import { Simplify } from "../../../components"
import {
  service_education,
  service_exchange,
  service_immigration,
  service_insurance,
  service_law,
  service_realestate,
  service_translation
} from "../../../assets/img"

const service_items2 = [
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
    color: "c-white-100",
  },
  {
    title: "translation service",
    icon: AiOutlineGlobal,
    image: service_translation,
    content: "Break down language barriers with our translation services, offering accurate document translations and interpretations for seamless communication in Turkey.",
    color: "pink-500"
  },
]


const serveces = service_items2.map((item, index) => {
  return (
    <li className="" key={index}>
      {/* content-1 */}
      <div className="">
        <div className="w-full h-full grid place-content-center p-7">
          <h1 className="text-center grid place-content-center text-6xl mb-4">
            <item.icon className={`text-${item.color}`}/>
          </h1>
          <h2 className="text-center text-2xl font-bold capitalize whitespace-nowrap">
            {item.title}
          </h2>        
        </div>
      </div>

      {/* image */}

      <div className={`relative group h-[calc(250px)] overflow-hidden rounded-lg shadow-2xl shadow-${item.color}`}>
        {/* image and filter */}
        <div className={`absolute top-0 left-0 w-full h-full after:absolute after:h-full after:w-full group-hover:after:bg-${item.color}/50`}>
            <img src={item.image} alt={item.name}
              className="absolute top-0 left-0  object-cover bg-no-repeat bg-center h-full w-full  group-hover:scale-125 transition-all group-hover:blur-sm group-hover:grayscale"
            />
        </div>

        {/* image content */}
        <div className="absolute h-full grid place-content-center translate-y-full transition-all duration-500 group-hover:translate-y-0 p-4">
          <p className="text-center text-lg font-bold text-slate-50">{item.content}</p>
        </div>
        
      </div>
           
      
    </li>
  )
})

const Services = () => {

  return (
    <>
      <h1 className="text-4xl font-bold mb-4 text-center">Turkish Support Hub</h1>
      <p className="text-xl text-center">Experience Turkey with Ease: Your one-stop solution for education, exchange, immigration, insurance, law, real estate, and translation services.</p>
      <ul className="grid grid-col-1 grid-row-6  md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-row-2 gap-10">
        {serveces}
      </ul>
    </>
    
  )
}


export default Services