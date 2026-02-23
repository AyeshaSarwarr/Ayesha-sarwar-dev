import React from 'react'

function Education() {

    const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Punjab - PUCIT",
      period: "2021 - 2025",
      location: "Lahore, Pakistan",
      description:
        "Focused on software engineering, data structures, algorithms, and web development. Graduated with a strong understanding of computer science principles and practical skills.",
      relevantCourses: [
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Software Engineering",
        "Web Development",
        "Object-Oriented Programming",
      ],
    },
    {
      degree: "Intermediate - FSC (Pre-Engineering) ",
      institution: "Punjab College",
      period: "2019 - 2021",
      location: "Lahore, Pakistan",
      description:
        "Strong foundation in mathematics and  physics.",
      relevantCourses: ["Mathematics", "Physics", "Chemistry"],
    },
  ];

  return (
    <div className='md:my-20 m-10 flex flex-col items-center '>
        <div className='flex flex-col md:gap-10 gap-5 justify-center items-center'>
        <b><h1  className='text-center md:text-6xl text-2xl'>Education</h1></b>
        <p className='md:text-xl pb-5'>My academic background</p>
      </div>

        <div className='flex flex-col m-5 gap-4 '>

          {education.map((e, index)=>
            <div className='flex flex-col border-2 border-zinc-700 rounded-2xl md:w-[70vw] md:h-[40vh] md:p-5 p-5 gap-3 hover:scale-102 text-sm w-[70vw] ' key={index}>
                <b><h2 className='text-center md:text-2xl p-3 '>{e.degree}</h2></b>
                <div className='flex justify-end text-sm p-2 '><span>{e.period}</span></div>
                <h2 className='underline underline-offset-4 '>{e.institution}</h2>
                <span className='underline underline-offset-4'>{e.location}</span>
                <span className=''>{e.description}</span>

                <div className='flex flex-row flex-wrap md:gap-2 gap-5 md:mt-4 '>
                  {e.relevantCourses.map((technology, index)=>
                    <div key={index}>
                      <span className='border-2 border-gray-600 rounded-2xl  hover:bg-gray-600 text-xs md:text-sm p-1 md:p-2'>{technology}</span>
                    </div>
                  )}
                </div>

              </div>
          )}

        </div>

    </div>
  )
}

export default Education