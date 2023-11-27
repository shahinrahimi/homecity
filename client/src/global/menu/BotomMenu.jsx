import React from 'react'
import { Icons } from "../../icons"
import { Link } from 'react-router-dom'
import usePathLocation from '../../hooks/usePathLocation'

const items = [
    {
        name:"Prices",
        link:"prices",
        icon:Icons.PricesIcon
    },
    {
        name:"Franchises",
        link:"franchises",
        icon:Icons.FranchisesIcon
    },
    {
        name:"home",
        link:"",
        icon:Icons.HomeIcon
    },
    {
        name:"Realestate",
        link:"realestates",
        icon:Icons.RealStatesIcon
    },
    {
        name:"help",
        link:"contactus",
        icon:Icons.HelpIcon
    }
]

const BotomMenu = () => {
    const { rootPath } = usePathLocation()
  return (
    <section className='bg-white/95 text-c-black-100 h-16 fixed bottom-0 left-0 w-full z-20 lg:hidden shadow-sharp' >
        <ul className='flex justify-around h-full items-center'>
            {items.map((item, index) => {
                return (
                    <li key={index}>
                        <Link
                            to={`/${item.link}`}
                            className={`flex flex-col justify-center items-center text-sm cursor-pointer hover:text-black focus:text-c-blue-600 transition-colors ${rootPath === item.link ? "text-c-blue-600" : ""}`}
                        >
                            <item.icon className=" text-2xl" />
                            <span>{item.name}</span>

                        </Link>
                    </li>
                )
            })}
        </ul>
    </section>
  )
}

export default BotomMenu