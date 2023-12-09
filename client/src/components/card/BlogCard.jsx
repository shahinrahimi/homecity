import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = ({ blog }) => {

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
export default BlogCard