import React from 'react'
import { FacilityInputSelect,TagInputSelect, AddressInputSelect, Editor } from '../../../components'


const ProjectForm = ({
    form,
    title, 
    setTitle,
    title_fa,
    setTitle_fa,
    title_ar,
    setTitle_ar,
    title_tr,
    setTitle_tr,
    summery,
    setSummery,
    summery_fa,
    setSummery_fa,
    summery_ar,
    setSummery_ar,
    summery_tr,
    setSummery_tr,
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
    city,
    setCity,
    district,
    setDistrict,

    selectedTagIds,
    setSelectedTagIds,

    selectedFacilityIds,
    setSelectedFaciltyIds,

    startingPrice,
    setStartingPrice,
    totalArea,
    setTotalArea,
    totalUnits,
    setTotalUnits,

    isPreSale,
    setIsPreSale,
    isInstallment,
    setIsInstallment,

    images,
    setImages,
    video,
    setVideo,

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

                {/* video */}
                <div className="flex flex-col gap-1">
                    <label 
                        htmlFor="video"
                        className='uppercase text-sm'
                    >video</label>
                    <input 
                        type="file" 
                        name="video"
                        onChange={(e) => setVideo(e.target.files)}
                        className="block w-full rounded-lg text-sm text-gray-900 border border-gray-300 cursor-pointer bg-gray-50 focus:outline-none file:border file:text-white file:bg-c-black-500 file:cursor-pointer file:hover:bg-c-black-300 file:transition-all file:rounded-lg" 
                        aria-describedby="file_input_help"
                        accept="video/mp4"
                    />
                    <p className="text-sm text-gray-500">MP4</p>
                </div>

                {/* details */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-2">
                    {/* price */}
                    <div className="flex flex-row w-full md:flex-col justify-between items-center gap-2">
                        <label 
                            htmlFor="price"
                            className='uppercase text-sm'
                        >starting price</label>
                        <input 
                            name='price'
                            type='number'
                            value={startingPrice}
                            onChange={(e) => setStartingPrice(e.target.value)}
                            className="px-4 py-3 basis-1/3 shrink-0 border border-c-black-100/25 outline-none w-full"
                        />
                    </div>
                    {/* price */}
                    <div className="flex flex-row w-full md:flex-col justify-between items-center gap-2">
                        <label 
                            htmlFor="units"
                            className='uppercase text-sm'
                        >total number of units</label>
                        <input 
                            name='units'
                            type='number'
                            value={totalUnits}
                            onChange={(e) => setTotalUnits(e.target.value)}
                            className="px-4 py-3 basis-1/3 shrink-0 border border-c-black-100/25 outline-none w-full"
                        />
                    </div>
                    {/* area */}
                    <div className="flex flex-row w-full md:flex-col justify-between items-center gap-2">
                        <label 
                            htmlFor="area"
                            className='uppercase text-sm'
                        >total project area</label>
                        <input 
                            name='area'
                            type='number'
                            value={totalArea}
                            onChange={(e) => setTotalArea(e.target.value)}
                            className="px-4 py-3 basis-1/3 shrink-0 border border-c-black-100/25 outline-none w-full"
                        />
                    </div>

                </div>

                {/* Address group */}

                <AddressInputSelect 
                    country={country}
                    setCountry={setCountry}
                    city={city}
                    setCity={setCity}
                    district={district}
                    setDistrict={setDistrict}
                />

                {/* checkboxes */}
                <div className="flex justify-between gap-2">
                    {/* presale */}
                    <div className="flex flex-row gap-2">
                        <label 
                            htmlFor="presale"
                            className='uppercase text-sm'
                        >Presale</label>
                        <input 
                            name='presale'
                            type='checkbox'
                            value={isPreSale}
                            onChange={() => setIsPreSale(prev => !prev)}
                            className="px-4 py-3 border border-c-black-100/25 outline-none w-full"
                        />
                    </div>
                    {/* price */}
                    {/* installment */}
                    <div className="flex flex-row gap-2">
                        <label 
                            htmlFor="installment"
                            className='uppercase text-sm'
                        >installment</label>
                        <input 
                            name='installment'
                            type='checkbox'
                            value={isInstallment}
                            onChange={() => setIsInstallment(prev => !prev)}
                            className="px-4 py-3 border border-c-black-100/25 outline-none w-full"
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

                {/* facilities */}
                <div className="flex flex-col gap-1">
                    <label 
                        htmlFor="image"
                        className='uppercase text-sm'
                    >facilities</label>
                    <FacilityInputSelect 
                        className={"px-4 py-3 border border-c-black-100/25 outline-none w-full"}
                        selectedFacilityIds={selectedFacilityIds}
                        setSelectedFacilityIds={setSelectedFaciltyIds}
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
                        htmlFor="title"
                        className='uppercase text-sm'
                    >title in persian</label>
                    <div className="rtl">
                        <input 
                            name="title"
                            type="text"
                            value={title_fa}
                            onChange={(e) => setTitle_fa(e.target.value)}
                            className="px-4 py-3 border border-c-black-100/25 outline-none w-full"
                        />
                    </div>
                    
                    
                </div>
                <div className="flex flex-col gap-2">
                    <label 
                        htmlFor="title"
                        className='uppercase text-sm'
                    >title in arabic</label>
                    <div className="rtl">
                        <input 
                            name="title"
                            type="text"
                            value={title_ar}
                            onChange={(e) => setTitle_ar(e.target.value)}
                            className="px-4 py-3 border border-c-black-100/25 outline-none w-full"
                        />
                    </div>
                    
                    
                </div>
                <div className="flex flex-col gap-2">
                    <label 
                        htmlFor="title"
                        className='uppercase text-sm'
                    >title in turkish</label>
                    <input 
                        name="title"
                        type="text"
                        value={title_tr}
                        onChange={(e) => setTitle_tr(e.target.value)}
                        className="px-4 py-3 border border-c-black-100/25 outline-none w-full"
                    />
                    
                </div>

                {/* summaries */}
                <div className="flex flex-col gap-2">
                    <label 
                        htmlFor="summary"
                        className='uppercase text-sm'
                    >summary</label>
                    <textarea
                        name='summary' 
                        type="text"
                        value={summery}
                        onChange={(e) => setSummery(e.target.value)}
                        className='px-4 py-3 border border-c-black-100/25 outline-none w-full'
                    />
                </div>

                

                <div className="flex flex-col gap-2">
                    <label 
                        htmlFor="summary"
                        className='uppercase text-sm'
                    >summary in persian</label>
                    <div className="rtl">
                        <textarea
                            name='summary' 
                            type="text"
                            value={summery_fa}
                            onChange={(e) => setSummery_fa(e.target.value)}
                            className='px-4 py-3 border border-c-black-100/25 outline-none w-full'
                        />
                    </div>
                    
                </div>

                <div className="flex flex-col gap-2">
                    <label 
                        htmlFor="summary"
                        className='uppercase text-sm'
                    >summary in arabic</label>
                    <div className="rtl">
                        <textarea
                            name='summary' 
                            type="text"
                            value={summery_ar}
                            onChange={(e) => setSummery_ar(e.target.value)}
                            className='px-4 py-3 border border-c-black-100/25 outline-none w-full'
                        />
                    </div>
                    
                </div>

                <div className="flex flex-col gap-2">
                    <label 
                        htmlFor="summary"
                        className='uppercase text-sm'
                    >summary in turkish</label>
                    <textarea
                        name='summary' 
                        type="text"
                        value={summery_tr}
                        onChange={(e) => setSummery_tr(e.target.value)}
                        className='px-4 py-3 border border-c-black-100/25 outline-none w-full'
                    />
                </div>

                
                
                {/* contents */}
                <div className="flex flex-col gap-2">
                    <label 
                        htmlFor="content"
                        className='uppercase text-sm'
                    >content</label>
                    <div className="ql-editor ltr">
                        <Editor 
                            content={content}
                            setContent={setContent}
                        />
                    </div>
                    
                </div>

                <div className="flex flex-col gap-2">
                    <label 
                        htmlFor="content"
                        className='uppercase text-sm'
                    >content in persian</label>

                    <div className="ql-editor rtl">
                        <Editor 
                            content={content_fa}
                            setContent={setContent_fa}
                        />
                    </div>
                    
                </div>

                <div className="flex flex-col gap-2">
                    <label 
                        htmlFor="content"
                        className='uppercase text-sm'
                    >content in arabic</label>

                    <div className="ql-editor rtl">
                        <Editor 
                            content={content_ar}
                            setContent={setContent_ar}
                        />
                    </div>
                    
                </div>

                <div className="flex flex-col gap-2">
                    <label 
                        htmlFor="content"
                        className='uppercase text-sm'
                    >content in turkish</label>

                    <div className="ql-editor ltr">
                        <Editor 
                            content={content_tr}
                            setContent={setContent_tr}
                        />
                    </div>
                    
                </div>

                

                <button
                    className='bg-c-black-800 text-white grid place-content-center py-2 hover:bg-c-black-400 transition-colors cursor-pointer font-semibold capitalize'
                    type='submit'
                >{buttonLabel}</button>
        </form>
      
    </>
  )
}

export default ProjectForm