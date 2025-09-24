import React from 'react'
import logo from "../assets/krishsonilogo.webp"
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'


function Nav() {
  return (
    <nav className="flex items-center justify-between" >
        <a href="/" aria-label="Home">
          <img src={logo} alt="Logo" className='h-24 w-auto mx-2' width={100} height={100} />

        </a>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl cursor-pointer" >
            <a href='https://www.linkedin.com/in/krish-soni-39a6971b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
             target='_blank'
             rel='noopener noreferrer'
             aria-label='lnkedIn'> <FaLinkedin/> </a>    
            

             <a href='https://github.com/krishcodes1511?tab=repositories'
             target='_blank'
             rel='noopener noreferrer'
             aria-label='lnkedIn'><FaGithub/>  </a>
             

             <a href='https://www.instagram.com/'
             target='_blank'
             rel='noopener noreferrer'
             aria-label='lnkedIn'><FaInstagram/> </a>
             

             <a href='https://www.linkedin.com/in/your-twitter-profile'
             target='_blank'
             rel='noopener noreferrer'
             aria-label='lnkedIn'><FaTwitter/> </a>
            
        </div>
    </nav>
  )
}

export default Nav
