import React from 'react'

export const SmoothScrollingContext = React.createContext()

export const SmoothScrollingProvider = ({ children }) => {

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            console.log(section)
          section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    
    return (
        <SmoothScrollingContext.Provider value={{ scrollToSection }}>
            {children}
        </SmoothScrollingContext.Provider>
    )

    
}