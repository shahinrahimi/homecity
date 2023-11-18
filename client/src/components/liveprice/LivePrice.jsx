import React from 'react'
import { LivePriceContext } from '../../context/LivePriceContext'
import { FaDollarSign } from "react-icons/fa";
const LivePrice = () => {
    const { livePrices, show, toggleShow } = React.useContext(LivePriceContext)

    React.useEffect(() => {
      let timeOutId
      if (show === true){
        timeOutId = setTimeout(() => {
          toggleShow()
        }, 20000)
      }

      return () => {
        if(timeOutId) {
          clearTimeout(timeOutId)
        }
      }
    },[show])

    let content = <></>

    if (livePrices?.FOREX){
        const { FOREX } = livePrices

        content = Object.keys(FOREX).map((p, index) => {
            return (
                <li 
                    key={index}
                    className='whitespace-nowrap flex flex-grow justify-around'
                >
                    <div >{p} {FOREX[p]}</div>
                    <div className='mx-2'>|</div>
                </li>
            )
        })

    }

  return (
    <>
      <div className={`bg-c-black-700/50 fixed top-20 w-full h-10 text-white text-2xl font-bold flex ${show ? "translate-y-0" : "-translate-y-[calc(300%)]"} transition-all duration-500`}>
          <ul className={` w-full text-lg flex justify-between items-center ${show ? "animate-ticker-show" : "opacity-0"}`}>
              {content}
          </ul>
      </div>
      <button 
          className={`fixed bottom-0 left-0 bg-c-yellow-400/75 text-c-black-100 w-20 h-20 p-4 rounded-full m-4 grid place-content-center text-3xl hover:bg-c-yellow-400/90 ${show ? "opacity-0" : "opacity-1"}`}
          disabled={show}
          onClick={toggleShow}
      ><FaDollarSign />
      </button>
    </>
    
  )
}

export default LivePrice