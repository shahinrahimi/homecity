const Section = ({ id, children, h, darkTheme = false }) => {
  let bgColor = 'bg-slate-300'
  let textColor = 'text-slate-950'
  if (darkTheme) {
    bgColor = 'bg-slate-950'
    textColor = 'text-slate-300'
  }
  return (
    <section className={`relative grid place-content-center px-8 py-8 ${textColor} ${h ? h : ''}`} id={id} >
      {/* overlay as background */}
      <div className={`absolute left-0 after:content-[''] h-full w-full -z-50 ${bgColor} `}></div>
      <div className="container mx-auto">
        {children}
      </div>
    </section>
  )
}
export default Section