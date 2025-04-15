import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile from '../../assets/profile_img.png'
import caret from '../../assets/caret_icon.svg'
import { logOut } from '../../firebase'
const Navbar = () => {
    const navRef = useRef()
    
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY>=80){
                navRef.current.classList.add('nav-dark')
            }else{
                navRef.current.classList.remove('nav-dark')
            }
        })
    },[])

  return (
    <div  className='nav'  ref={navRef}>
    <div className='nav_left'>
        <img src={logo} alt="" />
        <ul>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Populor </li>
            <li>My List</li>
            <li>Browse by Languages</li>
        </ul>
    </div>
    <div className='nav_right'>
        <img src={search_icon} alt="" className='icon' />
        {/* <p>Children</p> */}
        <img src={bell_icon} alt="" className='icon' />
        <div className='nav_profile'>
            <img src={profile} alt="" className='profile' />
            <img src={caret} alt="" />
            <div className="dropdoun">
                <p  onClick={()=>{logOut()}} >Sign Out of NetfliX</p>
                {/* onClick={()=>{logOut()}} */}
            </div>
        </div>
    </div>
</div>
  )
}

export default Navbar
