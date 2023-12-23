
import React from 'react'

const Button = ({ text, href, isDark=false}) => {

  let borderColor, textColor
  if (!isDark){
    borderColor = "border-white"
    textColor = "text-white"
  } else {
    borderColor = "border-black"
    textColor = "text-back"
  }
  return (
    <a
        className={`capitalize bg-transparent px-4 py-2 lg:px-8 lg:py-4 lg:text-lg  self-start lg:self-center mt-10 border-4 transition-colors duration-200 font-bold cursor-pointer ${textColor + borderColor}`}
        href={href}
        >
        {text}
    </a>
  )
}


export default Button
