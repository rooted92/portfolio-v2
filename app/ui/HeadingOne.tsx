'use client'

import React from 'react'
import { Righteous } from 'next/font/google'

import { motion } from 'motion/react'

const righteous = Righteous({
  subsets: ['latin'],
  weight: ['400'],
})

interface HeadingOneProps {
  text: string
  additionalClasses?: string
}

const HeadingOne = ({ text, additionalClasses }: HeadingOneProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}>
      <h1 className={`${righteous.className} text-2xl mb-2 ${additionalClasses}`}>{text}</h1>
    </motion.div>
  )
}

export default HeadingOne