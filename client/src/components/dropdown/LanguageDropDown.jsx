import { Menu, Transition } from "@headlessui/react"
import { LANGUAGES } from "../../constants/languages"
import { useContext, Fragment } from "react"
import { LanguageContext } from "../../context/LanguageContext"
import { BiChevronDown } from "react-icons/bi"
import { IoLanguage } from "react-icons/io5"

const LanguageDropDown = () => {

  const { lang, setLang } = useContext(LanguageContext)

  const Items = LANGUAGES.map(language => {
    return (
      <Menu.Item key={language.code}>
        {({ active }) => (
          <button
            className={`${active ? 'bg-red-500 text-white' : 'text-gray-900'
              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
            onClick={() => setLang(language.code)}
          >
            {language.label}
          </button>
        )}
      </Menu.Item>
    )
  })
  return (
    <div>

      <Menu as="div" className="relative inline-block text-left">

        <div>
          <Menu.Button className="capitalize inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-2 py-1 text-sm  font-extralight text-slate-400 hover:text-slate-50  hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 transition-colors">
            {/* <div>
              <IoLanguage
                className="h-5 w-5 text-violet-200 hover:text-violet-100"
                aria-hidden="true"
              />
            </div> */}

            <div className="grid place-content-center h-5 w-5 font-bold text-xs">
              {LANGUAGES.filter(l => l.code === lang)[0].code}
            </div>

            <div className="hidden md:grid place-content-center h-5 w-5 text-violet-200 hover:text-violet-100">
              <BiChevronDown
                className="font-bold text-xs h-4 w-4"
                aria-hidden="true"
              />
            </div>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              {Items}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
export default LanguageDropDown