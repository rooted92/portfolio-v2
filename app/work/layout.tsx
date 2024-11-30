import React from 'react'
import HeadingOne from '../ui/HeadingOne'
// import Link from 'next/link'
import Tabs from '../ui/Tabs'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className='flex flex-col justify-center items-center container mx-auto'>
      <HeadingOne text='Work' />

      <Tabs />
      <section className=' tiniest:mx-4 sm:w-8/12 lg:w-6/12 flex flex-col justify-center items-center'>
        {children}
      </section>
    </section>
  )
}

export default Layout