import React from 'react'
import { useTagStore } from '../../../app/store'
import { RxCross2 as CrossIcon } from "react-icons/rx";
import { FaPlus as PlusIcon } from "react-icons/fa6";


const TagList = () => {
    const tags = useTagStore.getState().tags

    const [activeTagIds, setActiveTagIds] = React.useState([])
    const [inputValue, setInputValue] = React.useState("")
    const [focused, setFocused] = React.useState(false)
    const onFocused = () => setFocused(true)
    const onBlur = () => setFocused(false)
    const searchInput = React.useRef(null)

    const addTagToActiveList = (id) => {
      setActiveTagIds([...activeTagIds, id])
    }

    const removeTagFromActiveList = (id) => {
      const newArray = activeTagIds.filter(item => item !== id)
      setActiveTagIds(newArray)
    }

    const tagsList = tags.map((t, index) => {
      const isActive = activeTagIds.includes(t.id)
      return (
        <li 
          key={index}
          className={`flex items-center gap-1 cursor-pointer hover:bg-blue-600/80 transition-all bg-blue-500/80 px-2 py-1 text-white text-sm font-semibold capitalize  ${isActive  ? "block" : "hidden" }`}
          onClick={() => removeTagFromActiveList(t.id)}
          >
          <p>
            {t.en}
          </p>
          <p>
            <CrossIcon />
          </p>
          
        </li>
      )
    })

    const tagsList2 = tags.map((t, index) => {
      const isActive = activeTagIds.includes(t.id)
      const isShow = !inputValue ? true : t.en.toLowerCase().includes(inputValue.toLowerCase())
      return (
        <li 
          key={index}
          className={`flex items-center justify-between gap-1 cursor-pointer  hover:bg-gray-600/80 transition-all bg-gray-500/80 px-2 py-1 text-white text-sm font-semibold capitalize ${!isActive && isShow ? "block" : "hidden" }`}
          onClick={() => addTagToActiveList(t.id)}
        >
          <p>
            {t.en} <span>( {t.fa} )</span>
          </p>
          <p>
            <PlusIcon />
          </p>
        </li>
      )
    }) 

  return (
    <main className='min-h-screen bg-gray-400'>
        <div className="">
          <ul className="flex gap-1 bg-white border-red-300 border flex-wrap p-2 items-center">
            {tagsList}
            <li className='shrink grow'>
              <input 
                ref={searchInput}
                value={inputValue}
                onFocus={onFocused}
                onBlur={onBlur}
                onChange={(e) => setInputValue(e.target.value)}
                type="text" 
                className='outline-none relative w-full'
              />
              <ul className={`absolute flex flex-col gap-1 p-2 rounded-sm shadow-sharp bg-green-500/25 translate-y-4 ${focused ? "block" : "animate-tag-input"}`}>
                {tagsList2}
                <li
                  className='cursor-pointer  hover:bg-green-700/80 transition-all bg-green-600/80 px-2 py-1 text-white text-sm font-semibold capitalize rounded-md text-center mt-2'
                >
                  Add new tag
                </li>
              </ul>
            </li>
            
          </ul>
        </div>
    </main>
  )
}

export default TagList