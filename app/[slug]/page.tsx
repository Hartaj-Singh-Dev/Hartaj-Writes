

import React from 'react'
import fs from "fs"
import { usePathname } from 'next/navigation';


export const dynamicParams = true;

export async function generateStaticParams() {  
  const posts = fs.readdirSync("Posts");

  return posts.map((post)=>{
      return {
        slug:post.replace(".md",""),
      }
    })
  
}

const Blog = async () => {

  return (
    <>
    </>
  )
}

export default Blog