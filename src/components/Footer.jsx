import React from 'react'
import { Github, Linkedin, Mail, Heart } from "lucide-react"
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
      <footer className="border-t border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">

            <div className="space-y-4 text-center sm:text-left lg:col-span-2">
              <span className="ml-2">
              <Link
                to="/"
                className="inline-block text-xl sm:text-2xl font-bold text-white hover:text-blue-400 transition-colors duration-300"
              >Ayesha</Link>
              </span>
              <p className="text-gray-400 max-w-md mx-auto sm:mx-0 text-sm sm:text-base">
                <span className="text-gray-300">
                  Full Stack Developer passionate about creating innovative web solutions and sharing knowledge with the
                  community.
                </span>
              </p>
            </div>
  
            {/* Quick Links */}
            <div className="space-y-4 text-center sm:text-left">
              <h3 className="text-white font-semibold text-base sm:text-lg">
                Navigation
              </h3>
              <div className="space-y-2">
                {[
                  { name: "Home", href: "/" },
                  { name: "About", href: "/about" },
                  { name: "Skills", href: "/skills" },
                  { name: "Projects", href: "/projects" },
                  // { name: "Blog", href: "/blog" },
                  { name: "Contact", href: "/contact" },
                ].map((link, index) => (
                  <span key={index}>
                    <Link
                    to={link.href}
                    className="flex flex-col text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base"
                  >{link.name}</Link>
                  </span>
                ))}
              </div>
            </div>
  
            {/* Social Links */}
            <div className="space-y-4 text-center sm:text-left">
              {/* <h2 className="text-white font-semibold text-base sm:text-lg"> */}
                <h3 className="text-white"> Social </h3>
              
              <div className="flex justify-center sm:justify-start space-x-3 sm:space-x-4">
                {socialLinks.map((social, index) => (
                  <span
                    key={index}
                    
                    size="sm"
                    className="text-gray-400 hover:text-blue-400 hover:bg-slate-800 transition-all duration-300 hover:scale-110 h-8 w-8 sm:h-10 sm:w-10 p-0"
                    
                  >
                    
                    <Link to={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                      <social.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </Link>
                  </span>
                ))}
              </div>
            </div>
          </div>
  
          {/* Bottom Section */}
          <div className="border-t border-slate-800 mt-6 sm:mt-8 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              <span className="text-gray-300">© {currentYear} Ayesha Sarwar</span>
            </div>
            <button
              onClick={scrollToTop}
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-xs sm:text-sm font-mono"
            >
              [ Back to top ]
            </button>
          </div>
        </div>
      </footer>
    )
}

export default Footer