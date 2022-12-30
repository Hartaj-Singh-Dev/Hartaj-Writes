"use client"
import { useEffect , useRef } from "react"

const Comment = () => {
    const commentBox = useRef<any>()

    useEffect(()=>{
        const scriptComment = document.createElement("script")
        scriptComment.setAttribute("src","https://utteranc.es/client.js")
        scriptComment.setAttribute("crossorigin","anonymous")
        //@ts-ignore
        scriptComment.setAttribute("async",true)
        scriptComment.setAttribute("repo","Hartaj-Singh-Dev/Hartaj-Writes")
        scriptComment.setAttribute("issue-term","url")
        scriptComment.setAttribute("theme","github-dark")
        commentBox.current.appendChild(scriptComment)
    },[])

  return (
    <>
    <div ref={commentBox} className=""></div>
    </>
  )
}

export default Comment