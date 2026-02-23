import React from 'react'
import HeroSection from '../components/HeroSection'
import ContactSection from '../components/ContactSection'
import FeaturedProjects from '../components/FeaturedProjects'

function Home() {
  return (
    <section>
      <HeroSection/>

      <div className='flex flex-col items-center m-10'>
        <h1 className='md:text-5xl text-3xl md:my-10 my-2'>Featured Projects</h1>
        <p className='md:text-xl'>Here are some of my recent projects that showcase my skills and experience</p>
      </div>
        <FeaturedProjects limit={2}/>

      <ContactSection/>
    </section>
  )
}

export default Home