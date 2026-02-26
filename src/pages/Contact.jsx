import React from "react"
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"

function Contact() {

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "ayeshasarwar1100@gmail.com",
      href: "mailto:ayeshasarwar1100@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+92 3056777530",
      href: "tel:+923056777530",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Lahore, Pakistan",
      href: "",
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      href: "https://github.com/AyeshaSarwarr",
      username: "AyeshaSarwar-dev",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/ayeshasarwardeveloper",
      username: "Ayesha Sarwar",
    },
  ]

  return (
    <section className="bg-slate-950 text-white">

      <div className="max-w-5xl mx-auto px-6 py-24">

        {/* Heading */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Get In Touch
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Have a project in mind or want to collaborate?
            I’d love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10 space-y-8">
            <h2 className="text-2xl font-semibold mb-6">
              Contact Information
            </h2>

            {contactInfo.map((contact, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-slate-800 border border-slate-700">
                  <contact.icon size={18} className="text-blue-400" />
                </div>

                <div>
                  <p className="text-gray-400 text-sm">{contact.title}</p>
                  {contact.href ? (
                    <a
                      href={contact.href}
                      className="text-white hover:text-blue-400 transition duration-300"
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <p className="text-white">{contact.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Social */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10 space-y-8">
            <h2 className="text-2xl font-semibold mb-6">
              Social Profiles
            </h2>

            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 hover:text-blue-400 transition duration-300"
              >
                <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-slate-800 border border-slate-700">
                  <social.icon size={18} className="text-blue-400" />
                </div>

                <div>
                  <p className="text-gray-400 text-sm">{social.name}</p>
                  <p className="text-white">{social.username}</p>
                </div>
              </a>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact