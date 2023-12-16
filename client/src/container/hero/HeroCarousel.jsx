import React from 'react'
import { useSwipeable } from "react-swipeable";
import { background6, background4, background5 } from "../../assets/img";
import { useTranslation } from 'react-i18next';
import { LanguageContext } from '../../context/LanguageContext';
const SlideContent1 = () => {
  const { t } = useTranslation()
    return (
      <article
        className="flex flex-col justify-center items-center w-full h-full"
      >
        <div className="drop-shadow-2xl mb-6">
          <h3 className="uppercase text-sm lg:text-lg mb-2">{t("hero_slide_1_p1")}</h3>
          <h1 className="capitalize text-6xl lg:text-8xl mb-3 font-semibold">{t("hero_slide_1_p2")}</h1>
          <h2 className="capitalize text-2xl lg:text-5xl">{t("hero_slide_1_p3")}</h2>
        </div>
  
        <a
          className="bg-transparent px-4 py-2 lg:px-8 lg:py-4 lg:text-lg hover:bg-blue-600/75 self-start lg:self-center mt-10 border-4 transition-colors duration-200 font-bold"
          href="#projects"
        >
          Check Our Programs
        </a>
  
      </article>
    )
  }
  
  const SlideContent2 = () => {
    const { t } = useTranslation()
    return (
      <article
        className="flex flex-col justify-center items-center w-full h-ful"
      >
        <div className="drop-shadow-2xl mb-6">
  
          <h1 className="capitalize text-sm lg:text-lg font-bold mb-2 self-start">{t("hero_slide_2_p1")}</h1>
          <h1 className="capitalize text-4xl font-semibold lg:text-5xl mb-6">{t("hero_slide_2_p2")}</h1>
          <h2 className="capitalize text-2xl font-light lg:text-5xl">{t("hero_slide_2_p3")}</h2>
        </div>
  
        <a
          className="bg-transparent px-4 py-2 lg:px-8 lg:py-4 lg:text-lg hover:bg-red-600/75 self-start lg:self-center mt-10 border-4 transition-colors duration-200 font-bold"
          href="#projects"
        >
          explore opportunities
        </a>
  
      </article>
    )
    
  }
  
  const SlideContent3 = () => {
    const { t } = useTranslation()
    return (
      <article className="flex flex-col justify-center items-center w-full h-full">
        <div className="drop-shadow-2xl mb-6">
          <h1 className="capitalize text-sm lg:text-lg font-bold mb-2">{t("hero_slide_3_p1")}</h1>
          <h1 className="capitalize text-5xl lg:text-8xl mb-6">{t("hero_slide_3_p2")}</h1>
          <h2 className="capitalize text-2xl lg:text-5xl">{t("hero_slide_3_p3")}</h2>
        </div>
  
        <a
          className="bg-transparent px-4 py-2 lg:px-8 lg:py-4 lg:text-lg hover:bg-lime-700/75 self-start lg:self-center mt-10 border-4 transition-colors duration-200 font-bold"
          href="#contactus"
        >
          Get Free Advise
        </a>
  
      </article>
    )
  }

  const Slide = ({ children, image, index, activeSlide}) => {
    return (
      <div className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 ${index === activeSlide ? 'translate-x-0' : index > activeSlide ? 'translate-x-full' : '-translate-x-full'}`}>
  
        {/* Content */}
        <div
          className="bg-transparent container w-[calc(100%)] h-[calc(100%)] mx-auto flex flex-col justify-center items-center text-slate-50 p-5"
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
  
  const HeroCarousel = ({ id }) => {

    const { lang, dir } = React.useContext(LanguageContext)
  
    const handlers = useSwipeable({
      onSwiped: (e) => {
        if (e.deltaX  < -100) {
          nextSlide()
        }
  
        if (e.deltaX  > 100 ) {
          prevSlide()
        }
      }
    })
  
    const slides = [
      { name: "slide1", image: background6, content: SlideContent1 },
      { name: "slide2", image: background4, content: SlideContent2 },
      { name: "slide3", image: background5, content: SlideContent3 }
    ]
  
    React.useEffect(() => {
  
      const intervalId = setInterval(() => {
        const nextSlide = activeSlide + 1
        setActiveSlide(nextSlide % slides.length)
      }, 10000)
  
      return () => {
        if (intervalId) {
          clearInterval(intervalId)
        }
      }
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
      <div 
      // sweepable
      dir={dir}
      {...handlers}
        className={`relative w-screen h-[calc(100vh)] bg-black overflow-hidden border ${lang === "fa" || lang === "ar" ? "vazir": ""}`}
        id={id}
      >
        {/* slides */}
        {Slides}
  
        {/* slide controls */}
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