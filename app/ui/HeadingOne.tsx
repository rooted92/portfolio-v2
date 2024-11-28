import React from 'react'
import { Righteous } from 'next/font/google'

const righteous = Righteous({
    subsets: ['latin'],
    weight: ['400'],
})

interface HeadingOneProps {
    text: string
}

const HeadingOne = ({text}: HeadingOneProps) => {
  return (
    <h1 className={`${righteous.className} text-2xl mb-2`}>{text}</h1>
  )
}

export default HeadingOne