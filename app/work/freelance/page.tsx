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
      <p className='text-pretty'>I’ve developed responsive and intuitive websites for <Link href='/https://gtr-website.vercel.app/' target='_blank' className='hover:text-citrine text-nowrap underline decoration-persimmon decoration-2 hover:no-underline transition-all ease-in'>Galo's Truck & Trailer Repair</Link> and <Link href='/https://adelman-auto.vercel.app/' target='_blank' className='hover:text-citrine text-nowrap underline decoration-persimmon decoration-2 hover:no-underline transition-all ease-in'>Adelman Auto</Link> using Next.js, TypeScript, and Tailwind CSS, designing layouts directly through coding and drawing inspiration from modern web design trends.</p>

      <div className="flex flex-col items-center mt-6">
        <Image src='/gtr-logo.png' alt='GTR logo' width={2000} height={2000} className='h-32 w-auto' />
        <Carousel width='w-[80%]' height='h-full' objectType='object-contain' items={['/gtr-home.png', '/gtr-certs-area.png', '/gtr-area-footer.png', '/gtr-services.png', '/gtr-about.png', '/gtr-accessibility.png', '/gtr-home-mobile.png', '/gtr-service-mobile.png', '/gtr-about-mobile.png', '/gtr-accessibility-mobile.png']} />
      </div>

      <div className="flex flex-col items-center mt-6">

        <h2 className={`flex flex-col font-extrabold items-center justify-center capitalize text-lg tracking-wider ${bebasNeue.className}`}><span>adelman</span><span>auto</span></h2>

        <Carousel width='w-[80%]' height='md:h-auto lg:h-full' objectType='object-contain' items={['/adelman-hero.png', '/adelman-reviews.png', '/adelman-services.png', '/adelman-about.png', '/adelman-accessibility.png', '/adelman-hero-mobile.png', '/adelman-area-footer.png', '/adelman-services-mobile.png', '/adelman-about-mobile.png', '/adelman-accessibility-mobile.png']} />
      </div>
    </section>
  )
}

export default page 