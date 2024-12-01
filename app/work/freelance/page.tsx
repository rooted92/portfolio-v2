import HeadingOne from '@/app/ui/HeadingOne'
import React from 'react'
import Image from 'next/image'
import Carousel from '@/app/components/Carousel'

const page = () => {
  return (
    <section>
      <HeadingOne text='Freelance' />
      <p className='text-pretty'>I’ve developed responsive and intuitive websites for  using Next.js, TypeScript, and Tailwind CSS, designing layouts directly through coding and drawing inspiration from modern web design trends.</p>
      <div className="flex flex-col items-center mt-6">
        <Image src='/gtr-logo.png' alt='GTR logo' width={2000} height={2000} className='h-20 w-auto mb-4' />
        <Carousel items={['/gtr-home.png', '/gtr-certs-area.png', '/gtr-area-footer.png', '/gtr-services.png', '/gtr-about.png', '/gtr-accessibility.png', '/gtr-home-mobile.png', '/gtr-service-mobile.png', '/gtr-about-mobile.png', '/gtr-accessibility-mobile.png']} />
      </div>

      <div className="flex flex-col items-center mt-6">
        <div className="flex gap-4 mb-4">
          <div className="flex justify-center items-center bg-slate-500 dark:bg-slate-900 p-4 rounded-full">
            <div className="flex justify-center items-center gap-4 p-3 bg-slate-300 dark:bg-slate-800 rounded-full">
              <Image src='/paul-adelman.jpg' alt='Photo of Paul Adelman' width={400} height={400} className='rounded-full object-cover object-[75%] h-20 w-20' />
            </div>
          </div>

          <h2 className='flex flex-col font-bold items-center justify-center capitalize'><span>adelman</span><span>auto</span></h2>
        </div>


        <Carousel items={['/adelman-hero.png', '/adelman-reviews.png', '/adelman-services.png', '/adelman-about.png', '/adelman-accessibility.png']} />
      </div>
    </section>
  )
}

export default page