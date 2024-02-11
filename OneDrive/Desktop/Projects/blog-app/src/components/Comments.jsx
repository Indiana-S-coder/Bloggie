"use client";
import React, { useState } from 'react'
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';
import useSWR from 'swr';

const fetcher = async(url) => {
  const res = await fetch(url);
  const data = await res.json();

  if(!res.ok){
    const error = new Error(data.message);
    throw error;
  }
  return data;
}

const Comments = ({postSlug}) => {
    const {status} = useSession();

    const {data, mutate, isLoading } = useSWR(
      `http://localhost:3000/api/comments?postSlug=${postSlug}`,
      fetcher
    )

      const [desc, setDesc] = useState();

    const handleSubmit = async() => {
        await fetch('/api/comments',{
          method: "POST",
          body: JSON.stringify({desc, postSlug}),
        })
        mutate();
    }
  return (
    <div className='mt-[50px]'>
      <h1 className='text-[#626262] mb-[30px]'>Comments</h1>
      {status === "authenticated" ? (
        <div className='flex items-center justify-between gap-[30px]'>
          <textarea
            placeholder="write a comment..."
            className='p-5 border-solid border-slate-300 border-[1px] rounded-md w-[100%]'
            onChange={(e) => setDesc(e.target.value)}
          />
          <button className='py-2.5 px-3 bg-teal-500 text-white font-semibold rounded-md cursor-pointer' onClick={handleSubmit}>
            Send
          </button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className='mt-[50px]'>
        {isLoading
           ? "loading"
           : data?.map((item) => (
              <div className='mb-[50px]'>
                <div className='flex items-center gap-5 mb-5' key={item._id}>
                  {item?.user?.image && (
                    <Image
                      src={item.user.image}
                      alt=""
                      width={50}
                      height={50}
                      className='rounded-full object-cover'
                    />
                   )} 
                  <div className='flex flex-col gap-1 text-[#626262]'>
                    <span className='font-medium'>{item.user.name}</span>
                    <span className='text-base'>{item.createdAt}</span>
                  </div>
                </div>
                <p className='text-lg font-light'>
                  {item.desc}
                </p>
              </div>
             ))} 
      </div>
    </div>
  )
}

export default Comments