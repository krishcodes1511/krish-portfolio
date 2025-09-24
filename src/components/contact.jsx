import React from 'react'
import { CONTACT } from '../constant'
import { motion } from 'framer-motion'

function Contact() {
  return (
    <div className='border-t border-stone-900 pb-20'>
        <motion.h2 
        whileInView={{opacity:1, y: 0}}
        initial={{opacity:1, y:-100}}
        transition={{duration:0.5}}       
        className='my-10 text-center text-4xl'>
        Get In Touch
        </motion.h2>

        <div className='text-center tracking-tighter'>
            <motion.p
            whileInView={{opacity:1, x: 0}}
            initial={{opacity:1, x:-100}}
            transition={{duration:1}}           
            className='my-4'>
                {CONTACT.address}
            </motion.p>

            <motion.p
            whileInView={{opacity:1, x: 0}}
            initial={{opacity:1, x:100}}
            transition={{duration:1}}  
            className='my-4'>
                {CONTACT.phoneNo}
            </motion.p>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=krishsoni982@gmail.com&su=Hello%20Krish&body=Just%20wanted%20to%20say%20hi!" className='border-b'> {CONTACT.email}</a>
        </div>
      
    </div>
  )
}

export default Contact
