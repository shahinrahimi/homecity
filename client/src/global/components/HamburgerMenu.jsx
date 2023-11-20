import React, { useContext } from "react"
import { MenuContext } from "../../context/MenuContext"

const HamburgerMenu = () => {
  const { isOpen, toggle } = useContext(MenuContext)
  return (
    <button className={`group flex flex-col cursor-pointer p-2 ${isOpen ? 'block' : 'lg:hidden'}`}
      onClick={toggle}
    >
      {/* <span className="group-hover:bg-slate-50 transition-color block m-0.5 bg-slate-400 h-1 w-8 after:content-[''] rounded-md animate-menu-top-active"></span>
            <span className="group-hover:bg-slate-50 transition-color block m-0.5 bg-slate-400 h-1 w-8 after:content-[''] rounded-md no animate-menu-middle-active"></span>
            <span className="group-hover:bg-slate-50 transition-color block m-0.5 bg-slate-400 h-1 w-8 after:content-[''] rounded-md animate-menu-bot-active"></span> */}

      <span className={`group-hover:bg-c-white-100 transition-color duration-1000 block m-0.5 bg-c-white-800 h-1 w-8  rounded-md ${isOpen ? 'animate-menu-top-active ' : 'animate-menu-top-disable'} relative`}></span>
      <span className={`group-hover:bg-c-white-100 transition-color duration-1000 block m-0.5 bg-c-white-800  h-1 w-8 rounded-md ${isOpen ? 'animate-menu-middle-active ' : 'animate-menu-middle-disable'} relative`}></span>
      <span className={`group-hover:bg-c-white-100 transition-color duration-1000 block m-0.5 bg-c-white-800  h-1 w-8 rounded-md ${isOpen ? 'animate-menu-bot-active ' : 'animate-menu-bot-disable'} relative`}></span>
    </button>
  )
}
export default HamburgerMenu