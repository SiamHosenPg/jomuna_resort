import React from 'react'
import { NavLink } from 'react-router'
const Nav = () => {
  return (
    <div className='Navigation sticky top-0  w-full bg-white shadow-lg z-50'>
        <div className=" Ratio h-20 w-full  flex items-center justify-between  ">
            <div className="Logo  font-bold"><NavLink to="/"><span className=' text-2xl'>Jomuna Resort</span></NavLink></div>
            <ul className="Links flex items-center justify-center gap-10 font-medium">
                <li><NavLink to="/home">Home</NavLink></li>
                <li><NavLink to="/home">About</NavLink></li>
                <li><NavLink to="/home">Services</NavLink></li>
                <li><NavLink to="/home">Contructs</NavLink></li>
            </ul>
            <div className="MenuBar p-3"> <i class="fa-solid fa-bars-staggered text-xl"></i></div>
        </div>
    </div>
  )
}

export default Nav
