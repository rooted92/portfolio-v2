import React from 'react'
import { Righteous } from 'next/font/google'
import HeadingOne from '../ui/HeadingOne'

const righteous = Righteous({
  subsets: ['latin'],
  weight: ['400'],
})

const page = () => {
  return (
    <>
      <HeadingOne text='Hello World,' />
      <p>
        I&apos;m a passionate web developer skilled in WordPress, PHP, and JavaScript. I&apos;ve enhanced web accessibility at Trinchero Family Estates and built dynamic websites for mechanics, leveraging modern tools like Next.js and TypeScript.
      </p>
    </>

  )
}

export default page