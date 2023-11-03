const Button = ({ text, icon, color, hoverColor, onClick }) => {
  let defaultColor = "bg-slate-400"
  let defaultHover = "hover:bg-slate-500"

  if (color) {
    defaultColor = color
  }

  if (hoverColor) {
    defaultHover = hoverColor
  }

  return (
    // <button
    //   className={`flex flex-row items-center gap-1 capitalize px-3 py-2 font-bold text-gray-100 transition-colors duration-300 transform rounded cursor-pointer ${defaultColor} ${defaultHover} text-center align-middle`}
    //   onClick={onClick}
    // >
    //   {text}
    //   {/* {text ? <span className="grid place-content-center text">{text}</span> : ""} */}
    //   {icon ? <span>{icon}</span> : ""}
    // </button>
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {text}

    </button>
  )
}
export default Button