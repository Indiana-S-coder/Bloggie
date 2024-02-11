"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import 'react-quill/dist/quill.bubble.css'
import ReactQuill from 'react-quill'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import {app} from '@/utils/firebase'
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const writePage = () => {
  const {status} = useSession();
  const router = useRouter();

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");
    const [file, setFile] = useState(null);
    const [media, setMedia] = useState("")
    const [title, setTitle] = useState("");
    
    useEffect(() => {
      const storage = getStorage(app);
      const upload = () => {
        const name = new Date().getTime() + file.name;
        const storageRef = ref(storage, name);
  
        const uploadTask = uploadBytesResumable(storageRef, file);
  
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                console.log("Upload is running");
                break;
            }
          },
          (error) => {},
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setMedia(downloadURL);
            });
          }
        );
      };
  
      file && upload();
    }, [file]);
  
    if (status === "loading") {
      return <div className={styles.loading}>Loading...</div>;
    }
  
    if (status === "unauthenticated") {
      router.push("/");
    }
  
    const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

    const handleSubmit = async () => {
      const res = await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc: value,
          img: media,
          slug: slugify(title),
           //If not selected, choose the general category
        }),
      });
  
      if (res.status === 200) {
        const data = await res.json();
        router.push(`/posts/${data.slug}`);
      }
    };

  return (
    <div className='container relative flex flex-col '>
        <input type="text"
        placeholder='Title' 
        onChange={(e) => setTitle(e.target.value)}
        className='text-xl text-slate-700 border-slate-300 border-[1px] font-medium px-3 py-2 focus:outline-none focus:border-slate-300 focus:ring-1 focus:ring-black rounded-md w-[70%]'/>
        <div className='flex flex-col gap-5 h-[700px] relative'>
            <button className='my-3 w-9 h-9 rounded-full border-slate-300 border-[1px] flex items-center justify-center cursor-pointer' onClick={() => setOpen(!open)}>
                <Image src="/plus.png" alt="" width={16} height={16} />
            </button>
        {open && (
          <div className='my-3 flex items-center gap-4 justify-center z-[999] absolute left-[50px]'>
            <input
              type="file"
              id="image"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />
            <button className='w-9 h-9 rounded-full border-[1px] border-[#1a8917] flex items-center justify-center cursor-pointer'>
              <label htmlFor="image">
                <Image src="/image.png" alt="" width={16} height={16} />
              </label>
            </button>
            <button className='w-9 h-9 rounded-full border-[#1a8917] border-[1px] flex items-center justify-center cursor-pointer'>
              <Image src="/external.png" alt="" width={16} height={16} />
            </button>
            <button className='w-9 h-9 rounded-full border-[#1a8917] border-[1px] flex items-center justify-center cursor-pointer'>
              <Image src="/video.png" alt="" width={16} height={16} />
            </button>
          </div>
        )}
        <ReactQuill
          className='w-[80%] text-lg border-slate-300 rounded-md text-slate-600 border-[1px] '
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
        />
      </div>
      <button className='absolute top-0 right-0 py-2 px-4 border-none bg-[#1a8917] cursor-pointer text-white rounded-lg' onClick={handleSubmit}>
        Publish
      </button>
    </div>
  )
}

export default writePage