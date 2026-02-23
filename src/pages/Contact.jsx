import React from 'react'
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { Link } from 'react-router-dom';
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
        value: "+92 3056777530 ",
        href: "tel:+923056777530",
      },
      {
        icon: MapPin,
        title: "Location",
        value: "Lahore, Pakistan",
        href: "",
      },
    ];
  
    const socialLinks = [
      {
        icon: Github,
        name: "GitHub",
        href: "https://github.com/AyeshaSarwar-dev",
        username: "AyeshaSarwar-dev",
      },
      {
        icon: Linkedin,
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/ayeshasarwardeveloper",
        username: "Ayesha Sarwar",
      },
      {
        icon: Mail,
        name: "Email",
        href: "mailto:ayeshasarwar1100@gmail.com",
        username: "ayeshasarwar1100@gmail.com",
      },
    ];

  return (
    <section className='md:m-20 m-10 '>
      <div className='flex flex-col items-center gap-4 md:py-10 py-5'>
        <h1 className='md:text-6xl text-2xl'>Get In Touch</h1>
        <p className='md:text-2xl'>Have a project in mind or want to collaborate? I'd love to hear from you!</p>
      </div>

      <div className='flex flex-col border-2 border-gray-600 rounded-2xl p-10'>
        {contactInfo.map((contact,index)=>
          <div key={index} className='flex gap-5 hover:text-blue-400 hover:scale-102'>
            <contact.icon className='h-5 w-5 sm:h-6 sm:w-6 text-blue-400 my-5 hover:scale-110'/>
            <div className='flex flex-col py-3'>
              <p>{contact.title}</p>
              <span><Link to={contact.href} target="_blank">{contact.value}</Link></span>
            <hr className='w-[50vw] my-3'/>
            </div>
          </div>
        )}
      </div>

        <div className='flex flex-col border-2 border-gray-600 rounded-2xl p-10 mt-5'>
        {socialLinks.map((social,index)=>
          <div key={index} className='flex gap-5 hover:text-blue-400 hover:scale-102'>
            <social.icon className='h-5 w-5 sm:h-6 sm:w-6 text-blue-400 my-5 hover:scale-110'/>
            <div className='flex flex-col py-3'>
              <p>{social.name}</p>
              <span><Link to={social.href} target="_blank">{social.username}</Link></span>
              <hr className='w-[50vw] my-3'/>
            </div>
          </div>
        )}
      </div>

    </section>
  )
}

export default Contact