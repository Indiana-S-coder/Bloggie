"use client"
import React from 'react'
import Link from 'next/link'
import AuthLinks from '@/components/AuthLinks'
// import ThemeToggle from './ThemeToggle'
import { Sora } from 'next/font/google'


const sora = Sora({
  subsets: ['latin'],
  weight: ['600']
})

const Navbar = () => {
  return (
    <nav className='w-[100%] flex items-center justify-between h-[100px]'>
      <div className={`${sora.className} md:text-xl text-left xl:text-3xl lg:flex-1 lg:text-center text-4xl`}>
        Bloggie
      </div>
      <div className=" md:flex md:flex-3 md:gap-4 xl:gap-5 xl:text-lg md:text-xl md:items-center justify-around">
      {/* <ThemeToggle/> */}
        <Link href='/'>Home</Link>
        <Link href='/'>Contact</Link>
        <Link href='/'>About</Link>  
        <AuthLinks/>             
      </div>
    </nav>
  )
}

export default Navbar