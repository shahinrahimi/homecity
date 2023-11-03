import React, { useContext } from "react"
import { MenuContext } from "../../context/MenuContext"
import { SearchContext } from "../../context/SearchContext"
import { LanguageDropdown } from "../../components"
import { BiSearch } from "react-icons/bi"

import { NAVLINKS } from "../../constants/navLinks"

import { Brand, NavBar, SearchBox, HamburgerMenu } from "./elements"

const Header = () => {

  const { isOpen, toggle } = useContext(MenuContext)
  const { isOpen: isSearchOpen, toggle: toggleSearch } = useContext(SearchContext)

  return (
    <header className=" bg-slate-900 text-white z-20 h-18 shadow-2xl shadow-slate-900 fixed w-screen transition-transform animate-landing-slow">
      <div className="container mx-auto py-4 px-4 flex flex-row justify-between items-center">
        {/* brand  */}
        <Brand />

        {/* navbar */}
        <NavBar isOpen={isOpen} navItems={NAVLINKS} />

        {/* controls */}
        <div className="flex flex-row justify-end items-center gap-2 m-1">
          <button className="cursor-pointer text-slate-400 hover:text-slate-50 transition-colors p-2">
            <BiSearch className="" />
          </button>

          {/* language */}
          <LanguageDropdown />

          {/* hamburger Menu */}
          <HamburgerMenu isOpen={isOpen} toggle={toggle} />

        </div>
      </div>

    </header>
  )
}
export default Header