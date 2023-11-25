import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import React from 'react'

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


const Editor = ({ content, setContent}) => {
  return (
    <ReactQuill
        name="content"
        className='min-h-max'
        value={content}
        onChange={newValue => setContent(newValue)}
        theme="snow"
        formats={formats}
        modules={modules}
    />
  )
}

export default Editor