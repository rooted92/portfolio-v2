import React from 'react'
import HeadingOne from '../ui/HeadingOne'
import Link from 'next/link'


const page = () => {
  return (
    <section className='flex flex-col justify-center items-center mx-2'>
        <HeadingOne text='Experience' />

        <div className="grid grid-cols-1 auto-rows-auto gap6">
            <div className="flex flex-col">
                <Link href={'/experience/tfe'} className='bg-gradient-to-r from-citrine to-persimmon bg-clip-text text-transparent bg-transparent text-lg'>Trinchero Family Estates</Link>
            </div>
            <div className="flex flex-col">
                <Link href={'/experience/freelance'} className='bg-gradient-to-r from-citrine to-persimmon bg-clip-text text-transparent bg-transparent text-lg'>Freelance</Link>
            </div>
        </div>
    </section>
  )
}

export default page