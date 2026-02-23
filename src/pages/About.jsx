import React from 'react'
import Education from '../components/Education'

function About() {
  return (
    <div className='md:m-20 m-10'>

      <div className='flex flex-col md:gap-20 gap-5 justify-center items-center'>
        <b><h1 className='text-center md:text-5xl text-2xl'>About Me</h1></b>
        <span className=' md:text-2xl  md:w-[60vw]'>I'm a passionate Full Stack Developer. I specialize in modern web technologies and love turning complex problems into simple, beautiful designs.
        <br/>
        <br />
        My expertise spans across frontend and backend development, with a strong focus on React, Next.js, Node.js, and modern database technologies. I'm always eager to learn new technologies and take on challenging projects.</span>
      </div>

      <Education/>
    </div>
  )
}

export default About