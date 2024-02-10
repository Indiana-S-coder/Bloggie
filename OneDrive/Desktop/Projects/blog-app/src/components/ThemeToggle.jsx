"use Client"
import React, { useState, useContext } from 'react'
import Image from 'next/image'
import { useContext } from 'react'
import { ThemeContext } from '@/context/ThemeContext'

const ThemeToggle = () => {
   const { theme } = useContext(ThemeContext);


  return (
    <div className='relative mx-4 w-10 h-5 rounded-2xl cursor-pointer flex items-center justify-around bg-slate-800'>
        <Image src='/moon.png' alt='dark mode' width={14} height={14}/>
        <div className='w-[15px] h-[15px] absolute rounded-full bg-slate-50 left-[1px]'></div>
        <Image src='/sun.png' alt='light mode' width={14} height={14}/>
    </div>
  )
}

export default ThemeToggle