import React from 'react'
import FeaturedProjects from '../components/FeaturedProjects'

function Projects() {
  return (
    <section className='md:py-10'>
      <div className='flex flex-col items-center md:m-20 m-10 gap-4'>
        <h1 className='md:text-6xl text-2xl'>My Projects</h1>
        <p className='md:text-2xl'>A collection of projects that showcase my skills and experience in web development</p>
      </div>
      <FeaturedProjects limit={5}/>
    </section>
  )
}

export default Projects