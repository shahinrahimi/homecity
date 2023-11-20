import { Link } from "react-router-dom"
import useRootPath from "../../hooks/useRootPath"

const NavBar = ({ navItems, isOpen }) => {
  const { rootPath } = useRootPath()

  const navListElement = navItems.map(item => {
    return (
      <li key={item.name}>
        <Link
          className={`px-2 py-2 capitalize font-semibold  border-b-4 border-transparent hover:border-c-red-500 transition-all whitespace-nowrap ${item.path === rootPath ? "text-c-red-500" : "text-c-white-800 hover:text-slate-200"}`}
          to={item.path}
        >
          {item.name}
        </Link>
      </li>
    )
  })



  if (!isOpen) {
    return (
      <nav className="hidden lg:block">
        <ul className="flex flex-row gap-3 justify-end">{navListElement}</ul>
      </nav>
    )
  }

  return <></>
}
export default NavBar