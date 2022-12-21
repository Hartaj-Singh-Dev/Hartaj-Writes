import React from 'react'
import fs from "fs"

export async function generateStaticParams() {
    var AllPosts
   const posts = await fs.readdir("Posts", (err,Files)=>{
        if(err){
            console.log(err)
        }else{
           AllPosts = Files
           
        }

          })
          //@ts-ignore
          return AllPosts.map((post: any)=>{
            return {slug:post}
          })

  
}

const Blog = async () => {
 
  return (
    <>
    </>
  )
}

export default Blog