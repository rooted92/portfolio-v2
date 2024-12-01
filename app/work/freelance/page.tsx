import HeadingOne from '@/app/ui/HeadingOne'
import React from 'react'

const page = () => {
  return (
    <section>
        <HeadingOne text='Freelance' />
        <p>I’ve developed responsive and intuitive websites for  using Next.js, TypeScript, and Tailwind CSS, designing layouts directly through coding and drawing inspiration from modern web design trends.</p>
        <div className="flex flex-col items-center mt-6">
        <Image src='/.png' alt='GTR logo' width={2000} height={2000} className='h-20 w-auto mb-4' />
        <Carousel items={['/neyers-screenshot-one.png', '/neyers-screenshot-two.png']} />
      </div>

<div className="flex flex-col items-center mt-6">
        <Image src='/.png' alt='Adelman auto logo' width={2000} height={2000} className='h-20 w-auto mb-4' />
        <Carousel items={['/neyers-screenshot-one.png', '/neyers-screenshot-two.png']} />
      </div>
    </section>
  )
}

export default page