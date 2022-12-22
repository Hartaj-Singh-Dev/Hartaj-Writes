import React from 'react'
import fs from "fs"
//@ts-ignore
import matter from "gray-matter"


export async function generateStaticParams() {  
  const posts = fs.readdirSync("Posts");
  return posts.map((post)=>({slug:post.replace(".md","")}))
  
}

const getPostFrontData =  (slug: any) =>{
  const filename = fs.readFileSync(`Posts/${slug}.md`);
  const {data: frontmatter} = matter(filename)
  return {frontmatter}
  
}


const head =  ({params}: any) => {
  const {slug} = params
  const data = getPostFrontData(slug)
  console.log(data)
  return (
    <>
  <title>{data.frontmatter.title}</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
 <meta name='robots' content='index , follow' />
 <meta property='og:url' content={`www.hxrtajwrites.tech/${data.frontmatter.title}`}/>
 <meta property="og:description" content={data.frontmatter.metaDesc} />
 <meta property="og:title" content={data.frontmatter.title} />
 <meta property="og:type" content="article" />
 <meta property="og:locale" content="en_US" />
 <meta name='keywords' content={data.frontmatter.tags.map((tag: any)=>{return tag as String}).toString()}/>
    </>
  )
}

export default head