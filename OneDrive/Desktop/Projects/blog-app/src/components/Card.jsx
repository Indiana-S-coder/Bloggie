import React from 'react'
import CardList from './CardList'
import Link from 'next/link'
import Image from 'next/image'

const Card = ({key, item}) => {
  return (
    <div className='mb-[50px] flex items-center gap-12'>
        {item.img && (
            <div className=' flex-1 h-80 relative'>
                <Image src={item.img} alt="" fill className='object-cover' />
            </div>
        )}

        <div className='flex flex-1 flex-col gap-6'>
            <div>
                <span className='text-slate-500'>{item.createdAt.substring(0,10)}-{" "}</span>     
            </div>
            <Link href={`/posts/${item.slug}`}>
                <h1 className=''>{item.title}</h1>
            </Link>
            <div className='font-light text-[#626262] text-lg' dangerouslySetInnerHTML={{ __html: item?.desc.substring(0,60) }}/>
                <Link href={`/posts/${item.slug}`} className='border-b-[1px] border-solid border-[#626262] max-w-max py-[2px]'>
                    Read More
                </Link>
            </div>
        </div>
  )
}

export default Card