import React from 'react'
import Education from '../components/Education'
import Skills from '../components/Skills'

function About() {
  return (
    <section className="bg-slate-950 text-white">

      <div className="max-w-5xl mx-auto px-6 py-20">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About Me
          </h1>

          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            I'm a passionate Full Stack Developer focused on building modern,
            scalable web applications. I enjoy transforming complex problems
            into simple, elegant solutions with clean architecture and strong
            user experience.
          </p>

          <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mt-6">
            My expertise spans frontend and backend technologies including
            React, Next.js, Node.js, and modern databases.
            I’m constantly learning and challenging myself with new tools
            and real-world projects.
          </p>
        </div>
        <Skills/>
        <Education/>

      </div>
    </section>
  )
}

export default About