import React from 'react'
import { useBlogStore } from '../../app/store'
import { useParams } from 'react-router-dom'
import NotFound  from "../notfound/NotFound"
import { TimeAgo } from '../../components'
import { LanguageContext } from '../../context/LanguageContext'

const BlogPage = () => {
    const { id } = useParams()
    const blog = useBlogStore((state) => state.getBlogById(id))
    const { lang, dir } = React.useContext(LanguageContext)

    if (!blog) {
        return <NotFound />
    }

    const blogFa = blog.translations.filter(t => t.language === "fa")[0]
    const blogAr = blog.translations.filter(t => t.language === "ar")[0]
    const blogTr = blog.translations.filter(t => t.language === "tr")[0]

    let title, content,summary
    if (lang === "fa"){
        title = blogFa.title
        summary = blogFa.summary
        content = blogFa.content
    } else if (lang === "ar") {
        title = blogAr.title
        summary = blogAr.summary
        content = blogAr.content
    } else if (lang === "tr") {
        title = blogTr.title
        summary = blogTr.summary
        content = blogTr.content
    } else {
        title = blog.title,
        summary = blog.summary
        content = blog.content
    }
  return (
    <main dir={dir} className={`flex flex-col p-8 container mx-auto w-full items-center gap-6 ${lang === "fa" || lang === "ar" ? "vazir" : ""}`}>
        <h1>{title}</h1>
        <div className="flex flex-col gap-1">
            <small className='self-end'>created: <TimeAgo timestamp={blog.createdAt}/></small>
            <small className='self-end'>updated: <TimeAgo timestamp={blog.updatedAt}/></small>
        </div>
        
        {/* image */}
        <div className="w-full rounded-lg overflow-hidden">
            <img 
                src={blog.imageSrc} alt=""
                className='h-full w-full object-cover'
            />
        </div>
        <p>
            {summary}
        </p>
        <section className={`ql-editor ${lang === "fa" || lang === "ar" ? "rtl" : "ltr"}`}  dangerouslySetInnerHTML={{__html: content}}>
        </section >
    </main>
  )
}

export default BlogPage