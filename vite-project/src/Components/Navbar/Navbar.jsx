import React from 'react'
import './Navbar.css'
import navlogo  from '../../assets/Admin_Assets/nav-logo.svg'
import nav_profile from '../../assets/Admin_Assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
       <img src={navlogo} alt=""  className='nav-logo'/>
       <img src={nav_profile} alt=""  className='nav-profile'/>

      
    </div>
  )
}

export default Navbar
