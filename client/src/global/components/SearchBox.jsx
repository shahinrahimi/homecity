import { BiSearch } from "react-icons/bi"

const SearchBox = () => {
  return (
    <div className="px-4 flex flex-row justify-center items-center rounded-full bg-slate-200 text-slate-900">
      <BiSearch
        className="cursor-pointer hover:text-slate-800"
      />
      <input
        className="px-2 py-1 bg-slate-200 outline-none"
      />
    </div>
  )
}
export default SearchBox