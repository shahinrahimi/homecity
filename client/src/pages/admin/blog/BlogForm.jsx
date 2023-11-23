import React from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
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
    handleSubmit }) => {

    const modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline','strike', 'blockquote'],
            [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
            ['link', 'image'],
            ['clean']
        ],
        }

    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
        ]
    return (
        <form 
            className='bg-white shadow-cutome-1 flex flex-col justify-between px-20 py-16 gap-8 rounded-md'
            onSubmit={handleSubmit}
            ref={form}
            >
                
                <h1
                className='text-4xl text-c-black-500/75 uppercase font-light text-center mb-4'
                >New blog</h1>
                {/* image */}

                <div className="flex flex-col gap-2">
                    <label 
                        htmlFor="image"
                        className='uppercase text-sm'
                    >image</label>
                    <input 
                        type="file" 
                        name="image"
                        onChange={(e) => setFiles(e.target.files)}
                        className='px-4 py-3 border border-c-black-100/25'
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
                        className="px-4 py-3 border border-c-black-100/25 outline-none"
                    />
                    
                </div>
                <div className="flex flex-col gap-2">
                    <label 
                        htmlFor="title"
                        className='uppercase text-sm'
                    >title in persion</label>
                    <input 
                        name="title"
                        type="text"
                        value={title_fa}
                        onChange={(e) => setTitle_fa(e.target.value)}
                        className="px-4 py-3 border border-c-black-100/25 outline-none"
                    />
                    
                </div>
                <div className="flex flex-col gap-2">
                    <label 
                        htmlFor="title"
                        className='uppercase text-sm'
                    >title in arabic</label>
                    <input 
                        name="title"
                        type="text"
                        value={title_ar}
                        onChange={(e) => setTitle_ar(e.target.value)}
                        className="px-4 py-3 border border-c-black-100/25 outline-none"
                    />
                    
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
                        className="px-4 py-3 border border-c-black-100/25 outline-none"
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
                        className='px-4 py-3 border border-c-black-100/25 outline-none'
                    />
                </div>

                

                <div className="flex flex-col gap-2">
                    <label 
                        htmlFor="summary"
                        className='uppercase text-sm'
                    >summary in persion</label>
                    <textarea
                        name='summary' 
                        type="text"
                        value={summery_fa}
                        onChange={(e) => setSummery_fa(e.target.value)}
                        className='px-4 py-3 border border-c-black-100/25 outline-none'
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label 
                        htmlFor="summary"
                        className='uppercase text-sm'
                    >summary in arabic</label>
                    <textarea
                        name='summary' 
                        type="text"
                        value={summery_ar}
                        onChange={(e) => setSummery_ar(e.target.value)}
                        className='px-4 py-3 border border-c-black-100/25 outline-none'
                    />
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
                        className='px-4 py-3 border border-c-black-100/25 outline-none'
                    />
                </div>

                
                
                {/* contents */}
                <div className="flex flex-col gap-2">
                    <label 
                        htmlFor="content"
                        className='uppercase text-sm'
                    >content</label>

                    <ReactQuill
                        name="content"
                        className='min-h-max'
                        value={content}
                        onChange={newValue => setContent(newValue)}
                        theme="snow"
                        formats={formats}
                        modules={modules}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label 
                        htmlFor="content"
                        className='uppercase text-sm'
                    >content in persion</label>

                    <ReactQuill
                        name="content"
                        className='min-h-max'
                        value={content}
                        onChange={newValue => setContent(newValue)}
                        theme="snow"
                        formats={formats}
                        modules={modules}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label 
                        htmlFor="content"
                        className='uppercase text-sm'
                    >content in arabic</label>

                    <ReactQuill
                        name="content"
                        className='min-h-max'
                        value={content}
                        onChange={newValue => setContent(newValue)}
                        theme="snow"
                        formats={formats}
                        modules={modules}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label 
                        htmlFor="content"
                        className='uppercase text-sm'
                    >content in turkish</label>

                    <ReactQuill
                        name="content"
                        className='min-h-max'
                        value={content}
                        onChange={newValue => setContent(newValue)}
                        theme="snow"
                        formats={formats}
                        modules={modules}
                    />
                </div>

                

                
                <button
                    className='bg-c-black-800 text-white grid place-content-center py-2 hover:bg-c-black-400 transition-colors cursor-pointer font-semibold capitalize'
                    type='submit'
                >post</button>
        </form>
    )
}

export default BlogForm