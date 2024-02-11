"use client"
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React, { useState } from 'react'

const AuthLinks = () => {
    const  {status} = useSession();
    const [open, setOpen] = useState(false);
    
    return (
    <>
    {status === "unauthenticated" ? (
        <Link href='/login' className='cursor-pointer'>Login</Link>
    ) : (
        <>
            <Link href='/write' className='cursor-pointer'>Write</Link>
            <span className='cursor-pointer' onClick={signOut}>Logout</span>
        </>
    )}
{/*     
    <div className='w-5 h-5 flex flex-col justify-between' onClick={() => setOpen(!open)}>
      <div className='w-[100%] h-[2px] bg-[#ddd]'></div>
      <div className='w-[100%] h-[2px] bg-[#ddd]'></div>
      <div className='w-[100%] h-[2px] bg-[#ddd]'></div>
    </div>
    { open && (
        <div className="absolute top-[100px] flex flex-col gap-3 text-lg items-center justify-around">
          <Link href='/'>Home</Link>
          <Link href='/'>Contact</Link>
          <Link href='/'>About</Link> 
          {status === "notAuthenticated" ? (
            <Link href='/'>Login</Link>
          ) : (
        <>
          <Link href='/write'>Write</Link>
          <span>Logout</span>
        </>
      )}
        </div>
      )} */}
    </>
  );
}

export default AuthLinks