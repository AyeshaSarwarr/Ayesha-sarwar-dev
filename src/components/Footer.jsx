import React from 'react'
import { Github, Linkedin, Mail } from "lucide-react"
import { Link } from 'react-router-dom'

function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/AyeshaSarwar-dev",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/ayeshasarwardeveloper",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:ayeshasarwar1100@gmail.com",
      label: "Email",
    },
  ]

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-gray-400">

      <div className="max-w-6xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-12">

          {/* Brand Section */}
          <div>
            <Link
              to="/"
              className="text-2xl font-bold text-white tracking-wide"
            >
              Ayesha<span className="text-blue-400">.</span>
            </Link>

            <p className="mt-6 text-gray-400 leading-relaxed max-w-sm">
              Full Stack Developer focused on building modern,
              scalable web applications with performance,
              clean architecture and meaningful user experiences.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-6">
              Navigation
            </h3>

            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Skills", href: "/skills" },
                { name: "Projects", href: "/projects" },
                { name: "Contact", href: "/contact" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="hover:text-blue-400 transition duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold mb-6">
              Connect
            </h3>

            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="h-10 w-10 flex items-center justify-center rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-400 hover:text-blue-400 transition duration-300 hover:scale-105"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">

          <p className="text-sm text-gray-500">
            © {currentYear} Ayesha Sarwar. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="text-sm text-gray-400 hover:text-blue-400 transition duration-300"
          >
            ↑ Back to top
          </button>

        </div>

      </div>
    </footer>
  )
}

export default Footer