"use client";
import React from 'react'

const loginPage = () => {
   

  return (
    <div className='p-3 mt-[60px] flex flex-col items-center justify-center'>
        <div className='bg-slate-200 shadow-md flex items-center flex-col py-12 px-20 gap-8 rounded-xl'>
            <span className='text-2xl font-semibold'>Login</span>
            <div className='bg-red-500 p-4 rounded-md border-none w-52 text-white cursor-pointer font-bold flex justify-center items-center'>
                Sign in with Google
            </div>
            <div className='bg-blue-500 p-4 rounded-md border-none w-52 text-white cursor-pointer font-bold flex justify-center items-center'>
                Sign in with facebook
            </div>
            <div className='bg-black p-4 rounded-md border-none w-52 text-white cursor-pointer font-bold flex justify-center items-center'>
                Sign in with Github
            </div>
        </div>
    </div>
  )
}

export default loginPage