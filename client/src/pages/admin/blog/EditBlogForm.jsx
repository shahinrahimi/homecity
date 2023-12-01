import React from 'react'
import { Navigate } from 'react-router-dom'
import { useMutation, useQueryClient } from 'react-query'
import { useAuthStore } from '../../../app/store'


import BlogForm from './BlogForm'
import { updateBlog } from '../../../api'
import { Loading } from "../../../components"
const EditBlogForm = ({ blog }) => {

  const token = useAuthStore.getState().token

  const tagIds = blog.tags.map(tag => tag._id)
  const blogFa = blog.translations.filter(t => t.language === "fa")[0]
  const blogAr = blog.translations.filter(t => t.language === "ar")[0]
  const blogTr = blog.translations.filter(t => t.language === "tr")[0]

  const form = React.useRef(null)
  const [title, setTitle] = React.useState(blog.title)
  const [summary, setSummery] = React.useState(blog.summary)
  const [content, setContent] = React.useState(blog.content)
  const [title_fa, setTitle_fa] = React.useState(blogFa.title)
  const [summary_fa, setSummery_fa] = React.useState(blogFa.summary)
  const [content_fa, setContent_fa] = React.useState(blogFa.content)
  const [title_ar, setTitle_ar] = React.useState(blogAr.title)
  const [summary_ar, setSummery_ar] = React.useState(blogAr.summary)
  const [content_ar, setContent_ar] = React.useState(blogAr.content)
  const [title_tr, setTitle_tr] = React.useState(blogTr.title)
  const [summary_tr, setSummery_tr] = React.useState(blogTr.summary)
  const [content_tr, setContent_tr] = React.useState(blogTr.content)
  const [selectedTagIds, setSelectedTagIds] = React.useState(tagIds)
  const [files, setFiles] = React.useState("")

  const queryClient = useQueryClient()
  const {
    isSuccess,
    isLoading,
    isError,
    error,
    mutate: updateBlogMutation
  } = useMutation('blogs', updateBlog, {
    onSuccess: () => {
      // invalidates cache and refetch
      queryClient.invalidateQueries("blogs")
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const blogForm = new FormData()
    if (files?.[0]){
      blogForm.set("blog-image", files[0])
    }
    blogForm.set("title", title)
    blogForm.set("summary", summary)
    blogForm.set("content", content)
    blogForm.set("title_fa", title_fa)
    blogForm.set("summary_fa", summary_fa)
    blogForm.set("content_fa", content_fa)
    blogForm.set("title_ar", title_ar)
    blogForm.set("summary_ar", summary_ar)
    blogForm.set("content_ar", content_ar)
    blogForm.set("title_tr", title_tr)
    blogForm.set("summary_tr", summary_tr)
    blogForm.set("content_tr", content_tr)
    blogForm.set("tags_csv", selectedTagIds.join())
    updateBlogMutation({ id: blog.id, formData: blogForm , accessToken: token })
  }

  if (isLoading){
    return <Loading /> 
  }

  if (isSuccess){
    return <Navigate to="/admin/blog" />
  }

  return (
    <main>
      <h1 className='text-4xl text-c-black-500/75 uppercase font-light text-center mb-4'
      >Edit Blog</h1>
      <BlogForm
          form={form}
          title={title}
          setTitle={setTitle}
          summery={summary}
          setSummery={setSummery}
          content={content}
          setContent={setContent}

          title_fa={title_fa}
          setTitle_fa={setTitle_fa}
          summery_fa={summary_fa}
          setSummery_fa={setSummery_fa}
          content_fa={content_fa}
          setContent_fa={setContent_fa}

          title_ar={title_ar}
          setTitle_ar={setTitle_ar}
          summery_ar={summary_ar}
          setSummery_ar={setSummery_ar}
          content_ar={content_ar}
          setContent_ar={setContent_ar}

          title_tr={title_tr}
          setTitle_tr={setTitle_tr}
          summery_tr={summary_tr}
          setSummery_tr={setSummery_tr}
          content_tr={content_tr}
          setContent_tr={setContent_tr}

          selectedTagIds={selectedTagIds}
          setSelectedTagIds={setSelectedTagIds}

          setFiles={setFiles}
          
          buttonLabel={"save changes"}
          handleSubmit={handleSubmit}
      />
    </main>
  )
}

export default EditBlogForm