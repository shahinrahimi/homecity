import React from 'react'

import { LanguageContext } from "../../context/LanguageContext"

const InputBase = () => {
    const { dir } = useContext(LanguageContext)

    return (
      <div className="flex flex-col mb-6">
        <label
          dir={dir}
          htmlFor={label}
          className="w-full text-sm font-semibold text-gray-500 capitalize mb-2 px-1"
        >{label}</label>
        <input
          dir={dir}
          className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 placeholder:capitalize"
          name={label}
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    )
}

export default InputBase