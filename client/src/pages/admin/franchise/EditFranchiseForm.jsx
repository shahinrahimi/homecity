import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation, useQueryClient } from 'react-query'
import { useAuthStore } from '../../../app/store'
import FranchiseForm from './FranchiseForm'
import { updateFranchise } from '../../../api'
import { Loading } from "../../../components"

const EditFranchiseForm = ({ franchise }) => {

  const token = useAuthStore.getState().token
  const navigate = useNavigate()

  const tagIds = franchise.tags.map(tag => tag._id)
  const franchiseFa = franchise.translations.filter(t => t.language === "fa")[0]
  const franchiseAr = franchise.translations.filter(t => t.language === "ar")[0]
  const franchiseTr = franchise.translations.filter(t => t.language === "tr")[0]

  const form = React.useRef(null)
  const [title, setTitle] = React.useState(franchise.title)
  const [content, setContent] = React.useState(franchise.content)
  const [title_fa, setTitle_fa] = React.useState(franchiseFa.title)
  const [content_fa, setContent_fa] = React.useState(franchiseFa.content)
  const [title_ar, setTitle_ar] = React.useState(franchiseAr.title)
  const [content_ar, setContent_ar] = React.useState(franchiseAr.content)
  const [title_tr, setTitle_tr] = React.useState(franchiseTr.title)
  const [content_tr, setContent_tr] = React.useState(franchiseTr.content)

  const [country, setCountry] = React.useState(franchise.country)

  const [averageCost, setAverageCost] = React.useState(franchise.averageCost);
  const [branchCount, setBranchCount] = React.useState(franchise.branchCount);
  const [startYear, setStartYear] = React.useState(franchise.startYear) 

  const [selectedTagIds, setSelectedTagIds] = React.useState(tagIds)

  const [brand, setBrand] = React.useState([])
  const [cover, setCover] = React.useState([])
  const [images, setImages] = React.useState([])

  const queryClient = useQueryClient()
  const {
    isSuccess,
    isLoading,
    isError,
    error,
    mutate: updateFranchiseMutation
  } = useMutation('franchises', updateFranchise, {
    onSuccess: () => {
      // invalidates cache and refetch
      queryClient.invalidateQueries("franchises")
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const requiredFileds = [
      title,
      content,
      title_fa,
      content_fa,
      title_tr,
      content_tr,
      title_ar,
      content_ar,
      country,
      startYear,
      averageCost,
      branchCount
    ]

    // confirm data
    if (requiredFileds.every(feild => feild)){
      const franchiseForm = new FormData()
      franchiseForm.set("title", title)
      franchiseForm.set("content", content)
      franchiseForm.set("title_fa", title_fa)
      franchiseForm.set("content_fa", content_fa)
      franchiseForm.set("title_ar", title_ar)
      franchiseForm.set("content_ar", content_ar)
      franchiseForm.set("title_tr", title_tr)
      franchiseForm.set("content_tr", content_tr)
      franchiseForm.set("country", country)
    
      franchiseForm.set("start_year", startYear)
      franchiseForm.set("average_cost", averageCost)
      franchiseForm.set("branch_count", branchCount)

      franchiseForm.set("tags_csv", selectedTagIds.join())

      for (let i = 0; i < brand.length; i++){
        franchiseForm.append("franchise_brand", brand.item(i))
      }

      for (let i = 0; i < cover.length; i++){
        franchiseForm.append("franchise_cover", cover.item(i))
      }

      for (let i = 0; i < images.length; i++){
          franchiseForm.append("franchise_images", images.item(i))
      }

      updateFranchiseMutation({ id: franchise.id, formData: franchiseForm, accessToken: token})

    }

  }

  React.useEffect(() => {
    if (isSuccess){
      navigate("/admin/franchise")
    }
  }, [isSuccess])

  React.useEffect(() => {
      if (error){
        console.log(error?.request?.response)
      }
  }, [error])

  let contentToShow = (
    <FranchiseForm
        form={form}
        title={title}
        setTitle={setTitle}
        content={content}
        setContent={setContent}

        title_fa={title_fa}
        setTitle_fa={setTitle_fa}
        content_fa={content_fa}
        setContent_fa={setContent_fa}

        title_ar={title_ar}
        setTitle_ar={setTitle_ar}
        content_ar={content_ar}
        setContent_ar={setContent_ar}

        title_tr={title_tr}
        setTitle_tr={setTitle_tr}
        content_tr={content_tr}
        setContent_tr={setContent_tr}

        country={country}
        setCountry={setCountry}

        startYear={startYear}
        setStartYear={setStartYear}
        averageCost={averageCost}
        setAverageCost={setAverageCost}
        branchCount={branchCount}
        setBranchCount={setBranchCount}

        selectedTagIds={selectedTagIds}
        setSelectedTagIds={setSelectedTagIds}

        setBrand={setBrand}
        setCover={setCover}
        setImages={setImages}
        
        
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
          >Edit franchise</h1>
          {contentToShow}
      </section>
  )
}

export default EditFranchiseForm