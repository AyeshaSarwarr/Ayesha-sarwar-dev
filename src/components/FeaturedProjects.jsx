import { Link } from 'react-router-dom'
import Button from './Button'
import Projects from './Projects'

function FeaturedProjects({limit}) {

  return (
    <section className='md:m-10 m-5'>
      
      <div className='flex gap-5 md:flex-row flex-col flex-wrap'>

        {Projects.slice(0, limit).map((project, index)=>
        <div key={index} className='flex flex-col  border-3 border-gray-800 rounded-2xl gap-3 hover:scale-102 '>
          
          <div className='flex flex-col justify-center items-center gap-4 p-4 md:h-[50vh] md:w-[45vw]'>
            <img src={project.picture} alt="project image" 
            className='md:h-[30vh] h-[15vh] rounded-2xl'/>
            <b><h1 className='md:text-3xl'>{project.title}</h1></b>
            <p className='text-xs md:text-sm'>{project.description}</p>
          </div>
          
          <div className='flex md:flex-row flex-wrap gap-4 mx-4'>
            {project.technologies.map((technology, index)=>
                <div key={index}>
                  <span className='bg-gray-700 rounded-2xl px-2 md:px-4 py-2 hover:bg-gray-600  md:text-sm text-xs'>{technology}</span>
                </div>
            )}
          </div>
           <div className='flex '>
            <Link to={project.githubUrl} className='m-5' target='_blank'><Button content="Github"/></Link>
           <Link to={project.liveUrl} className='m-5' target='_blank'><Button content="Live Preview"/></Link>
           </div>
        </div>
      )}

      </div>

    </section>
  )
}

export default FeaturedProjects