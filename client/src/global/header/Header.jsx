import React from "react"
import { MenuContext } from "../../context/MenuContext"
import { Link } from "react-router-dom"
import { BiSearch } from "react-icons/bi"
import { NAVLINKS } from "../../constants/navLinks"
import { IoLogOutOutline } from "react-icons/io5";
import { Brand, NavBar, SearchBox, HamburgerMenu, LanguageDropdown } from "../components"
import usePathLocation from "../../hooks/usePathLocation"
import useScreenSize from "../../hooks/useScreenSize"
import AdminController from "../components/AdminController"

const Header = () => {
  const { rootPath } = usePathLocation()
  const { isOpen, toggle } = React.useContext(MenuContext)
  const {width, height} = useScreenSize()
  
  let content
  if (rootPath === "admin") {
    content = (
      <div className="flex flex-row container mx-auto px-8 justify-between items-center ">
        <Brand />
        <AdminController />
      </div>
    )
  } else if (width >= 1024) {
    content = (
      <div className="flex flex-row container mx-auto px-8 justify-between items-center ">
        <div className="basis-1/3 justify-start">
          <Brand />
        </div>
        <div className="basis-1/3">
          <NavBar isOpen={isOpen} navItems={NAVLINKS} />
        </div>
        <div className="basis-1/3 flex flex-row justify-end items-center">
          <button className="cursor-pointer text-c-white-700 hover:text-c-white-200 transition-colors p-2">
            <BiSearch className="" />
          </button>

          {/* language */}
          <LanguageDropdown />

          {/* hamburger Menu */}
          <HamburgerMenu isOpen={isOpen} toggle={toggle} />
        </div>
      </div>
    )
  } else {
    content = (
      <div className="flex flex-row container mx-auto px-8 justify-between items-center text-2xl ">
        <div className="basis-1/3 justify-start">
          <LanguageDropdown />
        </div>
        <div className="basis-1/3">
          <Brand />
        </div>
        <div className="basis-1/3 flex flex-row justify-end items-center">
          <button className="cursor-pointer text-c-white-700 hover:text-c-white-200 transition-colors p-2">
            <BiSearch className="" />
          </button>
          {/* hamburger Menu */}
          <HamburgerMenu isOpen={isOpen} toggle={toggle} />
        </div>
      </div>
    )
  }

  return (
    <header id="header" className="fixed flex p-2 w-screen z-50 h-30 bg-c-black-700 text-c-white-500 shadow-lg shadow-c-black-600 animate-landing-slow">
      {content}
    </header>
  )
}
export default Header