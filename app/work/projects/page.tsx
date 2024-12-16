import React from 'react'
import HeadingOne from '../../ui/HeadingOne'
import Carousel from '@/app/components/Carousel'
import Accordion from '@/app/components/Accordion'
import Icons from '@/app/ui/Icons'
import Link from 'next/link'

const page = () => {

  const icons = [
    { name: 'icon-[simple-icons--mongodb]' },
    { name: 'icon-[simple-icons--express]' },
    { name: 'icon-[file-icons--ejs]' },
    { name: 'icon-[fa-brands--node-js]' },
    { name: 'icon-[simple-icons--bootstrap]' },
  ]

  const lunaLinkImages = [
    { src: '/luna-home.png', alt: 'Luna Link home page' },
    { src: '/luna-login.png', alt: 'Luna Link login page' },
    { src: '/luna-signup.png', alt: 'Luna Link signup page' },
    { src: '/luna-signup-warning.png', alt: 'Luna Link signup page with alert' },
    { src: '/luna-account.png', alt: 'Luna Link account page' },
    { src: '/luna-drivers.png', alt: 'Luna Link drivers page' },
    { src: '/luna-trailers.png', alt: 'Luna Link trailers page' },
    { src: '/luna-yards.png', alt: 'Luna Link yards page' },
    { src: '/luna-driver-details.png', alt: 'Luna Link driver details page' },
    { src: '/luna-trailer-details.png', alt: 'Luna Link trailer details page' },
    { src: '/luna-yard-details.png', alt: 'Luna Link yard details page' },
  ]

  return (
    <section aria-label='Projects Overview' className='w-full'>
      <HeadingOne text="Projects" />
      <Accordion items={[
        {
          title: 'Luna Link',
          description: 'A fleet management tool designed to track trailers across multiple yards. Initially built using the MERN stack with EJS, the project is now transitioning to a React-based, production-ready version. It aims to streamline fleet logistics by offering intuitive tracking and management capabilities.',
          icons: <Icons iconItems={icons} />,
          repoHref: 'https://github.com/rooted92/trucker-app-sandbox',
          carousel: <Carousel items={lunaLinkImages} />
        },
      ]} />
      {/* <p className='text-pretty'><Link
        href={'https://github.com/rooted92/trucker-app-sandbox'} target='_blank'
        aria-label='View the Luna Link project codebase on GitHub. Opens in new tab.'
        className='hover:text-citrine text-nowrap underline decoration-persimmon decoration-2 hover:no-underline transition-all ease-in'><strong>Luna Link</strong></Link> is a fleet management tool designed to track trailers across multiple yards. Initially built using the MERN stack with EJS, the project is now transitioning to a React-based, production-ready version. It aims to streamline fleet logistics by offering intuitive tracking and management capabilities.</p>

      <div className='flex gap-3 mt-2'>
        <Icons iconItems={icons} />
      </div>

      <div className="flex flex-col items-center mt-6">

        <h2 className='text-3xl mb-4 flex items-center gap-2'><span className="icon-[ion--moon]" role="img" aria-hidden="true"></span> Luna Link</h2>

        <Carousel items={
          [
            { src: '/luna-home.png', alt: 'Luna Link home page' },
            { src: '/luna-login.png', alt: 'Luna Link login page' },
            { src: '/luna-signup.png', alt: 'Luna Link signup page' },
            { src: '/luna-signup-warning.png', alt: 'Luna Link signup page with alert' },
            { src: '/luna-account.png', alt: 'Luna Link account page' },
            { src: '/luna-drivers.png', alt: 'Luna Link drivers page' },
            { src: '/luna-trailers.png', alt: 'Luna Link trailers page' },
            { src: '/luna-yards.png', alt: 'Luna Link yards page' },
            { src: '/luna-driver-details.png', alt: 'Luna Link driver details page' },
            { src: '/luna-trailer-details.png', alt: 'Luna Link trailer details page' },
            { src: '/luna-yard-details.png', alt: 'Luna Link yard details page' },
          ]
        } />
      </div> */}

    </section>


  )
}

export default page