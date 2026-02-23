import React from 'react'

function Skills() {

    const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: ["React/Next.js", "TypeScript","Tailwind CSS","JavaScript", "HTML/CSS"]
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL","REST APIs"],
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️",
      skills: ["Git/GitHub", "Vercel"],
      
    },
    {
      title: "Design & Others",
      icon: "🎯",
      skills: ["Figma", "UI/UX Design", "Responsive Design", "SEO"],
    },
  ]

  const technologies = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "PostgreSQL",
    "Tailwind CSS",
    "Express.js",
    "Git",
    "Firebase",
    "Figma",
    "Vercel",
    "REST APIs",
  ]

  return (
    <section className='flex flex-col '>
      <div className='flex flex-col items-center md:m-20 m-10 gap-4'>
        <h1 className='md:text-6xl text-2xl'>Skills & Expertise</h1>
        <p className='md:text-2xl'>Here are the technologies and tools I work with to bring ideas to life</p>
      </div>

      <div className='flex flex-wrap justify-center items-center'>
        {skillCategories.map((skill, index)=>
          <div key={index} className='border-2 border-gray-400 md:w-[40vw] md:h-[50vh] w-[80vw] rounded-2xl md:p-10 m-4 p-5 hover:scale-105'>
           <div className='flex gap-3 md:py-5 py-3'>
              <span>{skill.icon}</span>
              <h1 className='md:text-2xl text-xl'>{skill.title}</h1>
           </div>
            {skill.skills.map((s,index)=>
              <div key={index} className='flex flex-col'>
                <span className='bg-gray-700 rounded m-2 p-2 hover:bg-gray-600'>{s}</span>
                
              </div>)}
          </div>
        )}
      </div>

    </section>
  )
}

export default Skills