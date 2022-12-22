import fs from "fs"
import BlogHead from "./BlogHead";
import matter  from "gray-matter";

export const getPosts = async () =>{
    const files = await fs.readdirSync("Posts")
    const posts = await files.map((filename)=>{
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

const Blogs: any = async () => {
  const posts =  await getPosts();
  const Posts =  posts.props.posts
  return (
    <>
    <section className="w-full min-h-[50vh] flex flex-col justify-center items-center bg-[#071a2d]">
        <div className="w-full min-h-[40vh] sm:w-[70vw] px-3 sm:px-0">
            <div>
                <h1 className="font-['Unbounded'] text-slate-200 text-2xl sm:text-5xl cursor-pointer"> Blog Posts: <span className="opacity-80 text-[1rem] sm:text-[2.5rem] hover:opacity-100"> #</span> </h1>
                <hr className="w-full mt-2 underline decoration-slate-100 decoration-4 underline-offset-4"></hr>
               
            </div>
            <div>
            
                 {
                   await Posts.map((post, index:number) =>{
                        return ( <><BlogHead key={post.slug} slug={post.slug} article={post.frontmatter} /></>)
                    })
                } 

            </div>
        </div>
    </section>
    
    </>
  )
}




export default Blogs