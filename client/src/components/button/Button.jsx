const Button = ({ text, action, disable=false, href, colorClassName, alighClassName }) => {

  return (
    <button
      onClick={action}
      disabled={disable}
      className={`px-4 py-2  border-c-black-500 border-4 transition-colors duration-200 font-bold hover:text-white ${colorClassName ? colorClassName : " hover:bg-c-red-500/80"} ${alighClassName ? alighClassName : "self-start"}`}
    >
      {href 
      ? (
          <a href={href}>{text}</a>
      ):(
        <p>{text}</p>
      )}
    </button>
    
  )
}
export default Button