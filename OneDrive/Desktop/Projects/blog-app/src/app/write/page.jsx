"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import 'react-quill/dist/quill.bubble.css'
import ReactQuill from 'react-quill'

const writePage = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");

    const handleSubmit = () => {

    }
  return (
    <div className='container relative flex flex-col '>
        <input type="text"
        placeholder='Title' 
        className='text-xl text-slate-700 border-slate-300 border-[1px] font-medium px-3 py-2 focus:outline-none focus:border-slate-300 focus:ring-1 focus:ring-black rounded-md w-[70%]'/>
        <div className='flex flex-col gap-5 h-[700px] relative'>
            <button className='my-3 w-9 h-9 rounded-full border-slate-300 border-[1px] flex items-center justify-center cursor-pointer' onClick={() => setOpen(!open)}>
                <Image src="/plus.png" alt="" width={16} height={16} />
            </button>
        {open && (
          <div className='my-3 flex items-center gap-4 justify-center w-[250px] absolute left-[50px]'>
            <input
              type="file"
              id="image"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />
            <button className='w-9 h-9 rounded-full border-[1px] border-[#1a8917] flex items-center justify-center cursor-pointer'>
              <label htmlFor="image">
                <Image src="/image.png" alt="" width={16} height={16} />
              </label>
            </button>
            <button className='w-9 h-9 rounded-full border-[#1a8917] border-[1px] flex items-center justify-center cursor-pointer'>
              <Image src="/external.png" alt="" width={16} height={16} />
            </button>
            <button className='w-9 h-9 rounded-full border-[#1a8917] border-[1px] flex items-center justify-center cursor-pointer'>
              <Image src="/video.png" alt="" width={16} height={16} />
            </button>
          </div>
        )}
        <ReactQuill
          className='w-[80%] text-lg border-slate-300 rounded-md text-slate-600 border-[1px] '
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
        />
      </div>
      <button className='absolute top-0 right-0 py-2 px-4 border-none bg-[#1a8917] cursor-pointer text-white rounded-lg' onClick={handleSubmit}>
        Publish
      </button>
    </div>
  )
}

export default writePage