import React, { useContext } from "react"
import { LanguageContext } from "../../context/LanguageContext"

const Input = ({ label, placeholder, value, setValue, type = "text", id }) => {

  const { dir } = useContext(LanguageContext)

  return (

    <input
        id={id}
        dir={dir}
        className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-gray-700 focus:border-cred-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 placeholder:capitalize"
        name={label}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
  )
}
export default Input