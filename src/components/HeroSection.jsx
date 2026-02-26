import { Link } from 'react-router-dom'
import Button from "./Button"

function HeroSection() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-b from-slate-950 to-slate-900 text-white">

      <div className="max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-20 py-20">

        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16">

          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">

            <p className="text-gray-400 text-base sm:text-lg mb-3">
              Hello, I'm
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
              Ayesha Sarwar
            </h1>

            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-400 font-medium mb-6">
              Full Stack Developer
            </h2>

            <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0 mb-8">
              I craft digital experiences using modern technologies,
              transforming ideas into scalable web applications.
              I focus on clean architecture, performance, and
              meaningful user experiences.
            </p>

            <div className="flex justify-center lg:justify-start">
              <Link to="/projects">
                <Button content="View My Work" />
              </Link>
            </div>

          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 flex justify-center">

            <div className="relative">
              <img
                src="profile.png"
                alt="Ayesha Sarwar"
                className="
                  w-40 
                  sm:w-56 
                  md:w-64 
                  lg:w-80 
                  xl:w-96 
                  rounded-full 
                  border-4 
                  border-slate-800 
                  shadow-2xl 
                  hover:scale-105 
                  transition duration-300
                "
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default HeroSection