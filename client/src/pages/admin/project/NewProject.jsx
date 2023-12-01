import React from 'react'
import { useNavigate } from 'react-router-dom'
import { createNewProject } from '../../../api'
import { useMutation, useQueryClient } from 'react-query'
import { useAuthStore } from '../../../app/store'
import ProjectForm from './ProjectForm'
import { Loading } from '../../../components'

const NewProject = () => {
  const naviagte = useNavigate()
    const token = useAuthStore.getState().token

    const form = React.useRef(null)
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
    const [selectedFacilityIds, setSelectedFacilityIds] = React.useState([])
    const [files, setFiles] = React.useState("")

    const queryClient = useQueryClient()

    const {
        mutate: createNewProjectMutation,
        isLoading,
        isSuccess,
        isError,
        error
    } = useMutation(createNewProject, {
        onSuccess: () => {
            // invalidates cache and refetch
            queryClient.invalidateQueries("facilities")
        }
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const projectData = new FormData()
        projectData.set("blog-image", files[0])
        projectData.set("title", title)
        projectData.set("summary", summary)
        projectData.set("content", content)
        projectData.set("title_fa", title_fa)
        projectData.set("summary_fa", summary_fa)
        projectData.set("content_fa", content_fa)
        projectData.set("title_ar", title_ar)
        projectData.set("summary_ar", summary_ar)
        projectData.set("content_ar", content_ar)
        projectData.set("title_tr", title_tr)
        projectData.set("summary_tr", summary_tr)
        projectData.set("content_tr", content_tr)
        projectData.set("tags_csv", selectedTagIds.join())
        projectData.set("facilites_csv", selectedFacilityIds.join())
        createNewProjectMutation({ formData: projectData, accessToken: token })
    }

    React.useEffect(() => {
      if (isSuccess){
          naviagte("/admin/project")
      }
    }, [isSuccess])

    let contentToShow = (
        <ProjectForm
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

            selectedFacilityIds={selectedFacilityIds}
            setSelectedFaciltyIds={setSelectedFacilityIds}

            setFiles={setFiles}
            
            buttonLabel={"create a project"}
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
            >New project</h1>
            {contentToShow}
        </section>
    )
}

export default NewProject