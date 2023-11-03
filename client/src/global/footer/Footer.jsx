const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="grid place-content-center bg-slate-900 text-white">
      <div className="container py-2 text-sm">
        Design and develop by Sh.Rahimi  &copy; {year}
      </div>
    </footer>
  )
}
export default Footer