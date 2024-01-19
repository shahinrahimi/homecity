import { Link } from "react-router-dom"
import { BrandPngLight } from "../../assets/img"
const Brand = () => {
  return (
    <Link
      to="/"
      className="text-3xl uppercase mr-2 cursor-pointer font-brand flex justify-center lg:justify-start  items-center"
    >
      <div className="w-[calc(125px)]">
        <img src={BrandPngLight} alt="" />
      </div>
      
    </Link>
  )
}
export default Brand