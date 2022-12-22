import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
 
  <footer className="w-full h-44 bg-[#081a2a] flex flex-col justify-center items-center">
    <div className="w-full sm:w-[70vw] h-full flex flex-col items-center justify-evenly py-2 px-4 sm:px-0 ">
        <div className="flex w-2/3 sm:w-[20rem] justify-evenly items-center">
         <Link href="https://github.com/Hartaj-Singh-Dev"> <i className="fa-brands fa-2x text-[#F9AA5E] fa-github"></i> </Link>
       <Link href="https://www.instagram.com/thehartajsingh/" >  <i className="fa-brands fa-2x  text-[#F9AA5E] fa-instagram"></i> </Link>
       <Link href="https://twitter.com/thehartajsingh">  <i className="fa-brands fa-2x text-[#F9AA5E] fa-twitter"></i> </Link>
        <Link href="https://discord.gg/xKuNXh8N5f"><i className="fa-brands text-[#F9AA5E] fa-2x fa-discord"></i></Link>
        </div>
        <div>
            <h2 className="text-slate-300 font-mono text-lg">Copyright © Hartaj Singh Sidhu. Licensed under MIT.</h2>
        </div>
    </div>
  </footer>
 
  ) 
}

export default Footer