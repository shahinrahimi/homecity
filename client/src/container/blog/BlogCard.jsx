import React from 'react'
import { Link } from 'react-router-dom'
import { LanguageContext } from '../../context/LanguageContext'
import { useTranslation } from "react-i18next"

const BlogCard = ({ blog }) => {

    const { dir, lang } = React.useContext(LanguageContext)
    const { t } = useTranslation()
    const {
        id,
        imageSrc,
        createdAt,
        updatedAt,
        tags,
        translations  
    } = blog

    const blogFa = blog.translations.filter(t => t.language === "fa")[0]
    const blogAr = blog.translations.filter(t => t.language === "ar")[0]
    const blogTr = blog.translations.filter(t => t.language === "tr")[0]

    let title, summary
    if (lang === "fa"){
        title = blogFa.title,
        summary = blogFa.summary
    }else if (lang === "ar"){
        title = blogAr.title,
        summary = blogAr.summary
    }else if (lang === "tr"){
        title = blogTr.title,
        summary = blogTr.summary
    }else {
        title = blog.title,
        summary = blog.summary
    }

    return (
        <Link
            to={`/blogs/${id}`} 
            className={`relative w-full h-full flex flex-col shrink-0 shadow-sharp cursor-pointer hover:scale-[calc(1.01)] transition-all hover:shadow-2xl`}
            >
            {/* image */}
            <div className="w-full basis-1/2 shrink-0 overflow-hidden bg-slate-500 mb-4">
                <img 
                    className='h-full w-full object-cover'
                    src={imageSrc} 
                    alt="" 
                />
                
                
                {tags && tags.length > 0 && tags.map((tag, index) => {
                    return (
                        <div key={index}>{tag.title}</div>
                    )
                })}
            </div>

            <div className="absolute top-1/2 -translate-y-2/3 right-5 shadow-sharp  flex bg-white p-2 rounded-md items-end gap-2 font-semibold">
                    <div className="text-orange-400 text-4xl">
                        {new Date(createdAt).getUTCDay()}
                    </div>
                    {new Date(createdAt).toLocaleString('default', { month: 'short' })}
            </div>

            {/* content */}
            <div dir={dir} className="basis-1/2 shrink-0 items-center justify-between flex flex-col p-3">
                <div className="">
                    <h1 className='text-center text-sm font-semibold mb-4'>{title}</h1>
                    <p className='text-center text-xs opacity-70'>{summary.length > 200 ? summary.slice(0,199) + "..." : summary}</p>
                </div>
                <button
                    className='p-2 capitalize text-col text-c-red-500 text-base font-semibold mb-2'
                >
                    {t("continue_reading")}
                </button>
            </div>
        </Link>
    )
}
export default BlogCard