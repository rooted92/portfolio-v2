import React from 'react'
import HeadingOne from '../ui/HeadingOne'
import Link from 'next/link'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className='flex flex-col justify-center items-center mx-2'>
      <HeadingOne text='Experience' />

      <div className="flex items-center gap-4 mb-6">
        <div className="flex flex-col">
          <Link href={'/experience/tfe'} className='underline decoration-citrine underline-offset-2 decoration-2 hover:underline-offset-4 hover:decoration-persimmon transition-all ease-in text-lg'>Trinchero Family Estates</Link>
        </div>
        <div className="flex flex-col">
          <Link href={'/experience/freelance'} className='underline decoration-citrine underline-offset-2 decoration-2 hover:underline-offset-4 hover:decoration-persimmon transition-all ease-in text-lg'>Freelance</Link>
        </div>
      </div>
      {children}
      <div>
        Here is more information about my experience.
      </div>
    </section>
  )
}

export default Layout