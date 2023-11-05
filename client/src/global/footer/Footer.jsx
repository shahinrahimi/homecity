const Footer = () => {

  const year = new Date().getFullYear()
  return (
    <footer className="relative top-20 flex p-2 w-screen h-10 bg-slate-900 text-white justify-center items-center">
      <div className="container py-2 text-sm mx-auto grid place-content-center">
        <p>Design and develop by Sh.Rahimi  &copy; {year}</p>
      </div>
    </footer>
  )
}
export default Footer