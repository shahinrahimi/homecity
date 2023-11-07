import React from "react"
import { project_1_image_0, project_2_image_0, project_3_image_0, project_4_image_0 } from "../../../assets/img"
const slides = [
  { name: "slide1", image: project_1_image_0, content: "content1" },
  { name: "slide2", image: project_2_image_0, content: "content2" },
  { name: "slide3", image: project_3_image_0, content: "content3" },
  { name: "slide4", image: project_4_image_0, content: "content4" },

]

import { IoBedOutline as BedroomIcon } from "react-icons/io5"
import { LuBath as BathroomIcon } from "react-icons/lu"


const Card = ({ image }) => {
  return (
    <div className="bg-slate-50 w-96 flex flex-col justify-center items-center rounded-md shadow-2xl">
      <div className="w-full overflow-hidden rounded-t-md min-h-[calc(45%)]">
        <img
          className="object-cover"
          src={image}
        />
      </div>

      <div className="w-full p-2">
        <h3 className="text-slate-500 uppercase font">Starting from</h3>
        <h2 className="text-slate-800 text-2xl">$600,000</h2>
        <h4 className="text-slate-600 font-normal">Anatolian side, Beykoz</h4>
      </div>

      {/* icons */}
      <div className="flex gap-2 justify-between items-center border-b-[calc(2px)] border-t-[calc(2px)] border-slate-200 py-2 w-full px-4">
        <div className="flex">
          <BedroomIcon
            className="text-2xl"
          />
          <span className="flex whitespace-nowrap font-bold">1-3</span>
          <span>Bedroom</span>
        </div>
        <div className="flex">
          <BathroomIcon
            className="text-2xl"
          />
          <span className="flex whitespace-nowrap font-bold">1-2</span>
          <span>Bathroom</span>
        </div>
      </div>

      <div className="bg-slate-100 py-4 w-full flex justify-center items-center rounded-b-lg">
        <a
          className="border-2 border-slate-500 px-2 py-1 hover:bg-rose-600/75 hover:text-slate-50 transition-colors duration-200"
          href="#contactus">
          More Details
        </a>

      </div>


    </div>
  )
}

const Slide = ({ children, index, maxIndex, activeIndex }) => {
  let prevIndex, nextIndex

  if (activeIndex === 0) {
    prevIndex = maxIndex - 1
    nextIndex = 1
  } else if (activeIndex === maxIndex - 1) {
    prevIndex = maxIndex - 2
    nextIndex = 0
  } else {
    prevIndex = activeIndex - 1
    nextIndex = activeIndex + 1
  }

  return (
    <div className={`absolute top-1/2 -translate-y-1/2  w-full transition-all duration-1000 grid place-content-center ${index === activeIndex ? "translate-x-0 brightness-100 z-10" : index === prevIndex ? "-translate-x-3/4 scale-[calc(0.4)] brightness-75 z-0" : index === nextIndex ? "translate-x-3/4 scale-[calc(0.4)] brightness-75 z-0" : "translate-x-0 scale-[calc(0.2)] opacity-0 brightness-50 -z-10"}`}>
      {children}
    </div>
  )
}
let numSlides = slides.length

const ProjectsCarousel = () => {
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveSlide((activeSlide + 1) % numSlides)
    }, 5000)

    return () => clearInterval(intervalId)
  }, [])



  const [activeSlide, setActiveSlide] = React.useState(0);

  const nextSlide = () => {
    setActiveSlide((activeSlide + 1) % numSlides);
  };

  const prevSlide = () => {
    setActiveSlide((activeSlide - 1 + numSlides) % numSlides);
  };

  const Slides = slides.map((slide, index) => {
    return (
      <Slide index={index} activeIndex={activeSlide} maxIndex={slides.length} key={index} >
        <Card image={slide.image} />
      </Slide>
    )
  })

  return (
    <div className="relative w-screen h-[calc(3*100vh/4)] text-slate-900 bg-rose-300">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(50%)] h-full">
        {Slides}
      </div>
      <button onClick={prevSlide} className="hidden lg:block absolute top-1/2 left-4 transform -translate-y-1/2 w-10 text-8xl text-slate-800 hover:text-slate-50 transition-colors opacity-50 hover:opacity-80">
        &#706;
      </button>
      <button onClick={nextSlide} className="hidden lg:block absolute top-1/2 right-4 transform -translate-y-1/2 w-10 text-8xl text-slate-800 hover:text-slate-50 transition-colors opacity-50 hover:opacity-80">
        &#707;
      </button>
    </div>
  )
}
export default ProjectsCarousel