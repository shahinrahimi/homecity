import React from "react"
import { Link } from "react-router-dom"
import usePathLocation from "../../hooks/usePathLocation"
import { LanguageContext } from "../../context/LanguageContext"
import { useTranslation } from "react-i18next"

const NavBar = ({ navItems, isOpen }) => {
  const { dir, lang } = React.useContext(LanguageContext)
  const { t } = useTranslation()
  const { rootPath } = usePathLocation()

  const navListElement = navItems.map(item => {
    return (
      <li key={item.name}>
        <Link
          className={`px-2 py-2 capitalize font-semibold  border-b-4 border-transparent hover:border-c-red-500 transition-all whitespace-nowrap ${item.path === ("/" + rootPath) ? "text-c-red-500" : "text-c-white-800 hover:text-slate-200"}`}
          to={item.path}
        >
          {t(item.name)}
        </Link>
      </li>
    )
  })

  if (!isOpen) {
    return (
      <nav dir={dir} className={`hidden lg:block ${lang === "fa" || lang === "ar" ? "vazir" : ""}`}>
        <ul className="flex flex-row gap-3 justify-end">{navListElement}</ul>
      </nav>
    )
  }

  return <></>
}
export default NavBar