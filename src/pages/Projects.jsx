import React from 'react'
import FeaturedProjects from '../components/FeaturedProjects'

function Projects() {
  return (
    <section className="bg-slate-950 text-white">

      <div className="max-w-6xl mx-auto px-6 py-24">

        {/* Heading */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            My Projects
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            A collection of selected projects demonstrating my
            experience in building scalable, modern web applications.
          </p>
        </div>

        <FeaturedProjects limit={5} />

      </div>
    </section>
  )
}

export default Projects