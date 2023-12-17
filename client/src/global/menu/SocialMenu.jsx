import React from 'react'
import { 
    TwitterColorFull, 
    WhatsAppIconColorFull,
    TelegramColorFull,
    InstagramColorFull,
    TikTalkColorFull,
    FacebookColorFull
} from '../../icons/Icons'
import { BiDotsHorizontalRounded as ThreeDotIcon } from "react-icons/bi";
import { IoIosArrowUp as ArrowIcon  } from "react-icons/io";
import { RxCross2 as CloseIcon } from "react-icons/rx";
import { FaDollarSign as DollarIcon } from "react-icons/fa";
import { LivePriceContext } from '../../context/LivePriceContext';
import { SmoothScrollingContext } from '../../context/SmoothScrollingContext';
import { LanguageContext } from '../../context/LanguageContext';
import { useTranslation } from 'react-i18next';
const items = [
    {
        name: "X",
        icon: TwitterColorFull,
        link:""
    },
    {
        name: "Facebook",
        icon: FacebookColorFull,
        link:""
    },
    {
        name: "WhatsApp",
        icon: WhatsAppIconColorFull,
        link:""
    },
    {
        name: "Intagram",
        icon: InstagramColorFull,
        link:""
    },
    {
        name: "Telegram",
        icon: TelegramColorFull,
        link:""
    },
    {
        name: "TikTalk",
        icon: TikTalkColorFull,
        link:""
    },
]

const SocialMenu = () => {

    const [menuOpen, setMenuOpen] = React.useState(false)
    const { scrollToSection } = React.useContext(SmoothScrollingContext)
    const { livePrices, show, toggleShow } = React.useContext(LivePriceContext)
    const { lang , dir } = React.useContext(LanguageContext)
    const { t } = useTranslation()
    React.useEffect(() => {
        let timeOutId
        if (show === true){
          timeOutId = setTimeout(() => {
            toggleShow()
          }, 21000)
        }
  
        return () => {
          if(timeOutId) {
            clearTimeout(timeOutId)
          }
        }
      },[show])
    
    let content = <></>
    let prices
    if (lang === "fa"){
        prices = livePrices.filter(p => p.domain === "IR")
        content = prices.map((p, index) => {
            return (
                <li 
                    key={index}
                    className='whitespace-nowrap flex flex-grow justify-around'
                >
                    <div >{t(p.name)} {(p.value).toLocaleString("fa-IR")}</div>
                    <div className='mx-2'>|</div>
                </li>
            )
        })
    } else {
        prices = livePrices.filter(p => p.domain === "FOREX" || p.domain === "CRYPTO")
        content = prices.map((p, index) => {
            return (
                <li 
                    key={index}
                    className='whitespace-nowrap flex flex-grow justify-around'
                >
                    <div >{p.name} {(p.value).toFixed(4)}</div>
                    <div className='mx-2'>|</div>
                </li>
            )
        })
    }


  return (
    <section id='controlers'>
        {/* overlay */}
        <aside className={`z-10 fixed top-0 left-0 bg-c-white-000/80 w-screen h-screen ${menuOpen ? "block" : "hidden"}`}></aside>
        {/* social */}
        <aside
            className='fixed bottom-20 right-5 z-10 h-16 w-16 grid place-content-center'
        >
            <ul
                className='relative bg-lime-400 -translate-x-[calc(25px)] -translate-y-[calc(25px)]' 
            >
                <li
                    className={`absolute ${menuOpen ? "-translate-y-[calc(60px)]" : "translate-y-0"} transition-all duration-500`}
                >{items[0].icon}</li>
                <li
                    className={`absolute ${menuOpen ? "-translate-y-[calc(120px)]" : "translate-y-0"} transition-all duration-500`}
                >{items[1].icon}</li>
                <li
                    className={`absolute ${menuOpen ? "-translate-y-[calc(180px)]" : "translate-y-0"} transition-all duration-500`}
                >{items[2].icon}</li>
                <li
                    className={`absolute ${menuOpen ? "-translate-y-[calc(240px)]" : "translate-y-0"} transition-all duration-500`}
                >{items[3].icon}</li>
                <li
                    className={`absolute ${menuOpen ? "-translate-y-[calc(300px)]" : "translate-y-0"} transition-all duration-500`}
                >{items[4].icon}</li>
                <li
                    className={`absolute ${menuOpen ? "-translate-y-[calc(360px)]" : "translate-y-0"} transition-all duration-500`}
                >{items[5].icon}</li>

            </ul>
        </aside>

        {/* menu controllre */}
        <aside
            className='fixed bottom-20  right-5 z-10 h-16 w-16 grid place-content-center'
        >
            <button
            onClick={() => setMenuOpen(prev => !prev)} 
            className=' bg-white bottom-20 left-4 rounded-full text-4xl shadow-sharp h-[calc(60px)] w-[calc(60px)] cursor-pointer grid place-content-center'>
            {menuOpen ? <CloseIcon /> : <ThreeDotIcon />}
            </button>

        </aside>

        {/* live price button */}
        <aside
            className='fixed bottom-20  left-5 z-10 h-16 w-16 grid place-content-center'
        >
            <button
                onClick={toggleShow} 
                disabled={show}
                className={` bg-white/75 bottom-20 left-4 rounded-full text-3xl shadow-sharp h-[calc(60px)] w-[calc(60px)] cursor-pointer grid place-content-center ${show ? "hidden" : "block"}`}>
                <DollarIcon />
            </button>

        </aside>

        {/* live price show */}
        <aside
            className={`z-20 bg-c-black-700/50 fixed top-20 w-full h-10 text-white text-2xl font-bold flex ${show ? "translate-y-0" : "-translate-y-[calc(300%)]"} transition-all duration-500`}
        >
            <ul
                className={`w-full text-lg flex justify-between items-center ${show ? "animate-ticker-show" : "opacity-0"}`}
            >
                {content}
            </ul>
        </aside>

        
        {/* scroll top */}
        <aside
            className='fixed bottom-1/3  right-5 z-10 h-16 w-16 grid place-content-center'
        >
            <button
                onClick={() => scrollToSection("index")} 
                className={`${menuOpen ? "hidden" : "block"} bg-gray-200/25  bottom-1/3 right-5 rounded-full shadow-sharp h-[calc(50px)] w-[calc(50px)] cursor-pointer grid place-content-center`}>
                <ArrowIcon className='text-3xl' />
            </button>
        </aside>
    </section>
    
  )
}

export default SocialMenu