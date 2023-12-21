import React from 'react'
import { getMapUrl } from '../../constants/addresses'
import { FaImages as ImagesIcon } from "react-icons/fa";
import { FaMapMarkedAlt as MapIcon } from "react-icons/fa";
import { FaLongArrowAltRight as ArrowRightIcon } from "react-icons/fa";
import { FaLongArrowAltLeft as ArrowLeftIcon } from "react-icons/fa";


const ProjectCarousel = ({ project }) => {

    const [activeIndex, setActiveIndex] = React.useState(0)
    const [isDisplayMap, setIsDisplayMap] = React.useState(false)

    const {
        coverSrc,
        imagesSrc,
        country,
        city,
        district,
    } = project

    const mapUrl = getMapUrl(country, city, district)
    const images = coverSrc.concat(imagesSrc)


    const nextSlide = () => {
        if (!(activeIndex + 1 > images.length)){
            setActiveIndex(prev => prev+1)
        } else {
            setActiveIndex(0)
        }
    }

    const prevSlide = () => {
        if (!(activeIndex - 1 < 0)){
            setActiveIndex(prev => prev-1)
        } else {
            setActiveIndex(images.length-1)
        }
    }

  return (
    <section className='min-h-[calc(50vh)]'>
        {/* sence */}
        <div className="bg-sky-500 h-[calc(40vh)] relative rounded-3xl overflow-hidden">
            {/* map */}
            <iframe
                className={`w-full h-full ${isDisplayMap ? "block" : "hidden"}`}
                frameborder="0" 
                src={mapUrl}
            ></iframe>

            {/* images */}
            <div className="w-full h-full relative group">
                <ul className="w-full h-full">
                    {images.map((image, index) => {
                        return (
                            <li
                                key={index}
                                className={`w-full h-full left-0 top-0 transition-transform duration-500 ${activeIndex === index ? "relative translate-x-0" : activeIndex > index ? "absolute -translate-x-full" : "absolute translate-x-full"}`}
                            >
                                <img src={image} className='w-full h-full object-cover' />
                            </li>
                        )
                    })}
                </ul>
                <button className='absolute right-5 top-1/2 bg-black/40 w-10 h-10 grid place-content-center rounded-full text-lg text-white/50 hover:text-white transition-all -translate-y-1/2 translate-x-48 group-hover:-translate-x-0'
                onClick={nextSlide}
                
                >
                    <ArrowRightIcon />
                </button>
                <button className='absolute left-5 top-1/2 bg-black/40 w-10 h-10 grid place-content-center rounded-full text-lg text-white/50 hover:text-white transition-all -translate-y-1/2 -translate-x-48 group-hover:-translate-x-0'
                onClick={prevSlide}
                >
                    <ArrowLeftIcon />
                </button>


            </div>

            <div className="absolute flex gap-4 top-10 right-10">
                <button
                    className={`bg-black/40 w-12 h-12 grid place-content-center rounded-sm text-2xl transition-colors ${isDisplayMap ? "text-red-500/90" : "text-white/50 hover:text-white/90"}`}
                    onClick={() => setIsDisplayMap(true)}
                >
                    <MapIcon/>
                </button>

                <button
                    className={`bg-black/40 w-12 h-12 grid place-content-center rounded-sm text-2xl  transition-colors ${isDisplayMap ? "text-white/50 hover:text-white/90" : " text-red-500/90"}`}
                    onClick={() => setIsDisplayMap(false)}
                >
                    <ImagesIcon />
                </button>
            </div>

        </div>
        
        {/* carousel */}
        <div dir="ltr" className="bg-sky-500 h-[calc(10vh)]">
            <div className="relative left-0 top-0 w-full h-full">
                <ul className={`flex w-max items-center gap-2 h-full border-2 absolute top-0 ${activeIndex > parseFloat(images.length/2) ? "right-0" : "left-0"} transition-all duration-500`}>
                    {images.map((image, index) => {
                        return (
                            <li
                                key={index}
                                className='w-24 rounded-lg overflow-hidden'
                                onClick={(e) => setActiveIndex(index)}
                            >
                                <img src={image} alt="" />
                            </li>
                        )
                    })}
                </ul>
            </div>
            
        </div>

        
    </section>
  )
}

export default ProjectCarousel