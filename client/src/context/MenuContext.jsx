import React, { useState, createContext, useLayoutEffect } from "react";


export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {

  const [isOpen, setIsOpen] = useState(false)

  // hidden scrolling after menu open
  useLayoutEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    if (!isOpen) {
      document.body.style.overflow = "visible";
    }
  }, [isOpen])


  const toggle = () => setIsOpen(isOpen => !isOpen)
  return (
    <MenuContext.Provider value={{ isOpen, toggle }}>
      {children}
    </MenuContext.Provider>
  )
}

