import React from 'react'
import { useNavigate } from 'react-router-dom'
import { createNewFranchise } from '../../../api'
import { useMutation, useQueryClient } from 'react-query'
import { useAuthStore } from '../../../app/store'
import FranchiseForm from './FranchiseForm'
import { Loading } from '../../../components'

const NewFranchise = () => {
    const navigate = useNavigate()
    const token = useAuthStore.getState().token

    const form = React.useRef(null)
    const [title, setTitle] = React.useState("test_franchise")
    const [content, setContent] = React.useState("<h1>test_franchise</h1>")
    const [title_fa, setTitle_fa] = React.useState("test_franchise_fa")
    const [content_fa, setContent_fa] = React.useState("<h1>test_franchise_fa</h1>")
    const [title_ar, setTitle_ar] = React.useState("test_franchise_ar")
    const [content_ar, setContent_ar] = React.useState("<h1>test_franchise_ar</h1>")
    const [title_tr, setTitle_tr] = React.useState("test_franchise_tr")
    const [content_tr, setContent_tr] = React.useState("<h1>test_franchise_tr</h1>")
    
    const [country, setCountry] = React.useState("")

    const [averageCost, setAverageCost] = React.useState(0);
    const [branchCount, setBranchCount] = React.useState(1);
    const [startYear, setStartYear]  = React.useState(1980);

    const [selectedTagIds, setSelectedTagIds] = React.useState([])

    const [brand, setBrand] = React.useState([])
    const [cover, setCover] = React.useState([])
    const [images, setImages] = React.useState([])

    const queryClient = useQueryClient()
    const {
        mutate: createNewFranchiseMutation,
        isLoading,
        isSuccess,
        isError,
        error
    } = useMutation(createNewFranchise, {
        onSuccess: () => {
            // invalidates cache and refetch
            queryClient.invalidateQueries("franchises")
        }
    })

    const handleSubmit = async (e) => {
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

        const confirmdata = requiredFileds.every(feild => feild)

        // confirm data
        if (confirmdata){
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

            createNewFranchiseMutation({ formData: franchiseForm, accessToken: token })
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
            
            buttonLabel={"create a franchise"}
            handleSubmit={handleSubmit}
            />
    )

    if (isLoading){
        contentToShow = <Loading />
    }

    return (
        <section>
            <h1 className='text-4xl text-c-black-500/75 uppercase font-light text-center mb-4'
            >New franchise</h1>
            {contentToShow}
        </section>
    )
}

export default NewFranchise