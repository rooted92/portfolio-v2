import React from 'react'
import { Righteous } from 'next/font/google'

const righteous = Righteous({
  subsets: ['latin'],
  weight: ['400'],
})

const page = () => {
  return (
    <>
    <h2 className={`${righteous.className} text-xl font-semibold`}>Hello World,</h2>
    <p>
      This is paragraph is to talk about my experience. This is paragraph is to talk about my experience. This is paragraph is to talk about my experience. This is paragraph is to talk about my experience.This is paragraph is to talk about my experience.This is paragraph is to talk about my experience.This is paragraph is to talk about my experience.This is paragraph is to talk about my experience. This is paragraph is to talk about my experience. This is paragraph is to talk about my experience. This is paragraph is to talk about my experience.
    </p>
    </>
      
  )
}

export default page