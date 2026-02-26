import React from 'react'
import HeroSection from '../components/HeroSection'
import FeaturedProjects from '../components/FeaturedProjects'
import { Link } from 'react-router-dom'
import Button from "../components/Button"


function Home() {
  return (
    <div className="bg-linear-to-b from-slate-950 to-slate-900 text-white">

      <HeroSection/>

      {/* Featured Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A selection of projects that reflect my experience in building scalable,
            modern and user-focused web applications.
          </p>
        </div>

        <FeaturedProjects limit={2}/>
      </section>

      <section className="py-20 px-6">
      
      <div className="max-w-4xl mx-auto text-center bg-slate-800 p-12 rounded-3xl shadow-xl">
        
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Let’s Work Together
        </h2>

        <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
          Have a project in mind? Let’s collaborate and turn your
          ideas into powerful digital solutions.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link to="/contact">
            <Button content="Get In Touch"/>
          </Link>

          <Link to="/projects">
            <Button content="View My Work"/>
          </Link>
        </div>

      </div>

    </section>


    </div>
  )
}

export default Home