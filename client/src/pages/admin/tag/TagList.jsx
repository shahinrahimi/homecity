import React from 'react'
import { useTagStore, useAuthStore } from '../../../app/store'
import { getAllTags, createNewTag, deleteTag, updateTag } from '../../../api';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { Loading } from '../../../components';
import { MdEdit as EditIcon } from "react-icons/md";
import { IoMdTrash as DeleteIcon } from "react-icons/io";


const TagList = () => {

  const queryClinet = useQueryClient()
  
  const { token } = useAuthStore()
  const { setTags, tags } = useTagStore()

  const [tagEn, setTagEn] = React.useState("")
  const [tagFa, setTagFa] = React.useState("")
  const [tagAr, setTagAr] = React.useState("")
  const [tagTr, setTagTr] = React.useState("")
  const [currentId, setCurrentId] = React.useState(null)

  const {
    isSuccess,
    isLoading,
    isError,
    error,
    data : tagData,
  } = useQuery('tags', getAllTags, {
      select: data => data.map(d => {
          return {...d, id: d._id }
      }),
  })

  const {
    isSuccess :isCreateSuccess,
    isLoading: isCreateLoading,
    isError: isCreateError,
    error: errorCreate,
    mutate: createNewTagMutation
  } = useMutation("tags", createNewTag, {
    onSuccess: () => {
      queryClinet.invalidateQueries()
    }
  })

  const {
    isSuccess :isUpdateSuccess,
    isLoading: isUpdateLoading,
    isError: isUpdateError,
    error: errorUpdate,
    mutate: updateTagMutation
  } = useMutation("tags", updateTag, {
    onSuccess: () => {
      queryClinet.invalidateQueries()
    }
  })

  const {
    isSuccess :isDeleteSuccess,
    isLoading: isDeleteLoading,
    isError: isDeleteError,
    error: errorDelete,
    mutate: deleteTagMutation
  } = useMutation("tags", deleteTag, {
    onSuccess: () => {
      queryClinet.invalidateQueries()
    }
  })

  const clearForm = () => {
    setCurrentId(null)
    setTagFa("")
    setTagEn("")
    setTagAr("")
    setTagTr("")
  }

  const handleEdit = (id) => {
    const tag = tags.filter(t => t.id === id)[0]
    if (tag) {
      setTagEn(tag.en)
      setTagFa(tag.fa)
      setTagAr(tag.ar)
      setTagTr(tag.tr)
      setCurrentId(tag.id)
    }
  }

  const handleDelete = (id) => {
    const tag = tags.filter(t => t.id === id)[0]
    if (confirm(`Are you sure to delete a tag: ${tag.en}`)){
      deleteTagMutation({
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
    if (tagAr && tagFa && tagEn && tagTr) {

      const tagObj = {
        en: tagEn.toLowerCase(),
        fa: tagFa.toLowerCase(),
        ar: tagAr.toLowerCase(),
        tr: tagTr.toLowerCase(),
      }
      // edit tag
      if (currentId){
        updateTagMutation({
          id: currentId,
          data: tagObj,
          accessToken: token
        })
      } 
      // add new tag
      if (!currentId){
        createNewTagMutation({
          data: tagObj,
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
        >tag manager</h1>
        <ul className='relative flex flex-col gap-1 w-full  flex-grow overflow-y-scroll [&>*:nth-child(odd)]:bg-gray-500/75 [&>*:nth-child(even)]:bg-gray-500/50 border-2 border-c-black-500 rounded-md'>
          {tags.map((tag, index) => {
            return (
              <li
                key={index} 
                className='flex :bg-blue-500 text-xs justify-between items-center text-center gap-1 border border-b'>
                {/* index */}
                <div className="grid place-content-center bg-white  w-12 text-base h-full text-slate-500">
                  #{index+1}
                </div>
                {/* controls delete */}
                
                {/* tags */}
                <div className="flex flex-wrap justify-start w-full gap-4 text-white p-2">
                  <div className='px-2 py-1 bg-blue-500'>{tag.en}</div>
                  <div className='px-2 py-1 bg-blue-500 vazir'>{tag.fa}</div>
                  <div className='px-2 py-1 bg-blue-500'>{tag.tr}</div>
                  <div className='px-2 py-1 bg-blue-500 vazir'>{tag.ar}</div>
                </div>
                
                {/* controls */}
                <div className="flex flex-col bg-white  justify-between items-center h-full w-10 p-2 gap-5">
                  <div className="text-lg  text-orange-400/50 hover:text-orange-400 cursor-pointer">
                    <EditIcon
                      onClick={() => handleEdit(tag.id)}
                    />
                  </div>
                  <div className="text-lg  text-c-red-500/50 hover:text-c-red-500 cursor-pointer">
                    <DeleteIcon
                      onClick={() => handleDelete(tag.id)}
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
            currentId ? "Edit Tag" : "Add new tag"
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
                  value={tagEn}
                  onChange={(e) => setTagEn(e.target.value)}
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
              <div className="relative px-3 py-2 vazir">
                  <input
                  dir='rtl'
                  name='persian'
                  type='text'
                  className='peer w-full focus:border-transparent active:border-transparent outline-none'
                  value={tagFa}
                  onChange={(e) => setTagFa(e.target.value)}
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
                  value={tagTr}
                  onChange={(e) => setTagTr(e.target.value)}
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
              <div className="relative px-3 py-2 vazir">
                  <input
                  dir='rtl'
                  name='arabic'
                  type='text'
                  className='peer w-full focus:border-transparent active:border-transparent outline-none'
                  value={tagAr}
                  onChange={(e) => setTagAr(e.target.value)}
                  />
                  {/* input animation border */}
                  <div className="absolute top-0 left-0 w-full h-full border border-c-blue-400 opacity-0 rounded-md  peer-focus:animate-input-active pointer-events-none bg-transparent"></div>

                  {/* input border */}
                  <div className="absolute top-0 left-0 w-full h-full border border-c-black-100/25 rounded-md peer-focus:border-transparent pointer-events-none bg-transparent"></div>
              </div>
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
                disabled={!(tagAr && tagFa && tagEn && tagTr)}
              >Save</button>
          </div>
          
        </form>
    </main>
  )
}

export default TagList