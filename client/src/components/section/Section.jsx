const Section = ({ id, children, isDark=false, background=false }) => {
  
    return (
      <section className={`relative px-8 py-12 lg:p-20 ${isDark ? "text-c-white-500" : "text-c-black-500"} ${background ? "bg-transparent" : isDark ? "bg-c-black-500" : "bg-c-white-500"}`} id={id} >
        {background && (
          <img 
            src={background} alt=""
            className="absolute left-0 top-1/2 -translate-y-[calc(50%)]  -z-20 w-full h-full object-cover blur-sm" 
          />
        )}
        {/* overlay as background */}
        {/* <div className={`absolute left-0 after:content-[''] h-full w-full -z-50 ${bgColor} `}></div> */}
        <div className="container mx-auto">
          {children}
        </div>
      </section>
    )
  }
  export default Section