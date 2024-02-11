import Menu from '@/components/Menu'
import Image from 'next/image'
import Comments from '@/components/Comments'

const getData = async(slug) => {
    const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
        cache: "no-store",
    })

    if(!res.ok){
      console.log(`Error status: ${res.status}`);
      console.log(`Error status text: ${res.statusText}`);
      throw new Error("Failed");
    }

    return res.json();
}

const SinglePage = async({params}) => {
    const {slug} = params;

    const data = await getData(slug);
    return (
    <div className='container'>
      <div className='flex items-center gap-[50px]'>
        <div className='flex flex-1 flex-col'>
          <h1 className='text-5xl mb-[50px]'>{data?.title}</h1>
          <div className='flex items-center gap-4'>
           {data?.user?.image && ( 
              <div className='w-12 h-12 relative'>
                <Image src={data.user.image} alt="" fill className='rounded-full object-cover' />
              </div>
              )}
            <div className='flex flex-col gap-1 text-[#626262]'>
              <span className='text-xl font-medum'>{data?.user?.name}</span>
              <span className='text-gery'>01.01.2024</span>
            </div>
          </div>
        </div>
         
        { data?.img && (
          <div className='flex flex-1 h-[350px] relative'>
            <Image src={data.img} alt="" fill className='object-cover' />
          </div>
        )}
      </div>
      <div className='flex gap-12'>
        <div className='flex-5 mt-16'>
          <div
            className='text-base font-light mb-5'
            dangerouslySetInnerHTML={{ __html: data?.desc || ""}}
          />
          <div className="">
            <Comments 
            postSlug={slug}
            />
          </div>
        </div>
        <Menu />
      </div>
    </div>
    )
}

export default SinglePage;