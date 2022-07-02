import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../navbar/Navbar';

const Sidebar = () => {
    const initialState = localStorage.getItem("open") ?? true;

    const [open, setOpen] = useState(initialState)
    useEffect(() => {
        localStorage.setItem("open", open)
    });

    const toggler = () => {
        setOpen(!open)
    }

    console.log(open)
    return (
        <div className='flex '>
            <div className={`${open === true ? "w-56" : "w-14"} z-10 bg-base-200 h-screen duration-200 p-1`}>
                <ul>

                </ul>
                <div className='flex items-center justify-between hover:bg-base-100 hover:duration-200 p-2 rounded-lg'>
                    <small className={`${open === true ? "" : "hidden"} text-accent-content`}>Collapse</small>
                    <input type="checkbox" class="toggle toggle-sm" onChange={toggler} />
                </div>
            </div>
            <Navbar/>
        </div>
    )
}

export default Sidebar