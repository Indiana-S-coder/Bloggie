import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const MenuPosts = () => {
  return (
    <div className='mt-[35px] mb-[60px] flex flex-col gap-[35px]'>
      <Link href="/" className='flex items-center gap-5'>
        
          <div className='flex flex-1 aspect-square relative'>
            <Image src="/culture.png" alt="" fill className='rounded-full border-none object-cover' />
          </div>
        
        <div className='flex-4 flex flex-col gap-[5px]'>
          <span className='px-3 py-2 rounded-md text-base text-white w-max'>Travel</span>
          <h3 className='text-lg font-medium text-[#626262]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className='text-sm'>
            <span className='text-xs font-normal'>John Doe</span>
            <span className='text-grey'> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      {/* <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.culture}`}>
            Culture
          </span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Doe</span>
            <span className={styles.date}> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food}`}>Food</span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Doe</span>
            <span className={styles.date}> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.fashion}`}>
            Fashion
          </span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Doe</span>
            <span className={styles.date}> - 10.03.2023</span>
          </div>
        </div>
      </Link> */}
    </div>
  )
}

export default MenuPosts