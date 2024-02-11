"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const Pagination = ({page, hasPrev, hasNext}) => {
  const router = useRouter();

  return (
    <div className='flex justify-between'>
      <button className='disabled:cursor-not-allowed rounded-sm w-[100px] border-none p-2.5 bg-red-500 text-white cursor-pointer'
      disabled={!hasPrev}
      onClick={() => router.push(`?page=${page-1}`)}
      >
        Previous
      </button>
      <button 
      disabled={!hasNext}
      onClick={() => router.push(`?page=${page + 1}`)}
      className='disabled:cursor-not-allowed rounded-sm w-[100px] border-none p-2.5 bg-red-500 text-white cursor-pointer'>
        Next</button>
    </div>
  )
}

export default Pagination