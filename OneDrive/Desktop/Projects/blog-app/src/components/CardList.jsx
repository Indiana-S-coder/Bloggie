import React from 'react'
import Pagination from '@/components/Pagination'
import Image from 'next/image'
import Card from '@/components/Card'

// const getData = aync(page) => {
//   const res = await fetch(`http://localhost:3000/api/posts?page=${page}`,
//   {
//     cache: "no-staore",
//   }
//   )

//   if(!res.ok){
//     throw new Error("Failed");
//   }

//   return res.json();
// };

const CardList = async({page}) => {
  // const {posts } = await 
  return (
    <div className='flex flex-5 flex-col'>
      <h1 className='text-2xl font-semibold my-[50px]'>
        Recent Posts
      </h1>
      <div>
        <Card />
        <Card />
      </div>
      <Pagination/>
    </div>
  )
}

export default CardList