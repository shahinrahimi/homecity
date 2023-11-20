import React from "react"
import { Link } from "react-router-dom"
import { NAVLINKS } from "../../constants/navLinks"
import { Input } from "../../components"
import { SmoothScrollingContext } from "../../context/SmoothScrollingContext"
import { Socials, Brand } from "../components"

const Footer = () => {

  const year = new Date().getFullYear()
  const { scrollToSection } = React.useContext(SmoothScrollingContext)


  return (
    <footer className="relative px-10 pt-10 pb-5 lg:px-20 lg:pt-20  w-screen bg-c-black-800 text-c-white-500 justify-center items-center">
      <div className="container mx-auto">
        {/* footer main */}
        <Brand />

        <div className="flex flex-col items-start md:flex-row justify-between md:items-center border-slate-500 mb-4 gap-8">

          {/* Address and Contacts */}
          <div className="flex flex-col h-full gap-3 justify-between">
            {/* address */}
            <address className="flex flex-col">
              <h3>Address</h3>
              <p>Universite Mh, Smaple Sk, N1, D200 ,Alura Tower, Avcilar/Turkey </p>
            </address>
            
            {/* contact */}
            <div className="flex flex-col">
              <h3>Contact</h3>
              <p>info@homecity@com.tr</p>
            </div>

            {/* socials */}
            <Socials 
              parentClassName={"flex gap-2"}
              childClassName={"text-c-white-400 hover:text-c-white-100 text-2xl"}
            />

          </div>
          
          {/* site maps */}
          <div className="">
            <h1 className="font-bold mb-2">Links</h1>
            <ul
              className="flex flex-row md:flex-col gap-2 "
            >
              {NAVLINKS.map(item => {
                return (
                  <li
                    className="capitalize hover:text-c-red-500 transition-all duration-300"
                    key={item.name}
                  ><Link 
                    to={item.path}
                    onClick={() => scrollToSection(item.name)}
                    className="whitespace-nowrap"
                  >{item.name}</Link></li>
                )
              })}
            </ul>
          </div>
          

          {/* subscribe */}
          <div className="">
            <h1 className="font-bold mb-2">Subscribe</h1>
            <div className="flex justify-center items-center gap-2 mb-2">
              <Input placeholder={"Enter your mail"}/>
              <a
                className="bg-transparent px-4 py-2 hover:bg-red-600/75 self-start  border-slate-700 border-4 transition-colors duration-200 font-bold hover:text-white" 
                href="#projects"
              >
                Subscribe
              </a>
            </div>
            <p className="text-sm">by subscribing, you agree to our Privacy Policy</p>
          </div>

        </div>

        {/* footer developer */}
        <div className="text-sm mx-auto flex justify-between items-center  border-t-2 border-opacity-30 pt-2 border-red-300">
          <ul className="hidden sm:flex gap-2">
            <li className="whitespace-nowrap text-c-white-400 hover:text-c-white-100 transition-all"><a href="">Privacy Policy</a></li>
            <li className="whitespace-nowrap text-c-white-400 hover:text-c-white-100 transition-all"><a href="">Term of Service</a></li>
            <li className="whitespace-nowrap text-c-white-400 hover:text-c-white-100 transition-all"><a href="">Cookie Policy</a></li>
          </ul>
          <p>&copy; {year} <a href="">Homecity</a>. All rights reseved</p>
        </div>

      </div>
      
    
    </footer>
  )
}
export default Footer