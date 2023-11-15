import React from "react";


export const MenuContext = React.createContext();

export const MenuProvider = ({ children }) => {

  const [isOpen, setIsOpen] = React.useState(false)

  // hidden scrolling after menu open
  React.useLayoutEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden hidden";
    }
    if (!isOpen) {
      document.body.style.overflow = "hidden visible";
    }
  }, [isOpen])


  const toggle = () => setIsOpen(isOpen => !isOpen)
  return (
    <MenuContext.Provider value={{ isOpen, toggle }}>
      {children}
    </MenuContext.Provider>
  )
}

