import React, { useContext } from "react"
import { MenuContext } from "../../context/MenuContext"
import { SearchContext } from "../../context/SearchContext"
import { LanguageDropdown } from "./elements"
import { BiSearch } from "react-icons/bi"

import { NAVLINKS } from "../../constants/navLinks"

import { Brand, NavBar, SearchBox, HamburgerMenu } from "./elements"

const Header = () => {

  const { isOpen, toggle } = useContext(MenuContext)
  const { isOpen: isSearchOpen, toggle: toggleSearch } = useContext(SearchContext)

  return (
    <header className="fixed flex p-2 w-screen z-20 h-20 bg-c-black-700 text-c-white-500 shadow-lg shadow-c-black-600 animate-landing-slow">
      <div className="flex flex-row container mx-auto px-8 justify-between items-center ">
        {/* brand  */}
        <Brand />

        {/* navbar */}
        <NavBar isOpen={isOpen} navItems={NAVLINKS} />

        {/* controls */}
        <div className="flex flex-row justify-end items-center gap-2 m-1">
          <button className="cursor-pointer text-c-white-700 hover:text-c-white-200 transition-colors p-2">
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