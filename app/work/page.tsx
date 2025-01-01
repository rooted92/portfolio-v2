'use client'

import React from 'react'
import HeadingOne from '../ui/HeadingOne'
import { motion } from 'motion/react'

const page = () => {
  return (
    <motion.section
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
    >
      <HeadingOne text='Hello World,' additionalClasses='self-start' />
      <p className='text-pretty'>
        I&apos;m a web developer who loves working with <strong className='text-citrine'>Next JS</strong>, <strong className='text-citrine'>React</strong>, <strong className='text-citrine'>Typescript</strong>, and <strong className='text-citrine'>WordPress</strong>. I&apos;ve had the chance to improve web accessibility at Trinchero Family Estates and build clean, user-friendly websites for mechanics and businesses in the automotive and trucking industries. Whether it&apos;s creating a better user experience or solving tricky problems, <strong className='text-persimmon'>my goal is simple:</strong> to create websites that people love to use.
      </p>
    </motion.section>

  )
}

export default page