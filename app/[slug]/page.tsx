import React from 'react'
import fs from "fs"

export const dynamicParams = true;

export async function generateStaticParams() {  
  const posts = fs.readdirSync("Posts") 

  return [{slug:posts.map((post)=>{post.replace(".md","")})}]
}

const Blog = async () => {
 
  return (
    <>
    </>
  )
}

export default Blog