import React from 'react'
import { TagInputSelect } from '../../../components'


const FranchiseForm = ({
    form,
    title, 
    setTitle,
    title_fa,
    setTitle_fa,
    title_ar,
    setTitle_ar,
    title_tr,
    setTitle_tr,
    content,
    setContent,
    content_fa,
    setContent_fa,
    content_ar,
    setContent_ar,
    content_tr,
    setContent_tr,

    country,
    setCountry,

    selectedTagIds,
    setSelectedTagIds,


    startYear,
    setStartYear,
    averageCost,
    setAverageCost,
    branchCount,
    setBranchCount,

    brand,
    setBrand,
    cover,
    setCover,
    images,
    setImages,

    buttonLabel,
    handleSubmit 
}) => {

  return (
    <>
      <form 
            className='bg-white shadow-cutome-1 flex flex-col justify-between px-10 py-5 lg:px-20 lg:py-16 gap-8 rounded-md'
            onSubmit={handleSubmit}
            ref={form}
            >
                {/* brand */}
                <div className="flex flex-col gap-1">
                    <label 
                        htmlFor="brand"
                        className='uppercase text-sm'
                    >brand</label>
                    <input 
                        type="file" 
                        name="brand"
                        onChange={(e) => setBrand(e.target.files)}
                        className="block w-full rounded-lg text-sm text-gray-900 border border-gray-300 cursor-pointer bg-gray-50 focus:outline-none file:border file:text-white file:bg-c-black-500 file:cursor-pointer file:hover:bg-c-black-300 file:transition-all file:rounded-lg"
                        aria-describedby="file_input_help"
                        accept="image/png, image/jpg, image/jpeg"
                    />
                    <p className="text-sm text-gray-500">PNG, JPEG, JPG</p>
                </div>

                {/* cover */}
                <div className="flex flex-col gap-1">
                    <label 
                        htmlFor="cover"
                        className='uppercase text-sm'
                    >cover</label>
                    <input 
                        type="file" 
                        name="cover"
                        onChange={(e) => setCover(e.target.files)}
                        className="block w-full rounded-lg text-sm text-gray-900 border border-gray-300 cursor-pointer bg-gray-50 focus:outline-none file:border file:text-white file:bg-c-black-500 file:cursor-pointer file:hover:bg-c-black-300 file:transition-all file:rounded-lg"
                        aria-describedby="file_input_help"
                        accept="image/png, image/jpg, image/jpeg"
                    />
                    <p className="text-sm text-gray-500">PNG, JPEG, JPG</p>
                </div>
                
                {/* images */}
                <div className="flex flex-col gap-1">
                    <label 
                        htmlFor="images"
                        className='uppercase text-sm'
                    >images</label>
                    <input 
                        type="file" 
                        name="image"
                        onChange={(e) => setImages(e.target.files)}
                        className="block w-full rounded-lg text-sm text-gray-900 border border-gray-300 cursor-pointer bg-gray-50 focus:outline-none file:border file:text-white file:bg-c-black-500 file:cursor-pointer file:hover:bg-c-black-300 file:transition-all file:rounded-lg"
                        multiple="multiple"
                        aria-describedby="file_input_help"
                        accept="image/png, image/jpg, image/jpeg"
                    />
                    <p className="text-sm text-gray-500">PNG, JPEG, JPG</p>
                </div>

                {/* details 1 */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-2">

                    {/* average cost */}
                    <div className="flex flex-row w-full md:flex-col justify-between items-center gap-2">
                        <label 
                            htmlFor="averagecost"
                            className='uppercase text-sm'
                        >average cost</label>
                        <input 
                            name='averagecost'
                            type='number'
                            min="0"
                            value={averageCost}
                            onChange={(e) => setAverageCost(e.target.value)}
                            className="px-4 py-3 basis-1/2 shrink-0 border border-c-black-100/25 outline-none w-full"
                        />
                    </div>

                    {/* start year */}
                    <div className="flex flex-row w-full md:flex-col justify-between items-center gap-2">
                        <label 
                            htmlFor="startyear"
                            className='uppercase text-sm'
                        >starting year</label>
                        <input 
                            name='startyear'
                            type='number'
                            min="1900"
                            max="2050"
                            value={startYear}
                            onChange={(e) => setStartYear(e.target.value)}
                            className="px-4 py-3 basis-1/4 shrink-0 border border-c-black-100/25 outline-none w-full"
                        />
                    </div>

                    {/* branch count */}
                    <div className="flex flex-row w-full md:flex-col justify-between items-center gap-2">
                        <label 
                            htmlFor="branchcount"
                            className='uppercase text-sm'
                        >branch count</label>
                        <input 
                            name='branchcount'
                            type='number'
                            min="1"
                            value={branchCount}
                            onChange={(e) => setBranchCount(e.target.value)}
                            className="px-4 py-3 basis-1/4 shrink-0 border border-c-black-100/25 outline-none w-full"
                        />
                    </div>

                    {/* country */}
                    <div className="flex flex-row w-full md:flex-col justify-between items-center gap-2">
                        <label 
                            htmlFor="country"
                            className='uppercase text-sm'
                        >country</label>
                        <input 
                            name='country'
                            type='text'
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            className="px-4 py-3 basis-1/4 shrink-0 border border-c-black-100/25 outline-none w-full"
                        />
                    </div>
                </div>

                {/* tags */}
                <div className="flex flex-col gap-1">
                    <label 
                        htmlFor="image"
                        className='uppercase text-sm'
                    >tags</label>
                    <TagInputSelect 
                        className={"px-4 py-3 border border-c-black-100/25 outline-none w-full"}
                        selectedTagIds={selectedTagIds}
                        setSelectedTagIds={setSelectedTagIds}
                    />
                </div>

                {/* titles */}
                <div className="flex flex-col gap-2">
                    <label 
                        htmlFor="title"
                        className='uppercase text-sm'
                    >title</label>
                    <input 
                        name="title"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="px-4 py-3 border border-c-black-100/25 outline-none w-full"
                    />
                    
                </div>
                <div className="flex flex-col gap-2">
                    <label 
                        htmlFor="titlefa"
                        className='uppercase text-sm'
                    >title in persian</label>
                    <div className="rtl">
                        <input 
                            name="titlefa"
                            type="text"
                            value={title_fa}
                            onChange={(e) => setTitle_fa(e.target.value)}
                            className="px-4 py-3 border border-c-black-100/25 outline-none w-full"
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <label 
                        htmlFor="titlear"
                        className='uppercase text-sm'
                    >title in arabic</label>
                    <div className="rtl">
                        <input 
                            name="titlear"
                            type="text"
                            value={title_ar}
                            onChange={(e) => setTitle_ar(e.target.value)}
                            className="px-4 py-3 border border-c-black-100/25 outline-none w-full"
                        />
                    </div>
                    
                    
                </div>
                <div className="flex flex-col gap-2">
                    <label 
                        htmlFor="titletr"
                        className='uppercase text-sm'
                    >title in turkish</label>
                    <input 
                        name="titletr"
                        type="text"
                        value={title_tr}
                        onChange={(e) => setTitle_tr(e.target.value)}
                        className="px-4 py-3 border border-c-black-100/25 outline-none w-full"
                    />
                    
                </div>

                {/* content */}
                <div className="flex flex-col gap-2">
                    <label 
                        htmlFor="content"
                        className='uppercase text-sm'
                    >content</label>
                    <textarea
                        name='content' 
                        type="text"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className='px-4 py-3 border border-c-black-100/25 outline-none w-full'
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label 
                        htmlFor="contentfa"
                        className='uppercase text-sm'
                    >content in persian</label>
                    <div className="rtl">
                        <textarea
                            name='contentfa' 
                            type="text"
                            value={content_fa}
                            onChange={(e) => setContent_fa(e.target.value)}
                            className='px-4 py-3 border border-c-black-100/25 outline-none w-full'
                        />
                    </div>
                    
                </div>

                <div className="flex flex-col gap-2">
                    <label 
                        htmlFor="contentar"
                        className='uppercase text-sm'
                    >content in arabic</label>
                    <div className="rtl">
                        <textarea
                            name='contentar' 
                            type="text"
                            value={content_ar}
                            onChange={(e) => setContent_ar(e.target.value)}
                            className='px-4 py-3 border border-c-black-100/25 outline-none w-full'
                        />
                    </div>
                    
                </div>

                <div className="flex flex-col gap-2">
                    <label 
                        htmlFor="summerytr"
                        className='uppercase text-sm'
                    >content in turkish</label>
                    <textarea
                        name='summerytr' 
                        type="text"
                        value={content_tr}
                        onChange={(e) => setContent_tr(e.target.value)}
                        className='px-4 py-3 border border-c-black-100/25 outline-none w-full'
                    />
                </div>

                <button
                    className='bg-c-black-800 text-white grid place-content-center py-2 hover:bg-c-black-400 transition-colors cursor-pointer font-semibold capitalize'
                    type='submit'
                >{buttonLabel}</button>
        </form>
      
    </>
  )
}

export default FranchiseForm