import { Link } from "react-router-dom"
import useRootPath from "../../../hooks/useRootPath"

const NavBar = ({ navItems, isOpen }) => {
  const { rootPath } = useRootPath()

  const navListElement = navItems.map(item => {
    return (
      <li key={item.name}>
        <Link
          className={`px-2 py-2 capitalize font-semibold  border-b-2 border-transparent hover:text-slate-200  hover:border-red-600 transition-colors whitespace-nowrap ${item.path === rootPath ? " text-red-700" : "text-slate-400"}`}
          to={item.path}
        >
          {item.name}
        </Link>
      </li>
    )
  })

  const navListElement2 = navItems.map(item => {
    return (
      <li key={item.name}>
        <a
          className={`px-2 py-2 capitalize font-semibold  border-b-2 border-transparent hover:text-slate-200  hover:border-red-600 transition-colors whitespace-nowrap ${item.path === rootPath ? " text-red-700" : "text-slate-400"}`}
          href={`#${item.name}`}
        >
          {item.name}
        </a>
      </li>
    )
  })

  if (!isOpen) {
    return (
      <nav className="hidden lg:block">
        <ul className="flex flex-row gap-3 justify-end">{navListElement2}</ul>
      </nav>
    )
  }

  return <></>
}
export default NavBar