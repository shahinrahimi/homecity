import React, { useContext } from "react"
import { MenuContext } from "../../context/MenuContext"
import { NAVLINKS } from "../../constants/navLinks"
import useRootPath from "../../hooks/useRootPath"
import { Link } from "react-router-dom"
const MenuPanel = () => {
  const { isOpen, toggle } = useContext(MenuContext)
  const { rootPath } = useRootPath()

  const navItems = NAVLINKS.map(item => {
    return (
      <li
        key={item.name}
        className={` text-slate-600 text-2xl hover:text-red-600 uppercase hover:mb-3 hover:mt-2 transition-all duration-1000 font-bold opacity-0 ${isOpen ? 'animate-menu-item-showUp' : 'animate-menu-item-showOff'}`}
      >

        <Link
          onClick={toggle}
          key={item.name}
          to={item.path}
        >
          <div className="bg-transparent relative group overflow-hidden">
            <div>
              <span className="opacity-0">{'c'}</span>
              {item.name}
              <span className="opacity-0">{'c'}</span>
            </div>
            <div className="w-full h-full group-hover:after:w-full group-hover:before:w-full after:absolute before:absolute after:h-1/2 before:h-1/2 after:top-0 before:bottom-0 after:left-0 before:left-0 after:bg-red-600 before:bg-red-600 after:translate-x-[calc(100%-0.25rem)] before:translate-x-[calc(-100%+0.25rem)] group-hover:after:translate-x-[calc(-100%+0.25rem)] after:duration-500 before:duration-500 group-hover:before:translate-x-[calc(100%-0.25rem)] after:transition-transform group-hover:after:animate-menu-item-blink  before:transition-transform group-hover:before:animate-menu-item-blink  after:-z-10 before:-z-10"></div>
          </div>
        </Link>
      </li>
    )
  })



  return (
    <div
      className={`fixed w-screen h-screen ${isOpen ? 'translate-x-[calc(0)]' : 'translate-x-[calc(-100%)] delay-500'} transition-transform z-10`}
    >
      <div
        className={`absolute left-0 top-0 w-full h-full after:w-full before:w-full after:absolute before:absolute after:h-1/2 before:h-1/2 after:top-0 before:bottom-0 after:left-0 before:left-0 after:bg-slate-800 before:bg-slate-800 ${isOpen ? 'after:translate-x-[calc(0)]' : 'after:translate-x-[calc(-100%)]'} ${isOpen ? 'before:translate-x-[calc(0)] before:delay-75' : 'before:translate-x-[calc(-100%)]'} after:transition-transform   before:transition-transform after:duration-500 before:duration-500`}
      ></div>

      <div className="grid place-content-center w-full h-full">
        <ul className="flex flex-col justify-center items-center">
          {navItems}
        </ul>
      </div>
    </div>

  )
}

export default MenuPanel