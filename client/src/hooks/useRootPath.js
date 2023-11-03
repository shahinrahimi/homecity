import { useLocation } from "react-router-dom"

const useRootPath = () => {
  const location = useLocation()
  // current main
  let rootPath = location.pathname.split("/")[1]

  return { rootPath: "/" + rootPath }
}

export default useRootPath