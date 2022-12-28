

import Link from 'next/link'
import React from 'react'


const BlogHead = ({slug , article} : any) => {
 
  return (
    <>
    <section className="flex flex-col justify-center items-center">
      <Link href={`/${slug}`}>
      <div className=" my-5 max-w-[85vw] min-h-78 rounded-lg flex flex-col lg:flex-row lg:w-auto lg:h-auto justify-evenly lg:justify-start items-start ">
     <div className="w-full flex flex-col justify-center items-center"> <img loading='lazy' className="w-60 h-34 lg:w-[30rem] aspect-video lg:h-[16rem]  object-cover rounded-[1.8rem]" src={article.image} alt="" /> </div>
       <div> <h1 className="text-[1.5rem]  py-1 text-slate-200 font-['Unbounded']">{article.title}</h1>    <div className='flex'><h2 className="text-slate-200 text-sm p-2 bg-[#F9AA5E] font-semibold">{article.date}</h2><h2 className=' text-sm p-2 bg-white text-[#F9AA5E] font-semibold'>{article.readTime}</h2></div>
       </div>
      </div>
      </Link>
    </section>
    </>
  )
}

export default BlogHead