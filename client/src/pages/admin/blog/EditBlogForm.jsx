import React from 'react'
import BlogForm from './BlogForm'

const EditBlogForm = () => {
  const form = React.useRef()
  const [title, setTitle] = React.useState("test")
  const [summary, setSummery] = React.useState("test")
  const [content, setContent] = React.useState("<h1>test</h1>")
  const [title_fa, setTitle_fa] = React.useState("test_fa")
  const [summary_fa, setSummery_fa] = React.useState("test_fa")
  const [content_fa, setContent_fa] = React.useState("<h1>test_fa</h1>")
  const [title_ar, setTitle_ar] = React.useState("test_ar")
  const [summary_ar, setSummery_ar] = React.useState("test_ar")
  const [content_ar, setContent_ar] = React.useState("<h1>test_ar</h1>")
  const [title_tr, setTitle_tr] = React.useState("test_tr")
  const [summary_tr, setSummery_tr] = React.useState("test_tr")
  const [content_tr, setContent_tr] = React.useState("<h1>test_tr</h1>")
  const [files, setFiles] = React.useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(file)
  }

  return (
    <section>
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

        setFiles={setFiles}
        
        handleSubmit={handleSubmit}
      />
    </section>
  )
}

export default EditBlogForm