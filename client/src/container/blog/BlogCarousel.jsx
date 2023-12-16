import React from 'react'
import useScreenSize from '../../hooks/useScreenSize'
import { useBlogStore } from '../../app/store'
import { useSwipeable } from "react-swipeable";
import { Section } from '../../components'
import BlogCard from './BlogCard';
import { useTranslation } from 'react-i18next';
const Carousel = ({ blogs }) => {

    const { width, height } = useScreenSize()
    // number of blogs show per slide
    const [numBlogsPerSlide, setBlogsPerSlide] = React.useState(1)
    const [numberOfCircles, setNumberOfCircles] = React.useState(Math.floor(blogs.length/numBlogsPerSlide))

    const [activeSlideIndex, setActiveSlideIndex] = React.useState(0)

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


    React.useEffect(() => {
        if (width < 640){
            //console.log("smallest size")
            setBlogsPerSlide(1)
        } else if (width < 768) {
            //console.log("small size")
            setBlogsPerSlide(2)
        } else if (width < 1024) {
            //console.log("medium size")
            setBlogsPerSlide(2)
        } else if (width < 1280) {
            //console.log("large size")
            setBlogsPerSlide(2)
        } else if (width < 1536) {
            //console.log("xl size")
            setBlogsPerSlide(3)
        } else {
            //console.log("extra size")
            setBlogsPerSlide(3)
        }
    },[width])

    React.useEffect(() => {
        let numberOfCircles = Math.ceil(blogs.length/numBlogsPerSlide)
        setNumberOfCircles(numberOfCircles)
    },[numBlogsPerSlide])

    const translationClass = `t-x-${activeSlideIndex}`

    const nextSlide = () => {
        let newActiveSlideIndex = activeSlideIndex+1
        if (!(newActiveSlideIndex >= numberOfCircles)){
            setActiveSlideIndex(newActiveSlideIndex)
        }
    }

    const prevSlide = () => {
        let newActiveSlideIndex = activeSlideIndex-1
        if (!(newActiveSlideIndex < 0)){
            setActiveSlideIndex(newActiveSlideIndex)
        }
    }


    return (
        <div dir={'ltr'}>
            <ul {...handlers} className={`relative flex justify-between py-4 px-2 gap-4 transition-all duration-700 blogcarousel ${translationClass} `}>
                {blogs.map((blog, index) => {
                    return (
                        <li key={index} className='w-full sm:w-[calc(50%-8px)] md:w-[calc(50%-8px)] xl:w-[calc(33%-8px)] shrink-0 p-4' >
                            <BlogCard blog={blog} />
                        </li>
                    )
                })}
            </ul>
            {/* circles */}
            <div className="grid place-content-center w-full p-8">
                <ul className="flex gap-4">
                    {Array.from({length: numberOfCircles }).map((_, index) => {
                        return (
                            <li
                                key={index}
                                onClick={() => setActiveSlideIndex(index)}
                                className={`${activeSlideIndex === index ? "bg-gray-400/90" : "bg-gray-100/25"} h-4 w-4 rounded-full border border-gray-300 cursor-pointer hover:bg-gray-400/90 transition-colors`}>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
        
    )
}

const BlogCarousel = ({ id, isDark, background }) => {
    const blogs = useBlogStore.getState().blogs.slice(0,20)
    const { t } = useTranslation()
    return (
        <Section id={id} isDark={isDark} background={background}>
            <h1 className='text-3xl text-center capitalize mb-6'>{t("latest_articles")}</h1>
            <Carousel blogs={blogs} />
        </Section>
    )
}

export default BlogCarousel