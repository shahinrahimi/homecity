import React from "react"
import { MenuContext } from "../../context/MenuContext"
import { SearchContext } from "../../context/SearchContext"
import { useAuthStore } from "../../app/store"
import { UserContext } from "../../context/UserContext"
import { useNavigate } from "react-router-dom"

import { LanguageDropdown } from "../components"
import { BiSearch } from "react-icons/bi"

import { NAVLINKS } from "../../constants/navLinks"
import { IoLogOutOutline } from "react-icons/io5";

import { Brand, NavBar, SearchBox, HamburgerMenu } from "../components"
import usePathLocation from "../../hooks/usePathLocation"
import { logout } from "../../api"
import { useMutation } from "react-query"

const Header = () => {
  const navigate = useNavigate()
  const { rootPath } = usePathLocation()

  const { setToken } = useAuthStore()
  const { userInfo } = React.useContext(UserContext)
  const { isOpen, toggle } = React.useContext(MenuContext)
  // const { isOpen: isSearchOpen, toggle: toggleSearch } = useContext(SearchContext)
  
  const mutation = useMutation(logout)

  const {
    isIdle,
    isLoading,
    isSuccess,
    isError,
    error,
    data,
    mutate: logoutMutation
  } = mutation

  React.useEffect(() => {
    if (isSuccess){
      setToken(null)
      navigate("/")
    }
  },[isSuccess])

  return (
    <header id="header" className="fixed flex p-2 w-screen z-50 h-20 bg-c-black-700 text-c-white-500 shadow-lg shadow-c-black-600 animate-landing-slow">
      <div className="flex flex-row container mx-auto px-8 justify-between items-center ">
        {/* brand  */}
        <Brand />

        {/* navbar */}
        {rootPath === "admin" 
          ? ""
          : <NavBar isOpen={isOpen} navItems={NAVLINKS} />
        }

        {/* client controls */}
        {rootPath === "admin"
            ? (
              <div className="flex flex-row justify-end items-center gap-2 m-1 text-xl text-white">
                {userInfo 
                  ? 
                    <>
                      <div>{userInfo?.username}</div>
                      <IoLogOutOutline
                        className="text-2xl text-white/70 cursor-pointer hover:text-white transition-all" 
                        onClick={() => logoutMutation()}/>
                    </>
                  : ""}
              </div>
            )
            : (
              <div className="flex flex-row justify-end items-center gap-2 m-1">
          
                <button className="cursor-pointer text-c-white-700 hover:text-c-white-200 transition-colors p-2">
                  <BiSearch className="" />
                </button>

                {/* language */}
                <LanguageDropdown />

                {/* hamburger Menu */}
                <HamburgerMenu isOpen={isOpen} toggle={toggle} />

              </div>
            )
        }

        
        
      </div>

    </header>
  )
}
export default Header