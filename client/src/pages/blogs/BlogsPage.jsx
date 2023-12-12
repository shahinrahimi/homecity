import React from 'react'
import { Section } from '../../components'
import { useBlogStore } from '../../app/store'
import BlogListItem from './BlogListItem'
const BlogsPage = () => {
    const { blogs } = useBlogStore()

    console.log(blogs)

  return (
    <Section>
      <main className="min-h-[calc(80vh)] mt-20 grid place-content-center w-full">
        <ul className='flex flex-col gap-10 p-2'>
          {blogs.map((blog, index) => {
            return <BlogListItem blog={blog} key={index} />
          })}
        </ul>
      </main>
    </Section>
  )
}

export default BlogsPage