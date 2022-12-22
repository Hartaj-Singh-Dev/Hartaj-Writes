import React, { Suspense } from 'react'
import fs from "fs"
import matter from 'gray-matter';
//@ts-ignore
import {marked} from "marked"

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

  
    {/* <h1>{data.frontmatter.title}</h1>
    <h2>{data.frontmatter.readTime}</h2>
    

    <hr />
    <p>{data.content}</p> */}
    <section className="w-full min-h-screen flex flex-col bg-[#071a2d] justify-center items-center">
      <div className="w-full min-h-screen p-4 flex flex-col items-center justify-evenly  md:w-[60vw] ">
         <div>   <h1 className="font-clashDisplay text-[3.5rem] leading-normal md:text-8xl font-bold text-slate-100">{data.frontmatter.title}</h1> </div> 
        <article className="text-slate-300 leading-relaxed  font-medium  antialiased tracking-tight text-[1.3rem]" dangerouslySetInnerHTML={{__html: marked(data.content)}}>
        </article>
       </div>

    </section>

    </>
  )
}

export default Blog