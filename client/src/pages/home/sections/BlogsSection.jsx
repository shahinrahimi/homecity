import React from 'react'
import { useBlogStore } from '../../../app/store'
import { Link } from 'react-router-dom'
import { Section } from '../../../components'

const BlogCard = ({ blog }) => {

    const {
        id,
        imageSrc,
        title,
        summary,
        createdAt,
        updatedAt
    } = blog

    return (
        <Link
            to={`/blogs/${id}`} 
            // className='flex flex-col basis-[calc(80%)] md:basis-1/2 lg:basis-1/3 xl:basis-1/4 shrink-0 h-96 shadow-sharp cursor-pointer hover:scale-105 transition-all hover:shadow-2xl'
            className='flex flex-col w-[calc(240px)] shrink-0 h-96 shadow-sharp cursor-pointer hover:scale-105 transition-all hover:shadow-2xl'
            >
            {/* image */}
            <div className="w-full basis-1/2 shrink-0 overflow-hidden bg-slate-500">
                <img 
                    className='h-full w-full object-cover'
                    src={imageSrc} 
                    alt="" 
                />
            </div>

            {/* content */}
            <div className="basis-1/2 shrink-0 items-center justify-between flex flex-col p-3">
                <h1 className='text-center text-sm font-semibold mb-2'>{title}</h1>
                <p className='text-center text-xs opacity-70'>{summary.length > 100 ? summary.slice(0,99) + "..." : summary}</p>
                <button
                    className='p-2 capitalize text-col text-c-red-500 text-xs font-semibold'
                >
                    countine reading
                </button>
            </div>
            
            
        </Link>
    )
}

const BlogsSection = ({ id, isDark , background }) => {

    const blogs = useBlogStore.getState().blogs
    const [postion, setPosition] = React.useState(0)
    const translate = () => {

    }

    const translations = [
        '-translate-x-0',
        '-translate-x-[calc(1*240px)]',
        '-translate-x-[calc(2*240px)]',
        '-translate-x-[calc(3*240px)]',
        '-translate-x-[calc(4*240px)]',

    ]

    return (
        <Section id={id} isDark={isDark} background={background} >
            <div className='mx-auto max-w-3xl'>
                <div className="max-w-3xl">

                </div>
                <div className="-translate-x-0 -translate-x-[calc(1*240px)] -translate-x-[calc(2*240px)] -translate-x-[calc(3*240px)] -translate-x-[calc(4*240px)]"></div>
                <h1 className='text-3xl text-center capitalize mb-6'>latest articles</h1>
                <ul className={`relative w-full flex gap-4 ${translations[postion]} transition-all duration-700`} >
                    {blogs.map((blog, index) => <BlogCard key={index} blog={blog} />)}
                </ul>
                <button
                    onClick={(e) => setPosition(prev => prev+1)}
                >click me</button>
            </div>
        </Section>
    )
}

export default BlogsSection
