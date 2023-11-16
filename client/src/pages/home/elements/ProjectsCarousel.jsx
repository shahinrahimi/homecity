import React from "react"
import { project_1_image_0, project_2_image_0, project_3_image_0, project_4_image_0 } from "../../../assets/img"
const slides = [
  { name: "slide1", image: project_1_image_0, content: "content1" },
  { name: "slide2", image: project_2_image_0, content: "content2" },
  { name: "slide3", image: project_3_image_0, content: "content3" },
  { name: "slide4", image: project_4_image_0, content: "content4" },

]

import { benefitSvg, investmentSvg } from '../../../assets/svg'

import { IoBedOutline as BedroomIcon } from "react-icons/io5"
import { LuBath as BathroomIcon } from "react-icons/lu"
import { Button, Simplify } from "../../../components"

const Card = ({ image }) => {
  return (
    <div className="w-[calc(300px)] h-[calc(500px)] bg-c-white-500 border-2 border-c-black-500/50 flex flex-col justify-between items-center rounded-md shadow-2xl overflow-hidden">
      <div className="w-full overflow-hidden min-h-[calc(45%)]">
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
      <div className="flex gap-2 justify-between items-center border-b-2 border-t-2 border-c-black-500/50 py-2 w-full px-4">
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

      <div className="bg-c-white-100 py-4 w-full flex justify-center items-center">
        <Button 
          text={"More Details"}
        />
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
    <div className={`absolute transition-all duration-1000 grid place-content-center ${index === activeIndex ? "translate-x-0 brightness-100 z-10" : index === prevIndex ? "-translate-x-1/2 scale-[calc(0.4)] brightness-75 z-0" : index === nextIndex ? "translate-x-1/2 scale-[calc(0.4)] brightness-75 z-0" : "translate-x-0 scale-[calc(0.2)] opacity-0 brightness-50 -z-10"}`}>
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
    <div className="flex flex-col md:flex-row justify-between gap-10 items-center">
        {/* content */}
        <div className="flex flex-col w-[calc(100%)] md:w-[calc(%50)]">
            <Simplify text={"Discover"}/>
            <h1 className='text-4xl font-bold mb-2'>Find Your Home in Turkey</h1>
            <p
                className='mb-8'
            >Discover your perfect abode with our real estate services, simplifying property searches and transactions for a true sense of home in Turkey.</p>


        </div>
        {/* sildes */}
        <div className="relative  w-[calc(100%)] md:w-[calc(%100)] scale-[calc(100%)] sm:scale-[calc(75%)] md:scale-[calc(85%)] lg:scale-100 text-slate-900 grid place-content-center">
          {/* scence */}
          <div className="w-[calc(300px)] h-[calc(500px)]">
            {Slides}
          </div>
          {/* controls */}
          <button onClick={prevSlide} className="absolute -bottom-10 w-10 -left-0 text-8xl text-slate-200 hover:text-slate-50 transition-colors opacity-50 hover:opacity-80">
            &#706;
          </button>
          <button onClick={nextSlide} className="absolute -bottom-10 w-10 -right-0 text-8xl text-slate-200 hover:text-slate-50 transition-colors opacity-50 hover:opacity-80">
            &#707;
          </button>
        </div>
    </div>
  )

  return (
    <div className="relative scale-[calc(60%)] sm:scale-[calc(75%)] md:scale-[calc(85%)] lg:scale-100 text-slate-900 border-2 border-c-green-500 grid place-content-center">
      {/* scence */}
      <div className="w-[calc(300px)] h-[calc(500px)]">
        {Slides}
      </div>
      {/* controls */}
      <button onClick={prevSlide} className="absolute hidden lg:block  top-1/2 left-4 transform -translate-y-1/2 w-10 text-8xl text-slate-800 hover:text-slate-50 transition-colors opacity-50 hover:opacity-80">
        &#706;
      </button>
      <button onClick={nextSlide} className="absolute hidden lg:block  top-1/2 right-4 transform -translate-y-1/2 w-10 text-8xl text-slate-800 hover:text-slate-50 transition-colors opacity-50 hover:opacity-80">
        &#707;
      </button>
    </div>
  )
}
export default ProjectsCarousel