import React from 'react'
import { Link } from 'react-router-dom'
import Button from "./Button"

function ContactSection() {
  return (
    <section className='md:m-20 m-10'>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='md:text-5xl text-3xl md:my-10 my-5'>Let's Work Together</h1>
            <p className='md:text-xl'>Ready to bring your ideas to life? Let's collaborate on your next project and create something amazing together.</p>
        </div>
        <div className='flex my-5 justify-center gap-5 pt-3'>
            
              <Link to="/contact"><Button content="Get in touch"/></Link>
            
            <Link to="/projects"><Button content="View My work"/></Link>
        </div>
    </section>
  )
}

export default ContactSection