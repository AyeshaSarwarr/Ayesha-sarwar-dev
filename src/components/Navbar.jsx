import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {

  return (
    <header className='flex gap-5 justify-end md:px-20 bg-white text-black p-4 md:text-xl text-xs'>
      
      <NavLink to="/" className={({isActive})=> `${isActive ? "underline underline-offset-8 text-blue-700 " : ""} hover:text-gray-600`}>Home</NavLink>
      
      <NavLink to="/about" className={({isActive})=> `${isActive ? "underline underline-offset-8 text-blue-700" : ""} hover:text-gray-600 `}>About</NavLink>

      <NavLink to="/skills" className={({isActive})=> `${isActive ? "underline underline-offset-8 text-blue-700" : ""} hover:text-gray-600`}>Skills</NavLink>

      <NavLink to="/projects" className={({isActive})=> `${isActive ? "underline underline-offset-8 text-blue-700" : ""} hover:text-gray-600`}>Projects</NavLink>

      <NavLink to="/contact" className={({isActive})=> `${isActive ? "underline underline-offset-8 text-blue-700" : ""} hover:text-gray-600`}>Contact</NavLink>
    </header>
  )
}

export default Navbar