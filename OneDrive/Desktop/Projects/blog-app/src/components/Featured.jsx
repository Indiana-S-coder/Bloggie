import Image from 'next/image'
import React from 'react'

const Featured = () => {
  return (
    <div className='mt-8'>
    <h1 className='text-5xl font-lg'>
      <b>Hey, lama dev here!</b> Discover my stories and creative ideas.
    </h1>
    <div className='mt-10 flex items-center gap-12'>
      <div className='flex flex-1 h-[500px] relative'>
        <Image src="/culture.png" alt="" fill className='object-cover' />
      </div>
      <div className='flex-1 flex flex-col gap-4'>
        <h1 className='text-3xl'>Lorem ipsum dolor sit amet alim consectetur adipisicing elit.</h1>
        <p className='text-4 font-xl text-[#626262]'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Cupiditate, quam nisi magni ea laborum inventore voluptatum
          laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
          quisquam! Harum unde sit culpa debitis.
        </p>
        <button className='px-3 py-3 border-none rounded-xl text-white w-max bg-slate-700'>Read More</button>
      </div>
    </div>
  </div>
  )
}

export default Featured