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
    
    const [country, setCountry] = React.useState("")
    const [city, setCity] = React.useState("")
    const [district, setDistrict] = React.useState("")

    const [startingPrice, setStartingPrice] = React.useState(0);
    const [totalArea, setTotalArea] = React.useState(0);
    const [totalUnits, setTotalUnits] = React.useState(0);
  
    // State for boolean props with default value false
    const [isPreSale, setIsPreSale] = React.useState(false);
    const [isInstallment, setIsInstallment] = React.useState(false);

    const [selectedTagIds, setSelectedTagIds] = React.useState([])
    const [selectedFacilityIds, setSelectedFacilityIds] = React.useState([])
    const [images, setImages] = React.useState([])
    const [video, setVideo] = React.useState("")

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

        const requiredFileds = [
            title,
            summary,
            content,
            title_fa,
            summary_fa,
            content_fa,
            title_tr,
            summary_tr,
            content_tr,
            title_ar,
            summary_ar,
            content_ar,
            startingPrice,
            totalArea,
            totalUnits
        ]

        // confirm data
        if (requiredFileds.every(feild => feild)){
            const projectForm = new FormData()
            projectForm.set("title", title)
            projectForm.set("summary", summary)
            projectForm.set("content", content)
            projectForm.set("title_fa", title_fa)
            projectForm.set("summary_fa", summary_fa)
            projectForm.set("content_fa", content_fa)
            projectForm.set("title_ar", title_ar)
            projectForm.set("summary_ar", summary_ar)
            projectForm.set("content_ar", content_ar)
            projectForm.set("title_tr", title_tr)
            projectForm.set("summary_tr", summary_tr)
            projectForm.set("content_tr", content_tr)

            projectForm.set("starting_price", startingPrice)
            projectForm.set("total_area", totalArea)
            projectForm.set("total_units", totalUnits)

            projectForm.set("isPreSale", isPreSale)
            projectForm.set("isInstallment", isInstallment)

            projectForm.set("tags_csv", selectedTagIds.join())
            projectForm.set("facilites_csv", selectedFacilityIds.join())

            for (let i = 0; i < images.length; i++){
                projectForm.append("project_images", images.item(i))
            }

            if (video !== "" && video.item(0)){
                projectForm.set("project_video", video.item(0))
            }
            
            createNewProjectMutation({ formData: projectForm, accessToken: token })
        }
    }

    React.useEffect(() => {
      if (isSuccess){
        //   naviagte("/admin/project")
      }
    }, [isSuccess])

    React.useEffect(() => {
        if (error){
          console.log(error?.request?.response)
        }
    }, [error])

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

            country={country}
            setCountry={setCountry}
            city={city}
            setCity={setCity}
            district={district}
            setDistrict={setDistrict}

            startingPrice={startingPrice}
            setStartingPrice={setStartingPrice}
            totalArea={totalArea}
            setTotalArea={setTotalArea}
            totalUnits={totalUnits}
            setTotalUnits={setTotalUnits}
            isPreSale={isPreSale}
            setIsPreSale={setIsPreSale}
            isInstallment={isInstallment}
            setIsInstallment={setIsInstallment}

            selectedTagIds={selectedTagIds}
            setSelectedTagIds={setSelectedTagIds}

            selectedFacilityIds={selectedFacilityIds}
            setSelectedFaciltyIds={setSelectedFacilityIds}

            setImages={setImages}
            setVideo={setVideo}
            
            buttonLabel={"create a project"}
            handleSubmit={handleSubmit}
            />
    )

    if (isLoading){
        contentToShow = <Loading />
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