import { GetStaticProps, NextPage } from "next"
import fs from "fs"
import matter from "gray-matter"

interface ArticleMeta {
    title?:string
    date?:string
    ReadTime?:string
    metaDesc?:string
    PostImg?:string
}

interface PostDataTypes{
    slug:string
    frontmatter?:ArticleMeta[]
}

interface Iporps{
    posts: ArticleMeta[]
}

const Blogs:NextPage<Iporps | any> = ({posts}) => {
  return (
    <>
    <section className="w-full min-h-[50vh] flex flex-col justify-center items-center bg-[#071a2d]">
        <div className="w-full min-h-[40vh] sm:w-[80vw] px-3 sm:px-0">
            <div>
                <h1 className="font-['Unbounded'] text-slate-200 text-2xl sm:text-5xl cursor-pointer"> Blog Posts: <span className="hover:opacity-80"> #</span> </h1>
                <hr className="w-full mt-2 underline decoration-slate-100 decoration-4 underline-offset-4"></hr>
               
            </div>
            <div>
             {`${console.log(posts)}`}   
                {/* {
                    posts.map((post:PostDataTypes , index:number) =>{
                        return ( <>  </>)
                    })
                } */}
            </div>
        </div>
    </section>
    
    </>
  )
}


export const getStaticProps: GetStaticProps = async (context) =>{
    const files = fs.readdirSync("Posts")
    const posts = files.map((filename)=>{
        const slug = filename.replace(".md" ,"")
        const markdownWithMeta = fs.readFileSync(`Posts/${filename}`,"utf-8")
    const {data: frontmatter} = matter(markdownWithMeta)
    
    return {
        slug, frontmatter
    };
    });

    return{
        props:{posts}
    };
};

export default Blogs