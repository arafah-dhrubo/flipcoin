import React, { useState } from 'react'
import {BsMoon, BsSun} from 'react-icons/bs'
import {HiOutlineLogout} from 'react-icons/hi'
const Navbar = () => {
  const [mode, setMode] = useState(true)
  const html = document.getElementsByTagName('html')[0];
  html.setAttribute("data-theme", `${mode?'light':'dark'}`)
 
  return (
    <div className='bg-base-200 h-12 w-full flex items-center gap-x-1 justify-end p-2 absolute'>
      <button className='ml-1 bg-base-100 c w-8 h-8 duration-200 rounded-xl px-2 hover:bg-base-300 text-lg text-center' onClick={()=>{setMode(!mode)}}>{mode?<BsSun/>:<BsMoon/>}</button>
      <button className='ml-1 bg-base-100 c w-8 h-8 duration-200 rounded-xl px-2 hover:bg-base-300 text-lg text-center'><HiOutlineLogout/></button>
    </div>
  )
}

export default Navbar