import HeadingOne from '@/app/ui/HeadingOne'
import React from 'react'
import Image from 'next/image'
import Carousel from '@/app/components/Carousel'
import { Bebas_Neue } from 'next/font/google'
import Link from 'next/link'

const bebasNeue = Bebas_Neue(
  {
    subsets: ['latin'],
    weight: ['400'],
  }
)

const page = () => {
  return (
    <section>
      <HeadingOne text='Freelance' />
      <p className='text-pretty'>I’ve developed responsive and intuitive websites for <Link href='https://gtr-website.vercel.app/' target='_blank' className='hover:text-citrine text-nowrap underline decoration-persimmon decoration-2 hover:no-underline transition-all ease-in'>Galo&apos;s Truck & Trailer Repair</Link> and <Link href='https://adelman-auto.vercel.app/' target='_blank' className='hover:text-citrine text-nowrap underline decoration-persimmon decoration-2 hover:no-underline transition-all ease-in'>Adelman Auto</Link> using Next.js, TypeScript, and Tailwind CSS, designing layouts directly through coding and drawing inspiration from modern web design trends.</p>

      <div className="flex flex-col items-center mt-6">
        <Image src='/gtr-logo.png' alt='GTR logo' width={2000} height={2000} className='h-32 w-auto' />

        <Carousel items={[
          {src: '/gtr-home.png', alt: 'GTR home page'},
          {src: '/gtr-services.png', alt: 'GTR services page'},
          {src: '/gtr-about.png', alt: 'GTR about page'},
          {src: '/gtr-accessibility.png', alt: 'GTR accessibility page'}]} />
      </div>

      <div className="flex flex-col items-center mt-6">

        <h2 className={`flex flex-col font-extrabold items-center justify-center capitalize text-lg tracking-wider ${bebasNeue.className}`}><span>adelman</span><span>auto</span></h2>

        <Carousel items={[
          {src: '/adelman-home.png', alt: 'Adelman Auto home page'},
          {src: '/adelman-services.png', alt: 'Adelman Auto services page'},
          {src: '/adelman-about.png', alt: 'Adelman Auto about page'},
          {src: '/adelman-accessibility.png', alt: 'Adelman Auto accessibility page'}]} />
      </div>
    </section>
  )
}

export default page 