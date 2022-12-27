import React, { Suspense } from 'react'
import fs from "fs"
import matter from 'gray-matter';
//@ts-ignore
// import {marked} from "marked"
import md from "markdown-it"
import Footer from '../Footer';


export const dynamicParams = true;

export async function generateStaticParams() {  
  const posts = fs.readdirSync("Posts");
  return posts.map((post)=>({slug:post.replace(".md","")}))
  
}


const getPostdata = (slug: any) =>{
  const filename = fs.readFileSync(`Posts/${slug}.md`);
  const {data: frontmatter , content} = matter(filename)
  return {frontmatter, content}
  
}

const Blog = async ({params}: any) => {
    const {slug} = params;
    // const Post = await getPostdata(slug)
    const Post  = getPostdata(slug)

    const [data] = await Promise.all([Post])
 
  return (
    <>
    <section className="w-full min-h-screen flex flex-col bg-[#071a2d] justify-center items-center">
      <div className="w-full min-h-screen p-4 flex flex-col items-center justify-evenly  md:w-[60vw] ">
         <div>   <h1 className="font-clashDisplay text-[3.5rem] leading-normal md:text-8xl font-bold text-slate-100">{data.frontmatter.title}</h1> </div> 
      <div className='w-full flex justify-start items-center my-7'>  <div className=' bg-[#F9AA5E] p-2'><h2 className="text-slate-200 font-bold text-lg">{data.frontmatter.date}</h2></div>
       <div className='bg-[#f4f4f4] p-2'> <h2 className="text-[#F9AA5E] font-bold text-lg">{data.frontmatter.readTime}</h2></div> </div>
        <article className="text-slate-300 prose md:prose-xl prose-headings:text-slate-200 prose-stone prose-blockquote:text-slate-200  w-full flex flex-col items-start  leading-relaxed  font-medium text-2xl antialiased tracking-tight " dangerouslySetInnerHTML={{__html: md().render(data.content)}}>
        </article>
       </div>

    </section>
    <Footer/>
    </>
  )
}

export default Blog