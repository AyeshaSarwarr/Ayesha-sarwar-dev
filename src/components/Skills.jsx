import React from "react"

function Skills() {

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript", "HTML/CSS"]
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST APIs"],
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️",
      skills: ["Git", "GitHub", "Vercel", "Firebase"],
    },
    {
      title: "Design & Others",
      icon: "🎯",
      skills: ["Figma", "UI/UX Design", "Responsive Design", "SEO"],
    },
  ]

  return (
    <section className="bg-slate-950 text-white">

      <div className="max-w-6xl mx-auto px-6 py-24">

        {/* Heading */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Skills & Expertise
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Technologies and tools I use to design, build, and scale modern web applications.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-blue-400 transition duration-300"
            >
              {/* Title */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-2xl">{category.icon}</span>
                <h2 className="text-xl md:text-2xl font-semibold">
                  {category.title}
                </h2>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 text-sm bg-slate-800 border border-slate-700 rounded-full text-gray-300 hover:border-blue-400 hover:text-blue-400 transition duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Skills