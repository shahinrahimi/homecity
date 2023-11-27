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

    const blogFa = blog.trans.filter(t => t.language === "fa")[0]
    const blogAr = blog.trans.filter(t => t.language === "ar")[0]
    const blogTr = blog.trans.filter(t => t.language === "tr")[0]

    let blogToShow = {}
    blogToShow.imageSrc = blog.imageSrc
    if (lang === "fa") {
        blogToShow.title = blogFa.title
        blogToShow.summary = blogFa.summary
        blogToShow.content = blogFa.content
    } else if (lang === "tr") {
        blogToShow.title = blogTr.title
        blogToShow.summary = blogTr.summary
        blogToShow.content = blogTr.content
    } else if (lang === "ar") {
        blogToShow.title = blogAr.title
        blogToShow.summary = blogAr.summary
        blogToShow.content = blogAr.content
    } else {
        blogToShow = blog
    }
  return (
    <main className='flex flex-col w-full items-center gap-6'>
        <h1>{blogToShow.title}</h1>
        <div className="flex flex-col gap-1">
            <small className='self-end'>created: <TimeAgo timestamp={blog.createdAt}/></small>
            <small className='self-end'>updated: <TimeAgo timestamp={blog.updatedAt}/></small>
        </div>
        
        {/* image */}
        <div className="w-full rounded-lg overflow-hidden">
            <img 
                src={blogToShow.imageSrc} alt=""
                className='h-full w-full object-cover'
            />
        </div>
        <summary dir={dir}>
            {blogToShow.summary}
        </summary>
        <article dir={dir} dangerouslySetInnerHTML={{__html: blogToShow.content}}>
        </article>
    </main>
  )
}

export default BlogPage