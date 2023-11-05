import React from "react"
import { FaPeopleGroup as CustomersIcon } from "react-icons/fa6"
import { MdHomeWork as ProjectsIcon } from "react-icons/md"
import { SiHomeassistantcommunitystore as FranchisesIcon } from "react-icons/si"
import { Counter } from "../../../components"
import { background6, background4, background5 } from "../../../assets/img";

const Slide1 = () => {
  return (
    <article
      className="flex flex-col justify-center items-center w-full h-full"
    >
      <div>
        <h3 className="uppercase text-sm mb-2">welcome to</h3>
        <h1 className="capitalize text-6xl mb-3 font-semibold">Homecity</h1>
        <h2 className="capitalize text-2xl">homecitygroup offers a choice of several programs for investing in residency and citizenship in turkey</h2>
      </div>

      <a
        className="bg-transparent px-4 py-2 hover:bg-blue-600/75 self-start lg:self-center mt-10 border-4 transition-colors duration-200 font-bold"
        href="#projects"
      >
        Check Our Programs
      </a>

    </article>
  )
}

const Slide2 = () => {
  return (
    <article className="flex flex-col justify-center items-center h-full w-full gap-20">
      <div className="flex flex-col justify-center items-center text-center pt-20">
        <h1 className="capitalize text-4xl font-semibold mb-4">trust our experiences</h1>
        <h2 className="capitalize text-xl">as one of the top tier companies in residency and citizenship through investment homecity offers value and choice</h2>
      </div>

      <div className="flex flex-row gap-1 sm:gap-2 md:gap-4 lg:gap-10 xl:gap-20 2xl:gap-40 mt-10 scale-75 md:scale-100 lg:scale-120">
        <div className="relative w-40 h-40 rounded-full bg-slate-50/50 text-slate-800 flex flex-col justify-center items-center  overflow-hidden shadow-sm shadow-slate-200 transition-all duration-1000">
          {/* icon */}
          <div className="text-4xl">
            <CustomersIcon />
          </div>
          {/* count */}
          <div className="text-2xl">
            <Counter count={756} />
          </div>
          <div className="w-3/4 bg-slate-900 h-[calc(1px)] opacity-30">

          </div>

          {/* comment */}
          <div className="text-sm text-center w-1/2 mt-2">
            <p>Customer that trust us</p>
          </div>
        </div>

        <div className="relative w-40 h-40 rounded-full bg-slate-50/50 text-slate-800 flex flex-col justify-center items-center  overflow-hidden shadow-sm shadow-slate-200">
          {/* icon */}
          <div className="text-4xl">
            <FranchisesIcon />
          </div>
          {/* count */}
          <div className="text-2xl">
            <Counter count={15} />
          </div>
          <div className="w-3/4 bg-slate-900 h-[calc(1px)] opacity-30">

          </div>

          {/* comment */}
          <div className="text-sm text-center w-1/2 mt-2">
            <p>Franchises available</p>
          </div>
        </div>

        <div className="relative w-40 h-40 rounded-full bg-slate-50/50 text-slate-800 flex flex-col justify-center items-center  overflow-hidden shadow-sm shadow-slate-200">
          {/* icon */}
          <div className="text-4xl">
            <ProjectsIcon />
          </div>
          {/* count */}
          <div className="text-2xl">
            <Counter count={230} />
          </div>
          <div className="w-3/4 bg-slate-900 h-[calc(1px)] opacity-30">

          </div>

          {/* comment */}
          <div className="text-sm text-center w-1/2 mt-2">
            <p>Projects for investment</p>
          </div>
        </div>

      </div>



    </article>
  )
}

const Slide3 = () => {
  return (
    <article className="flex flex-col justify-center items-center w-full h-full">
      <div>
        <h1 className="capitalize text-5xl font-bold mb-2">invest</h1>
        <h1 className="capitalize text-5xl mb-3">in your <span className="font-bold">future</span></h1>
        <h2 className="capitalize text-2xl">get started today. contact our advisers for free, confidential advice on your options.</h2>
      </div>

      <a
        className="bg-transparent px-4 py-2 hover:bg-lime-700/75 self-start lg:self-center mt-10 border-4 transition-colors duration-200 font-bold"
        href="#contactus"
      >
        Get Free Advise
      </a>

    </article>
  )
}


const slides = [
  { name: "slide1", image: background6, content: Slide1 },
  { name: "slide2", image: background4, content: Slide2 },
  { name: "slide3", image: background5, content: Slide3 }
]


const Slide = ({ children, image, index, activeSlide }) => {
  return (
    <div className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 ${index === activeSlide ? 'translate-x-0' : index > activeSlide ? 'translate-x-full' : '-translate-x-full'}`}>

      {/* Content */}
      <div
        className="bg-transparent container w-[calc(90%)] h-[calc(90%)] mx-auto flex flex-col justify-center items-center text-slate-50"
      >
        {children}
      </div>

      {/* overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-black -z-10 opacity-70"
      >
        <img
          className="w-full h-full object-cover object-center"
          src={image}
        />
      </div>

    </div>
  )
}


const HeroCarousel = () => {

  React.useEffect(() => {
    let counter = 0
    const intervalId = setInterval(() => {
      counter = counter + 1
      setActiveSlide(counter % 3)
    }, 10000)

    return () => clearInterval(intervalId)
  }, [])

  let numSlides = slides.length

  const [activeSlide, setActiveSlide] = React.useState(0);

  const nextSlide = () => {
    setActiveSlide((activeSlide + 1) % numSlides);
  };

  const prevSlide = () => {
    setActiveSlide((activeSlide - 1 + numSlides) % numSlides);
  };

  const Slides = slides.map((slide, index) => {
    return (
      <Slide key={slide.name} index={index} image={slide.image} activeSlide={activeSlide}>
        {<slide.content />}
      </Slide>
    )
  })

  const circleButtons = () => {
    return (
      <ul
        className="absolute bottom-10 flex gap-2 w-full justify-center items-center"
      >
        {slides.map((slide, index) => {
          return (
            <li
              key={slide.name}
              className={`w-4 h-4 border-solid border-slate-300 hover:bg-slate-300/75 rounded-full border-2 cursor-pointer ${index === activeSlide ? "bg-slate-300" : ""}`}
              onClick={() => setActiveSlide(index)}
            ></li>
          )
        })}
      </ul>
    )
  }


  return (
    <div className="relative h-[calc(100vh-80px)] w-screen bg-black overflow-hidden">
      {/* slides */}
      {Slides}


      <button onClick={prevSlide} className="hidden lg:block absolute top-1/2 left-4 transform -translate-y-1/2 w-10 text-8xl text-slate-300 hover:text-slate-50 transition-colors opacity-50 hover:opacity-80">
        &#706;
      </button>
      <button onClick={nextSlide} className="hidden lg:block absolute top-1/2 right-4 transform -translate-y-1/2 w-10 text-8xl text-slate-300 hover:text-slate-50 transition-colors opacity-50 hover:opacity-80">
        &#707;
      </button>

      {circleButtons()}

    </div>
  )
}
export default HeroCarousel