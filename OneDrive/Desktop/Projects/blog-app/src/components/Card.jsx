import React from 'react'
import CardList from './CardList'
import Link from 'next/link'
import Image from 'next/image'

const Card = () => {
  return (
    <div className='mb-[50px] flex items-center gap-12'>
        <div className=' flex-1 h-80 relative'>
            <Image src='/culture.png' alt="" fill className='object-cover' />
        </div>

        <div className='flex flex-1 flex-col gap-6'>
            <div>
                <span className='text-slate-500'>Date</span>     
            </div>
            <Link href='/'>
                <h1 className=''>title</h1>
            </Link>
            <p className='font-light text-[#626262] text-lg'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio quisquam, culpa labore amet, voluptas optio nam 
                architecto vitae numquam aperiam velit voluptates! 
                Voluptates aperiam natus odio ipsa perspiciatis porro voluptatem.
            </p>
            <div>
                <Link href='/' className='border-b-[1px] border-solid border-[#626262] max-w-max py-[2px]'>
                    Read More
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Card