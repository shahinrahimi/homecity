import React, { useContext } from "react"
import { LanguageContext } from "../../context/LanguageContext"

const TextArea = ({ label, placeholder, value, setValue, id }) => {

  const { dir } = useContext(LanguageContext)
  return (
    <div className="flex flex-col mb-6">
      <label
        dir={dir}
        htmlFor={label}
        className="w-full text-sm font-semibold text-gray-500 capitalize mb-2 px-1"
      >{label}</label>
      <textarea
        id={id}
        dir={dir}
        className="w-full h-60 rounded-lg border border-gray-200 px-3 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
        name={label}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  )
}
export default TextArea