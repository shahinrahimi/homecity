import React from 'react'
import { Icons } from "../../icons"


const items = [
    {
        name:"Prices",
        link:"",
        icon:Icons.PricesIcon
    },
    {
        name:"Franchises",
        link:"",
        icon:Icons.FranchisesIcon
    },
    {
        name:"home",
        link:"",
        icon:Icons.HomeIcon
    },
    {
        name:"Realestate",
        link:"",
        icon:Icons.RealStatesIcon
    },
    {
        name:"help",
        link:"",
        icon:Icons.HelpIcon
    }
]

const BotomMenu = () => {
  return (
    <section className='bg-white/95 text-c-black-100 h-16 fixed bottom-0 left-0 w-full z-20 lg:hidden shadow-sharp' >
        <ul className='flex justify-around h-full items-center'>
            {items.map((item, index) => {
                return (
                    <li key={index} className='flex flex-col justify-center items-center text-sm cursor-pointer hover:text-black transition-colors'>
                        <item.icon className=" text-2xl" />
                        <span>{item.name}</span>
                    </li>
                )
            })}
        </ul>
    </section>
  )
}

export default BotomMenu