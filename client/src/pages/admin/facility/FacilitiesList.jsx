import React from 'react'
import { useFacilityStore, useAuthStore } from '../../../app/store'
import { getAllFacilities, createNewFacility, deleteFacility, updateFacility } from '../../../api';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { Loading } from '../../../components';
import { MdEdit as EditIcon } from "react-icons/md";
import { IoMdTrash as DeleteIcon } from "react-icons/io";

const FacilityList = () => {

  const queryClinet = useQueryClient()

  const token = useAuthStore.getState().token
  
  // make sure component rerender that updated state
  // just for admin pannel
  const { setFacilities } = useFacilityStore()
  let facilities = useFacilityStore.getState().facilities
  React.useEffect(() => {
    facilities = useFacilityStore.getState().facilities
  },[setFacilities])

  const [facilityEn, setFacilityEn] = React.useState("")
  const [facilityFa, setFacilityFa] = React.useState("")
  const [facilityAr, setFacilityAr] = React.useState("")
  const [facilityTr, setFacilityTr] = React.useState("")
  const [currentId, setCurrentId] = React.useState(null)
  const [files, setFiles] = React.useState("")

  const {
    isSuccess,
    isLoading,
    isError,
    error,
    data : facilityData,
  } = useQuery('facilities', getAllFacilities, {
      select: data => data.map(d => {
          return {...d, id: d._id, iconSrc: `http://localhost:5000/${d.icon}`}
      }),
  })

  const {
    isSuccess :isCreateSuccess,
    isLoading: isCreateLoading,
    isError: isCreateError,
    error: errorCreate,
    mutate: createNewFacilityMutation
  } = useMutation("facilities", createNewFacility, {
    onSuccess: () => {
      queryClinet.invalidateQueries()
    }
  })

  const {
    isSuccess :isUpdateSuccess,
    isLoading: isUpdateLoading,
    isError: isUpdateError,
    error: errorUpdate,
    mutate: updateFacilityMutation
  } = useMutation("facilities", updateFacility, {
    onSuccess: () => {
      queryClinet.invalidateQueries()
    }
  })

  const {
    isSuccess :isDeleteSuccess,
    isLoading: isDeleteLoading,
    isError: isDeleteError,
    error: errorDelete,
    mutate: deleteFacilityMutation
  } = useMutation("facilities", deleteFacility, {
    onSuccess: () => {
      queryClinet.invalidateQueries()
    }
  })

  const clearForm = () => {
    setCurrentId(null)
    setFacilityFa("")
    setFacilityEn("")
    setFacilityTr("")
    setFacilityAr("")
  }

  const handleEdit = (id) => {
    const facility = facilities.filter(t => t.id === id)[0]
    if (facility) {
      setFacilityEn(facility.en)
      setFacilityFa(facility.fa)
      setFacilityAr(facility.ar)
      setFacilityTr(facility.tr)
      setCurrentId(facility.id)
    }
  }

  const handleDelete = (id) => {
    const facility = facilities.filter(t => t.id === id)[0]
    if (confirm(`Are you sure to delete a facility: ${facility.en}`)){
      deleteFacilityMutation({
        id,
        accessToken: token
      })
    }
  }

  const handleCancel = (e) => {
    e.preventDefault()
    clearForm()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // confirm data
    if (facilityAr && facilityFa && facilityEn && facilityTr) {
      const facilityForm = new FormData()
      facilityForm.set("en", facilityEn.toLowerCase())
      facilityForm.set("fa", facilityFa.toLowerCase())
      facilityForm.set("ar", facilityAr.toLowerCase())
      facilityForm.set("tr", facilityTr.toLowerCase())
      if (files?.[0]){
        facilityForm.set("facility-icon", files[0])
      }
      
      // edit facility
      if (currentId){
        updateFacilityMutation({
          id: currentId,
          formData: facilityForm,
          accessToken: token
        })
      } 
      // add new facility
      if (!currentId){
        createNewFacilityMutation({
          formData: facilityForm,
          accessToken: token
        })
      }

    }
   
  }

  React.useEffect(() => {
    clearForm()
  }, [isSuccess, isCreateSuccess, isDeleteSuccess, isUpdateSuccess])

  if (isLoading || isDeleteLoading || isUpdateLoading || isCreateLoading){
    return <Loading />
  }

  
  return (
    <main className='flex flex-col justify-between h-[calc(80vh)] shadow-cutome-1 px-10 lg:px-20 py-8 lg:py-16'>
        <h1
        className='text-2xl lg:text-4xl text-c-black-500/75 uppercase font-light text-center mb-4'
        >facility manager</h1>
        <ul className='relative flex flex-col gap-1 w-full  flex-grow overflow-y-scroll [&>*:nth-child(odd)]:bg-gray-500/75 [&>*:nth-child(even)]:bg-gray-500/50 border-2 border-c-black-500 rounded-md'>
          {facilities.map((facility, index) => {
            return (
              <li
                key={index} 
                className='flex :bg-blue-500 text-xs justify-between items-center text-center gap-1 border border-b'>
                {/* index */}
                <div className="flex flex-col justify-between items-center bg-white  w-12 text-base h-full text-slate-500">
                  #{index+1}
                  <img src={facility.iconSrc}  className='w-5 h-5 mb-2' />
                </div>
                {/* controls delete */}
                
                {/* facilities */}
                <div className="flex flex-wrap justify-start w-full gap-4 text-white p-2">
                  <div className='px-2 py-1 bg-blue-500'>{facility.en}</div>
                  <div className='px-2 py-1 bg-blue-500 vazir'>{facility.fa}</div>
                  <div className='px-2 py-1 bg-blue-500'>{facility.tr}</div>
                  <div className='px-2 py-1 bg-blue-500 vazir'>{facility.ar}</div>
                </div>
                
                {/* controls */}
                <div className="flex flex-col bg-white  justify-between items-center h-full w-10 p-2 gap-5">
                  <div className="text-lg  text-orange-400/50 hover:text-orange-400 cursor-pointer">
                    <EditIcon
                      onClick={() => handleEdit(facility.id)}
                    />
                  </div>
                  <div className="text-lg  text-c-red-500/50 hover:text-c-red-500 cursor-pointer">
                    <DeleteIcon
                      onClick={() => handleDelete(facility.id)}
                    />
                  </div>

                </div>
                
              </li>
            )
          })}
        </ul>

        <form 
          className="bg-white flex flex-col w-full justify-between gap-4 rounded-md items-center text-xs"
          onSubmit={handleSubmit}
        >
          <h1 className='text-2xl lg:text-4xl text-c-black-500/75 uppercase font-light text-center mt-4'>{
            currentId ? "Edit Facility" : "Add new facility"
          }</h1>
          {/* inputs */}
          <div className="grid grid-cols-2 grid-rows-2 gap-2 w-full">
            {/* english */}
            <div className="flex flex-col gap-1">
              <label 
                  htmlFor="english"
                  className='uppercase'
              >english</label>
              <div className="relative px-3 py-2">
                  <input
                  
                  name='english'
                  type='text'
                  className='peer w-full focus:border-transparent active:border-transparent outline-none'
                  value={facilityEn}
                  onChange={(e) => setFacilityEn(e.target.value)}
                  />
                  {/* input animation border */}
                  <div className="absolute top-0 left-0 w-full h-full border border-c-blue-400 opacity-0 rounded-md  peer-focus:animate-input-active pointer-events-none bg-transparent"></div>

                  {/* input border */}
                  <div className="absolute top-0 left-0 w-full h-full border border-c-black-100/25 rounded-md peer-focus:border-transparent pointer-events-none bg-transparent"></div>
              </div>
            </div>

            {/* persian */}
            <div className="flex flex-col gap-1">
              <label 
                  htmlFor="persian"
                  className='uppercase'
              >persian</label>
              <div className="relative px-3 py-2">
                  <input
                  dir='rtl'
                  name='persian'
                  type='text'
                  className='peer w-full focus:border-transparent active:border-transparent outline-none'
                  value={facilityFa}
                  onChange={(e) => setFacilityFa(e.target.value)}
                  />
                  {/* input animation border */}
                  <div className="absolute top-0 left-0 w-full h-full border border-c-blue-400 opacity-0 rounded-md  peer-focus:animate-input-active pointer-events-none bg-transparent"></div>

                  {/* input border */}
                  <div className="absolute top-0 left-0 w-full h-full border border-c-black-100/25 rounded-md peer-focus:border-transparent pointer-events-none bg-transparent"></div>
              </div>
            </div>

            {/* turkish */}
            <div className="flex flex-col gap-1">
              <label 
                  htmlFor="turkish"
                  className='uppercase'
              >turkish</label>
              <div className="relative px-3 py-2">
                  <input
                  name='turkish'
                  type='text'
                  className='peer w-full focus:border-transparent active:border-transparent outline-none'
                  value={facilityTr}
                  onChange={(e) => setFacilityTr(e.target.value)}
                  />
                  {/* input animation border */}
                  <div className="absolute top-0 left-0 w-full h-full border border-c-blue-400 opacity-0 rounded-md  peer-focus:animate-input-active pointer-events-none bg-transparent"></div>

                  {/* input border */}
                  <div className="absolute top-0 left-0 w-full h-full border border-c-black-100/25 rounded-md peer-focus:border-transparent pointer-events-none bg-transparent"></div>
              </div>
            </div>

            {/* arabic */}
            <div className="flex flex-col gap-1">
              <label 
                  htmlFor="arabic"
                  className='uppercase'
              >arabic</label>
              <div className="relative px-3 py-2">
                  <input
                  dir='rtl'
                  name='arabic'
                  type='text'
                  className='peer w-full focus:border-transparent active:border-transparent outline-none'
                  value={facilityAr}
                  onChange={(e) => setFacilityAr(e.target.value)}
                  />
                  {/* input animation border */}
                  <div className="absolute top-0 left-0 w-full h-full border border-c-blue-400 opacity-0 rounded-md  peer-focus:animate-input-active pointer-events-none bg-transparent"></div>

                  {/* input border */}
                  <div className="absolute top-0 left-0 w-full h-full border border-c-black-100/25 rounded-md peer-focus:border-transparent pointer-events-none bg-transparent"></div>
              </div>
            </div>

            {/* icon */}
            <div className="flex flex-col gap-1">
              <label 
                  htmlFor="icon"
                  className='uppercase'
              >icon</label>
              <div className="relative px-3 py-2">
                  <input
                  name='icon'
                  type='file'
                  className='peer w-full focus:border-transparent active:border-transparent outline-none file:border file:text-white file:bg-c-black-500 file:cursor-pointer file:hover:bg-c-black-300 file:transition-all file:rounded-lg'
                  accept="image/png"
                  onChange={(e) => setFiles(e.target.files)}
                  />
                  
                  {/* input animation border */}
                  <div className="absolute top-0 left-0 w-full h-full border border-c-blue-400 opacity-0 rounded-md  peer-focus:animate-input-active pointer-events-none bg-transparent"></div>

                  {/* input border */}
                  <div className="absolute top-0 left-0 w-full h-full border border-c-black-100/25 rounded-md peer-focus:border-transparent pointer-events-none bg-transparent"></div>
              </div>
              <p className="text-xs text-gray-500" id="file_input_help">PNG</p>
            </div>
            
          </div>
          
          {/* controls */}
          <div className="flex flex-row gap-1 justify-between w-full mt-2 text-sm">
              <button
                className='w-full border-2 grid place-content-center px-4 py-2  transition-colors cursor-pointer font-semibold capitalize hover:border-c-black-500 hover:text-c-black-500 text-white bg-orange-400/75 hover:bg-orange-400 border-white'
                onClick={handleCancel}
              >cancel</button>
              <button
                className='w-full border-2  grid place-content-center px-4 py-2 transition-colors cursor-pointer font-semibold capitalize hover:border-c-black-500 hover:text-c-black-500 text-white bg-c-green-800/75 hover:bg-c-green-800 border-white'                
                type='submit'
                disabled={!(facilityAr && facilityFa && facilityEn && facilityTr)}
              >Save</button>
          </div>
          
        </form>
    </main>
  )
}

export default FacilityList