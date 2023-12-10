import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation, useQueryClient } from 'react-query'
import { useAuthStore } from '../../../app/store'
import ProjectForm from './ProjectForm'
import { updateProject } from '../../../api'
import { Loading } from "../../../components"

const EditProjectForm = ({ project }) => {

  const token = useAuthStore.getState().token
  const navigate = useNavigate()

  const tagIds = project.tags.map(tag => tag._id)
  const facilityIds = project.facilities.map(facility => facility._id)
  const projectFa = project.translations.filter(t => t.language === "fa")[0]
  const projectAr = project.translations.filter(t => t.language === "ar")[0]
  const projectTr = project.translations.filter(t => t.language === "tr")[0]

  const form = React.useRef(null)
  const [title, setTitle] = React.useState(project.title)
  const [summary, setSummery] = React.useState(project.summary)
  const [content, setContent] = React.useState(project.content)
  const [title_fa, setTitle_fa] = React.useState(projectFa.title)
  const [summary_fa, setSummery_fa] = React.useState(projectFa.summary)
  const [content_fa, setContent_fa] = React.useState(projectFa.content)
  const [title_ar, setTitle_ar] = React.useState(projectAr.title)
  const [summary_ar, setSummery_ar] = React.useState(projectAr.summary)
  const [content_ar, setContent_ar] = React.useState(projectAr.content)
  const [title_tr, setTitle_tr] = React.useState(projectTr.title)
  const [summary_tr, setSummery_tr] = React.useState(projectTr.summary)
  const [content_tr, setContent_tr] = React.useState(projectTr.content)

  const [country, setCountry] = React.useState(project.country)
  const [city, setCity] = React.useState(project.city)
  const [district, setDistrict] = React.useState(project.district)

  const [startingPrice, setStartingPrice] = React.useState(project.startingPrice);
  const [totalArea, setTotalArea] = React.useState(project.totalArea);
  const [totalUnits, setTotalUnits] = React.useState(project.totalUnits);
  const [startYear, setStartYear] = React.useState(project.startYear)
  const [endYear, setEndYear] = React.useState(project.endYear)
  const [maxRoomCount, setMaxRoomCount] = React.useState(project.maxRoomCount);
  const [maxBathCount, setMaxBathCount] = React.useState(project.maxBathCount);

  // State for boolean props with default value false
  const [isPreSale, setIsPreSale] = React.useState(project.isPreSale);
  const [isInstallment, setIsInstallment] = React.useState(project.isInstallment);

  const [selectedTagIds, setSelectedTagIds] = React.useState(tagIds)
  const [selectedFacilityIds, setSelectedFacilityIds] = React.useState(facilityIds)
  const [cover, setCover] = React.useState([])
  const [images, setImages] = React.useState([])
  const [video, setVideo] = React.useState([])

  const queryClient = useQueryClient()
  const {
    isSuccess,
    isLoading,
    isError,
    error,
    mutate: updateProjectMutation
  } = useMutation('projects', updateProject, {
    onSuccess: () => {
      // invalidates cache and refetch
      queryClient.invalidateQueries("projects")
    }
  })

  const handleSubmit = (e) => {
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
      country,
      city,
      district
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
      projectForm.set("country", country)
      projectForm.set("city", city)
      projectForm.set("district", district)


      projectForm.set("starting_price", startingPrice)
      projectForm.set("total_area", totalArea)
      projectForm.set("total_units", totalUnits)
      projectForm.set("start_year", startYear)
      projectForm.set("end_year", endYear)
      projectForm.set("starting_price", startingPrice)
      projectForm.set("total_area", totalArea)
      projectForm.set("total_units", totalUnits)
      projectForm.set("max_room_count", maxRoomCount)
      projectForm.set("max_bath_count", maxBathCount)

      projectForm.set("is_presale", isPreSale)
      projectForm.set("is_installment", isInstallment)

      projectForm.set("tags_csv", selectedTagIds.join())
      projectForm.set("facilities_csv", selectedFacilityIds.join())

      for (let i = 0; i < cover.length; i++){
        projectForm.append("project_cover", cover.item(i))
    }

      for (let i = 0; i < images.length; i++){
          projectForm.append("project_images", images.item(i))
      }

      for (let i = 0; i < video.length; i++){
          projectForm.append("project_video", video.item(i))
      }

      updateProjectMutation({ id: project.id, formData: projectForm, accessToken: token})

    }

  }

  React.useEffect(() => {
    if (isSuccess){
      navigate("/admin/project")
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
        startYear={startYear}
        setStartYear={setStartYear}
        endYear={endYear}
        setEndYear={setEndYear}
        maxRoomCount={maxRoomCount}
        setMaxRoomCount={setMaxRoomCount}
        maxBathCount={maxBathCount}
        setMaxBathCount={setMaxBathCount}

        isPreSale={isPreSale}
        setIsPreSale={setIsPreSale}
        isInstallment={isInstallment}
        setIsInstallment={setIsInstallment}

        selectedTagIds={selectedTagIds}
        setSelectedTagIds={setSelectedTagIds}

        selectedFacilityIds={selectedFacilityIds}
        setSelectedFaciltyIds={setSelectedFacilityIds}

        setCover={setCover}
        setImages={setImages}
        setVideo={setVideo}
        
        buttonLabel={"save change"}
        handleSubmit={handleSubmit}
        />
)

  if (isLoading){
      contentToShow = <Loading />
  }

  return (
      <section>
          <h1 className='text-4xl text-c-black-500/75 uppercase font-light text-center mb-4'
          >Edit project</h1>
          {contentToShow}
      </section>
  )
}

export default EditProjectForm