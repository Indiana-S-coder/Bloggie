import React from 'react'

const Pagination = () => {
  return (
    <div className='flex justify-between'>
      <button className='rounded-sm w-[100px] border-none p-2.5 bg-red-500 text-white cursor-pointer'>
        Previous
      </button>
      <button className='rounded-sm w-[100px] border-none p-2.5 bg-red-500 text-white cursor-pointer'>Next</button>
    </div>
  )
}

export default Pagination