import React from 'react'
import { useBlogStore } from '../../../app/store'
import { Link } from 'react-router-dom'
import { Section } from '../../../components'
import useScreenSize from '../../../hooks/useScreenSize'
import { useSwipeable } from "react-swipeable";


const BlogCard = ({ blog, index }) => {

    const {
        id,
        imageSrc,
        title,
        summary,
        createdAt,
        updatedAt,
        tags    
    } = blog

    return (
        <Link
            to={`/blogs/${id}`} 
            className={`w-full h-full flex flex-col shrink-0 shadow-sharp cursor-pointer hover:scale-[calc(1.01)] transition-all hover:shadow-2xl`}
            >
            {/* image */}
            <div className="w-full basis-1/2 shrink-0 overflow-hidden bg-slate-500">
                <img 
                    className='h-full w-full object-cover'
                    src={imageSrc} 
                    alt="" 
                />
                {tags && tags.length > 0 && tags.map(tag => {
                    return (
                        <>{tag.title}</>
                    )
                })}
            </div>

            {/* content */}
            <div className="basis-1/2 shrink-0 items-center justify-between flex flex-col p-3">
                <div className="">
                    <h1 className='text-center text-sm font-semibold mb-4'>{title}</h1>
                    <p className='text-center text-xs opacity-70'>{summary.length > 200 ? summary.slice(0,199) + "..." : summary}</p>
                </div>
                <button
                    className='p-2 capitalize text-col text-c-red-500 text-xs font-semibold'
                >
                    countine reading
                </button>
            </div>
        </Link>
    )
}

const BlogsCarousel = () => {

    const blogs = useBlogStore.getState().blogs
    const { width, height } = useScreenSize()
    const [numSlidePerPage, setSlidePerPage] = React.useState(1)
    const [activeIndex, setActiveIndex] = React.useState(0)
    const [maxSlide, setMaxSlide] = React.useState(Math.floor(blogs.length/numSlidePerPage))

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
            setSlidePerPage(1)
        } else if (width < 768) {
            //console.log("small size")
            setSlidePerPage(2)
        } else if (width < 1024) {
            //console.log("medium size")
            setSlidePerPage(2)
        } else if (width < 1280) {
            //console.log("large size")
            setSlidePerPage(3)
        } else if (width < 1536) {
            //console.log("xl size")
            setSlidePerPage(3)
        } else {
            //console.log("extra size")
            setSlidePerPage(3)
        }
    },[width])

    React.useEffect(() => {
        let maxSlideSize = Math.ceil(blogs.length/numSlidePerPage)
        setMaxSlide(maxSlideSize)
    },[numSlidePerPage])

    const translationClass = `t-x-${activeIndex}`

    console.log(maxSlide)
    console.log(activeIndex)
    console.log(numSlidePerPage)

    const nextSlide = () => {
        if (!(activeIndex+1 > maxSlide)){
            setActiveIndex(activeIndex+1)
        }
    }

    const prevSlide = () => {
        if (!(activeIndex-1 < 0)){
            setActiveIndex(activeIndex-1)
        }
    }


    return (
        <>
            <ul {...handlers} className={`relative flex justify-between py-4 px-2 gap-4 transition-all duration-700 blogcarousel ${translationClass}`}>
                {blogs.map((blog, index) => {
                    return (
                        <li key={index} className='w-full md:w-[calc(50%-8px)] xl:w-[calc(33%-8px)] shrink-0 p-4' >
                            <BlogCard blog={blog} index={index} />
                        </li>
                    )
                })}
            </ul>
            {/* circles */}
            <div className="grid place-content-center w-full p-8">
                <ul className="flex gap-4">
                    {Array.from({length: maxSlide }).map((_, index) => {
                        return (
                            <li
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`${activeIndex === index ? "bg-gray-400/90" : "bg-gray-100/25"} h-4 w-4 rounded-full border border-gray-300 cursor-pointer hover:bg-gray-400/90 transition-colors`}>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
        
    )
}

const BlogsCarouselSection = ({ id, isDark , background }) => {

    return (
        <Section id={id} isDark={isDark} background={background} >
            <div className='mx-auto max-w-3xl overflow-hidden'>
                <h1 className='text-3xl text-center capitalize mb-6'>latest articles</h1>
                <BlogsCarousel />
            </div>
        </Section>
    )
}

export default BlogsCarouselSection
