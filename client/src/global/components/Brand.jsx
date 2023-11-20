import { Link } from "react-router-dom"
const Brand = () => {
  return (
    <Link
      to="/"
      className="text-3xl uppercase mr-2 cursor-pointer font-brand"
    >
      home<span className="uppercase text-c-red-500 ">city</span>
    </Link>
  )
}
export default Brand