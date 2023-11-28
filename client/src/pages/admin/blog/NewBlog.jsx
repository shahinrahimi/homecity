import React from 'react'
import BlogForm from './BlogForm'
import { useNavigate } from 'react-router-dom'
import { createNewBlog } from '../../../api'
import { useMutation, useQueryClient } from 'react-query'
import { Loading, TagInputSelect } from '../../../components'

const NewBlog = () => {

    const naviagte = useNavigate()

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
    const [selectedTagIds, setSelectedTagIds] = React.useState([])
    const [files, setFiles] = React.useState("")

    const form = React.useRef(null)

    const queryClient = useQueryClient()

    const {
        mutate: createNewBlogMutation,
        isLoading,
        isSuccess,
        isError,
        error
    } = useMutation(createNewBlog, {
        onSuccess: () => {
            // invalidates cache and refetch
            queryClient.invalidateQueries("blogs")
        }
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const blogForm = new FormData()
        blogForm.set("blog-image", files[0])
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
        createNewBlogMutation({ blogForm })
    }

    React.useEffect(() => {
        if (isSuccess){
            naviagte("/admin/blog")
        }
    }, [isSuccess])

    let contentToShow = (
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
                
                buttonLabel={"create a blog"}
                handleSubmit={handleSubmit}
            />
    )

    if (isLoading){
        contentToShow = <Loading />
    }

    if (isError) {
        contentToShow = <>has error {JSON.stringify(error)}</>
    }

    return (
        <section>
            <h1 className='text-4xl text-c-black-500/75 uppercase font-light text-center mb-4'
            >New blog</h1>
            {contentToShow}
        </section>
    )
}

export default NewBlog