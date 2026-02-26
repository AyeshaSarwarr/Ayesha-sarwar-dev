import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {

  const navLinkStyle = ({ isActive }) =>
    `relative px-3 py-2 transition duration-300 
     ${isActive 
       ? "text-blue-400" 
       : "text-gray-300 hover:text-white"
     }`

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/70 border-b border-slate-800">
      
      <div className="max-w-6xl mx-auto px-8 py-4 flex justify-between items-center">

        {/* Logo / Brand */}
        <NavLink to="/" className="text-sm md:text-2xl font-bold text-white tracking-wide">
          Ayesha<span className="text-blue-400">.</span>
        </NavLink>

        {/* Navigation Links */}
        <nav className="flex md:gap-6 text-xs md:text-base font-medium">
          
          <NavLink to="/" className={navLinkStyle}>
            Home
          </NavLink>

          <NavLink to="/about" className={navLinkStyle}>
            About
          </NavLink>

          <NavLink to="/projects" className={navLinkStyle}>
            Projects
          </NavLink>

          <NavLink to="/contact" className={navLinkStyle}>
            Contact
          </NavLink>

        </nav>

      </div>
    </header>
  )
}

export default Navbar