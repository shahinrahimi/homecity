import React from 'react'
import { LanguageContext } from '../../context/LanguageContext'
import { Link } from 'react-router-dom'
const BlogListItem = ({ blog }) => {

    const { lang, setLang, dir } = React.useContext(LanguageContext)

    const blogFa = blog.translations.filter(t => t.language === "fa")[0]
    const blogAr = blog.translations.filter(t => t.language === "ar")[0]
    const blogTr = blog.translations.filter(t => t.language === "tr")[0]

    let title, summary
    if (lang === "fa"){
        title = blogFa.title
        summary = blogFa.summary
    } else if (lang === "ar") {
        title = blogAr.title
        summary = blogAr.summary
    } else if (lang === "tr") {
        title = blogTr.title
        summary = blogTr.summary
    } else {
        title = blog.title,
        summary = blog.summary
    }
    
  return (
    <Link to={`${blog.id}`} dir={dir} className={`flex h-96 justify-between rounded-lg items-center shadow-sharp gap-4 group  ${lang === "fa" || lang === "ar" ? "vazir" : ""}`}>
        {/* image */}
        <div className="basis-1/3 group-hover:basis-1/2 transition-all shrink-0 rounded-lg overflow-hidden h-full">
            <img  src={blog.imageSrc} className='w-full h-full object-cover' />
        </div>
        {/*  */}

        {/* content */}
        <div className="p-8">
            <h1 className="text-3xl font-medium mb-4">{title}</h1>
            <p>{summary.length > 150 ? summary.slice(0.149) + "..." : summary}</p>
        </div>
    </Link>
  )
}

export default BlogListItem