import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import React from 'react'

const modules = {
    toolbar: [
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline','strike', 'blockquote'],
        // [{ align: '' }, { align: 'center' }, { align: 'right' }, { align: 'justify' }],
        [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
        ['clean']
    ],
    }

const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote', 'align',
    'list', 'bullet', 'indent',
    ]


const Editor = ({ content, setContent }) => {

  return (
    <ReactQuill
        name="content"
        className='min-h-max'
        value={content}
        onChange={setContent}
        theme="snow"
        formats={formats}
        modules={modules}
    />
  )
}

export default Editor