import React, { useState, createContext } from "react";

export const SearchContext = createContext()

export const SearchProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(prev => !prev)
  return (
    <SearchContext.Provider value={{ isOpen, toggle }}>
      {children}
    </SearchContext.Provider>
  )
}