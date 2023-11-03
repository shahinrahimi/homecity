import { useContext } from "react"
import { LanguageContext } from "../../context/LanguageContext"

const DateFormat = ({ date }) => {
  const { lang } = useContext(LanguageContext)
  let dateFormat, options

  options = { year: 'numeric', month: 'long', day: 'numeric' };

  switch (lang) {
    case "fa":
      dateFormat = new Date(date).toLocaleDateString("fa-ir", options)
      break;
    case "ar":
      dateFormat = new Date(date).toLocaleDateString("ar-sa", options)
      break
    case "tr":
      dateFormat = new Date(date).toLocaleDateString("tr", options)
      break
    default:
      dateFormat = new Date(date).toLocaleDateString("en-US", options)
      break;
  }

  return (
    <>
      {dateFormat}
    </>
  )
}
export default DateFormat