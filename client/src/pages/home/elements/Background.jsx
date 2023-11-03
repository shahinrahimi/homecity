const Background = ({ image, filterStr }) => {
  return (
    <div className={`absolute top-0 left-0 -z-20 w-full h-screen after:absolute after:h-full after:w-full after:bg-black/[.${filterStr}]`} >
      <img src={image} alt="hero"
        className="absolute top-0 left-0 -z-10 w-screen h-screen object-cover bg-no-repeat bg-center"
      />
    </div>
  )
}

export default Background