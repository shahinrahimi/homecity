import { IoIosSchool } from "react-icons/io"
import { GiPassport } from "react-icons/gi"
import { BiSolidBank } from "react-icons/bi"
import { BsCurrencyExchange } from "react-icons/bs"
import { MdRealEstateAgent, MdHealthAndSafety } from "react-icons/md"
import { AiOutlineGlobal } from "react-icons/ai"
import { GoLaw } from "react-icons/go"
import { FaHome } from "react-icons/fa"

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
  { order: 0, icon: IoIosSchool, name: "education service", image: service_education },
  { order: 1, icon: BsCurrencyExchange, name: "exchange service", image: service_exchange },
  { order: 2, icon: GiPassport, name: "immigration service", image: service_immigration },
  { order: 3, icon: MdHealthAndSafety, name: "insurance service", image: service_insurance },
  { order: 4, icon: GoLaw, name: "law service", image: service_law },
  { order: 5, icon: FaHome, name: "real estate service", image: service_realestate },
  { order: 6, icon: AiOutlineGlobal, name: "translation service", image: service_translation }
]

const Services = () => {
  const serviceElements = service_items.map((item, index) => {
    let col = 'col-span-1'
    let row = 'row-span-1'
    if (index === 0) {
      col = 'col-span-2'
    }

    if (index === 4) {
      row = 'row-span-2'
    }
    return (
      <a href="" className={`group ${col} ${row} bg-transparent text-white  relative grid place-content-center overflow-hidden  rounded-2xl h-40 hover:scale-105  transition-transform p-2 text-lg font-bold`} key={item.name.replace(" ", "_")}>
        <h1 className="text-center text-slate-400 group-hover:scale-150 grid place-content-center transition-all group-hover:text-slate-50 mb-3"><item.icon /></h1>
        <p className="text-center text-xs capitalize">{item.name}</p>
        <div className="absolute top-0 left-0 -z-20  w-full h-full after:absolute after:h-full after:w-full after:bg-slate-900/[.8]">
          <img src={item.image} alt={item.name}
            className="absolute top-0 left-0 -z-10 object-cover bg-no-repeat bg-center h-full scale-105 grayscale blur-sm group-hover:scale-125 transition-all group-hover:grayscale-0 group-hover:blur-0"
          />
        </div>
      </a>
    )
  })

  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-4">
      {serviceElements}
    </div>
  )
}


export default Services