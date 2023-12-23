import React from 'react'
import { TagInputSelect, Editor } from '../../../components'

const BlogForm = ({
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
    setFiles, 
    content,
    setContent,
    content_fa,
    setContent_fa,
    content_ar,
    setContent_ar,
    content_tr,
    setContent_tr,
    selectedTagIds,
    setSelectedTagIds,
    buttonLabel,
    handleSubmit 
}) => {

    return (
        <form 
            className='bg-white shadow-cutome-1 flex flex-col justify-between px-10 lg:px-20 py-16 gap-8 rounded-md'
            onSubmit={handleSubmit}
            ref={form}
            >
                
                {/* image */}
                <div className="flex flex-col gap-1">
                    <label 
                        htmlFor="image"
                        className='uppercase text-sm'
                    >image</label>
                    <input 
                        type="file" 
                        name="image"
                        onChange={(e) => setFiles(e.target.files)}
                        className="block w-full rounded-lg text-sm text-gray-900 border border-gray-300 cursor-pointer bg-gray-50 focus:outline-none file:border file:text-white file:bg-c-black-500 file:cursor-pointer file:hover:bg-c-black-300 file:transition-all file:rounded-lg" aria-describedby="file_input_help"accept="image/png, image/jpg, image/jpeg"
                    />
                    <p className="text-sm text-gray-500" id="file_input_help">PNG, JPEG, JPG</p>
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
                        htmlFor="title"
                        className='uppercase text-sm'
                    >title in persian</label>
                    <div dir='rtl' className="rtl vazir">
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
                    <div dir='rtl' className="rtl vazir">
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
                    <div dir='rtl' className="rtl vazir">
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
                    <div dir='rtl' className="rtl vazir">
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
    )
}

export default BlogForm