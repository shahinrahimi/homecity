import { useLocation } from "react-router-dom"

const usePathLocation = () => {
  const location = useLocation()
  // current main
  let pathArray = location.pathname.split("/")
  let rootPath = pathArray[1]
  let leafPath = pathArray[pathArray.length + 1]

  return { rootPath, leafPath }
}

export default usePathLocation