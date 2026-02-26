import React from 'react'

function Education() {

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Punjab - PUCIT",
      period: "2021 - 2025",
      location: "Lahore, Pakistan",
      description:
        "Focused on software engineering, data structures, algorithms, and web development. Developed strong foundations in computer science principles with practical implementation experience.",
      relevantCourses: [
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Software Engineering",
        "Web Development",
        "Object-Oriented Programming",
      ],
    },
    {
      degree: "Intermediate - FSC (Pre-Engineering)",
      institution: "Punjab College",
      period: "2019 - 2021",
      location: "Lahore, Pakistan",
      description:
        "Built a strong foundation in mathematics and physics with analytical problem-solving focus.",
      relevantCourses: ["Mathematics", "Physics", "Chemistry"],
    },
  ];

  return (
    <section className="mt-20">

      {/* Section Heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Education
        </h2>
        <p className="text-gray-400 text-lg">
          My academic background
        </p>
      </div>

      {/* Education Cards */}
      <div className="space-y-10">

        {education.map((e, index) => (
          <div
            key={index}
            className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-blue-400 transition duration-300"
          >

            {/* Top Row */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
              
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-white">
                  {e.degree}
                </h3>
                <p className="text-blue-400 font-medium">
                  {e.institution}
                </p>
                <p className="text-gray-500 text-sm">
                  {e.location}
                </p>
              </div>

              <div className="text-gray-400 text-sm md:text-base">
                {e.period}
              </div>

            </div>

            {/* Description */}
            <p className="text-gray-400 leading-relaxed mb-6">
              {e.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              {e.relevantCourses.map((course, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm bg-slate-800 border border-slate-700 rounded-full text-gray-300 hover:border-blue-400 hover:text-blue-400 transition duration-300"
                >
                  {course}
                </span>
              ))}
            </div>

          </div>
        ))}

      </div>

    </section>
  )
}

export default Education