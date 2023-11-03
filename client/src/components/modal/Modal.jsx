import { useState } from "react"
const Modal = ({ isOpen, closeMe, children }) => {
  const [isClosing, setIsClosing] = useState(false)

  let content = <></>

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      closeMe()
      setIsClosing(false)
    }, 800)
  }

  // close if user click on
  const handleClick = (e) => {
    // console.log(e)
    console.log(e.target.id)

    if (e.target.id === "modalFrame") {
      handleClose()
      console.log(handleClick)
    }

  }



  if (isOpen) {

    content = (
      <main className="grid place-content-center absolute left-0 top-0 h-screen w-screen z-10"
        onClick={handleClick}
      >
        <button
          onClick={handleClose}
          className={`bg-transparent px-3 py-3 text-3xl absolute  top-0 text-slate-400 hover:text-slate-50 transition-colors z-20`}>X</button>
        <div
          id="modelFrame"
          className={`${!isClosing ? 'animate-unfoldIn' : 'animate-unfoldOut'} bg-slate-500 opacity-50 blur-lg absolute left-0 top-0 h-screen w-screen z-10`}
          onClick={handleClose}
        ></div>
        <div className={`${!isClosing ? 'animate-unfoldIn' : 'animate-unfoldOut'} z-20`} id="modalWindow">
          {children}
        </div>
      </main>
    )
  }
  return content
}
export default Modal