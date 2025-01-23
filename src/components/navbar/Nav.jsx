import React, { useState } from 'react'
import { NavLink } from 'react-router'
import { NavigationLinks } from '../../assets/assist'

const Nav = () => {

  const [PositionNav, SetPositionnav] = useState("-400px")

  const BarToggle = ()=>{
    if (PositionNav == "-400px"){
      SetPositionnav("0px")
    }else{
      SetPositionnav("-400px")
    }
  }

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
            <div onClick={BarToggle} className="MenuBar p-3"> <i class="fa-solid fa-bars-staggered text-xl"></i></div>
        </div>

        <div style={{right: PositionNav}} className="BarSection fixed w-[390px] top-20 bg-white px-16 py-5 z-40 h-[100vh] transition-all">
          <ul>
          {
           NavigationLinks && NavigationLinks.map(LinksData =>{
              return(
                <li className='mt-6'><NavLink to={LinksData.PathLink}>{LinksData.LinksName}</NavLink></li>
              )
            })
          }
          </ul>
        </div>
    </div>
  )
}

export default Nav
