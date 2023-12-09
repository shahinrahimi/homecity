import React from "react"
import {  Simplify, Section, ProjectCard } from "../../../components"
import { useProjectStore } from "../../../app/store"


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


const ProjectsCarouselSection = ({ id, isDark , background }) => {

  const projects = useProjectStore.getState().projects
  
  let numSlides = projects.length

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveSlide((activeSlide + 1) % numSlides)
    }, 5000)

    return () => clearInterval(intervalId)
  }, [])

  const [activeSlide, setActiveSlide] = React.useState(0);

  const nextSlide = () => setActiveSlide((activeSlide + 1) % numSlides);

  const prevSlide = () => setActiveSlide((activeSlide - 1 + numSlides) % numSlides)

  const Slides = projects.map((project, index) => {
    return (
      <Slide index={index} activeIndex={activeSlide} maxIndex={numSlides} key={index} >
        <ProjectCard project={project} />
      </Slide>
    )
  })

  return (
    <Section id={id} isDark={isDark} background={background}>
      <div className="flex flex-col lg:flex-row justify-between gap-10 items-center">
          {/* content */}
          <div className="flex flex-col w-[calc(100%)] md:w-[calc(%50)]">
              <Simplify text={"Discover"}/>
              <h1 className='text-4xl font-bold mb-2'>Find Your Home in Turkey</h1>
              <p
                  className='mb-8'
              >Discover your perfect abode with our real estate services, simplifying property searches and transactions for a true sense of home in Turkey.</p>
          </div>
          {/* sildes */}
          <div className="relative  w-[calc(100%)] text-slate-900 grid place-content-center">
            {/* scence */}
            <div className="w-[calc(300px)] h-[calc(600px)]">
              {Slides}
            </div>
            {/* controls */}
            <button onClick={prevSlide} className="absolute -bottom-10 w-10 -left-8 text-8xl text-slate-200 hover:text-slate-50 transition-colors opacity-50 hover:opacity-80">
              &#706;
            </button>
            <button onClick={nextSlide} className="absolute -bottom-10 w-10 -right-7 text-8xl text-slate-200 hover:text-slate-50 transition-colors opacity-50 hover:opacity-80 grid place-content-center">
              &#707;
            </button>
          </div>
      </div>
    </Section>
  )


}

export default ProjectsCarouselSection