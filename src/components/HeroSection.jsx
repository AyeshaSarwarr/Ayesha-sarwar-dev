import { Link } from 'react-router-dom'
import Button from "./Button"

function HeroSection() {
  return (
    <section className='flex justify-center md:m-50 my-10'>
      <div className='flex flex-col justify-center my-15'>
        
          <h1 className='md:text-2xl'>Hello, I'm </h1> 
          <span className='md:text-7xl text-3xl md:my-5'>Ayesha Sarwar</span>
          <h2 className='md:text-3xl text-xl text-blue-300 md:my-3 my-2'>"Full Stack Developer"</h2>

              
          <span className='md:text-xl text-sm md:w-[40vw] w-[50vw] md:my-5 my-5'>I craft digital experiences with modern technologies, turning ideas into scalable web applications. Passionate about clean code, user experience, and continuous learning.</span>
              
              
          <Link to="/projects">
            <Button content="View My Work"/>
          </Link>
            
        </div>
        <div>
            
            <img src="profile.png" alt="profile picture" className=' md:scale-110 w-[20vw] mx-10 my-20 rounded-full hover:scale-115'/>
        </div>

        {/* md:h-[30vh] */}
    </section>
  )
}

export default HeroSection