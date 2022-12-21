

import Link from 'next/link'
import React from 'react'


const BlogHead = ({slug , article} : any) => {
 
  return (
    <>
    <section>
      <Link href={`/${slug}`}>
        <h1>{slug}</h1>
      </Link>
    </section>
    </>
  )
}

export default BlogHead