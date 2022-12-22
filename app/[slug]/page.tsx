

import React, { Suspense } from 'react'
import fs from "fs"
import { usePathname } from 'next/navigation';
import matter from 'gray-matter';


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
    console.log(data)

  return (
    <>
   <Suspense fallback={<p>Loading ...</p>}>
    <h1>{data.frontmatter.title}</h1>
    <h2>{data.frontmatter.readTime}</h2>
    

    <hr />
    <p>{data.content}</p>
    </Suspense> 
    </>
  )
}

export default Blog