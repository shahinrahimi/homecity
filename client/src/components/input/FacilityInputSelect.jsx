import React from 'react'
import { useFacilityStore } from '../../app/store';
import { RxCross2 as CrossIcon } from "react-icons/rx";
import { FaPlus as PlusIcon } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const FacilityInputSelect = ({ selectedFacilityIds, setSelectedFacilityIds, className }) => {

    const facilities = useFacilityStore.getState().facilities

    const [inputValue, setInputValue] = React.useState("")
    const [focused, setFocused] = React.useState(false)
    const onFocused = () => setFocused(true)
    const onBlur = () => setFocused(false)
    const searchInput = React.useRef(null)

    const addFacilityToActiveList = (id) => {
        const newArray = [...selectedFacilityIds, id]
        setSelectedFacilityIds(newArray)
    }
  
    const removeFacilityFromActiveList = (id) => {
      const newArray = selectedFacilityIds.filter(item => item !== id)
      setSelectedFacilityIds(newArray)
    }

    const activeFacilities = facilities.map((t, index) => {
      const isActive = selectedFacilityIds.includes(t.id)
      return (
        <li 
          key={index}
          className={`flex items-center gap-1 cursor-pointer hover:bg-blue-600/80 transition-all bg-blue-500/80 px-2 py-1 text-white text-sm font-semibold capitalize  ${isActive  ? "block" : "hidden" }`}
          onClick={() => removeFacilityFromActiveList(t.id)}
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

    const inactiveFacilities = facilities.map((t, index) => {
      const isActive = selectedFacilityIds.includes(t.id)
      const isShow = !inputValue ? true : t.en.toLowerCase().includes(inputValue.toLowerCase())
      return (
        <li 
          key={index}
          className={`flex items-center justify-between gap-1 cursor-pointer  hover:bg-gray-600/80 transition-all bg-gray-500/80 px-2 py-1 text-white text-sm font-semibold capitalize ${!isActive && isShow ? "block" : "hidden" }`}
          onClick={() => addFacilityToActiveList(t.id)}
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
        <section className={className}>
          <ul className="w-full flex gap-1  flex-wrap items-center">
            {activeFacilities}
            <li className='shrink grow'>
              <input 
                ref={searchInput}
                value={inputValue}
                onFocus={onFocused}
                onBlur={onBlur}
                onChange={(e) => setInputValue(e.target.value)}
                type="text" 
                className='outline-none  w-full'
              />
              <ul className={`absolute flex flex-col gap-1 p-2 rounded-sm shadow-sharp bg-green-500/25 translate-y-4 ${focused ? "block" : "animate-hidden-dropdown"}`}>
                {inactiveFacilities}
                <Link
                    to={"/admin/facility"}
                  className='cursor-pointer  hover:bg-green-700/80 transition-all bg-green-600/80 px-2 py-1 text-white text-sm font-semibold capitalize rounded-md text-center mt-2'
                >
                  Add new facility
                </Link>
              </ul>
            </li>
          </ul>
        </section>
  )
}

export default FacilityInputSelect