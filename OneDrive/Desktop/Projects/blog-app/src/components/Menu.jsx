import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import MenuPosts from '../components/MenuPosts'

const Menu = () => {
  return (
    <div className='flex-col flex flex-2 mt-[60px]'>
      <h1 className='text-gray-500 text-base font-normal'>What's hot</h1>
      <h2 className='text-2xl'>Most Popular</h2>
      <MenuPosts/>
    </div>
  )
}

export default Menu