import { Link } from 'react-router-dom'
import Button from './Button'
import Projects from './Projects'

function FeaturedProjects({ limit }) {

  return (
    <div className="grid md:grid-cols-2 gap-12">

      {Projects.slice(0, limit).map((project, index) => (
        <div
          key={index}
          className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-blue-400 transition duration-300 flex flex-col"
        >

          {/* Image */}
          <div className="overflow-hidden">
            <img
              src={project.picture}
              alt={project.title}
              className="w-full h-56 object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* Content */}
          <div className="p-8 flex flex-col grow">

            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              {project.title}
            </h2>

            <p className="text-gray-400 text-sm md:text-base mb-6 grow">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-3 mb-8">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm bg-slate-800 border border-slate-700 rounded-full text-gray-300 hover:border-blue-400 hover:text-blue-400 transition duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-auto">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button content="GitHub" />
              </a>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button content="Live Preview" />
                </a>
              )}
            </div>

          </div>
        </div>
      ))}

    </div>
  )
}

export default FeaturedProjects