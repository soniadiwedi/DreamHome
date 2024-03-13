import React, { useState } from 'react'
import "./navbar.scss"
import logo from "../../image/logo.png"
import menu from "../../image/menu.png"
const Navbar = () => {
    const [open,setOpen]=useState(false)
  return (
    <nav>
        <div className='left'>
            <a href="/" className='logo'>
            <img src={logo} alt=""/>
            <span>DreamHome</span>
            </a>
            <a href="/home">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/agent">Agent</a>
        </div>
        <div className='right'>
            <a href="/signin">Sign In</a>
            <a href="/signup" className='register'>Sign Up</a>
            <div className='menuIcon'>
                <img src={menu} alt="" onClick={()=>setOpen((prev)=>!prev)}/>
            </div>
            <div className={open?'menu active':'menu'}>
            <a href="/home">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/agent">Agent</a>
            <a href="/signin">Sign In</a>
            <a href="/signup">Sign Up</a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar