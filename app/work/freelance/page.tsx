import HeadingOne from '@/app/ui/HeadingOne'
import React from 'react'
import Carousel from '@/app/components/Carousel'
import Icons from '@/app/ui/Icons'
import Accordion from '@/app/components/Accordion'

const page = () => {

  const GTRIcons = [
    { name: 'icon-[simple-icons--react]' },
    { name: 'icon-[cib--next-js]' },
    { name: 'icon-[simple-icons--typescript]' },
    { name: 'icon-[teenyicons--tailwind-solid]' },
  ]

  const AdelmanIcons = [
    { name: 'icon-[simple-icons--react]' },
    { name: 'icon-[cib--next-js]' },
    { name: 'icon-[simple-icons--typescript]' },
    { name: 'icon-[teenyicons--tailwind-solid]' },
    { name: 'icon-[simple-icons--resend]' },
    { name: 'icon-[simple-icons--mongodb]' },
    { name: 'icon-[simple-icons--mongoose]'},
  ]

  const PeakIcons = [
    { name: 'icon-[simple-icons--react]' },
    { name: 'icon-[cib--next-js]' },
    { name: 'icon-[simple-icons--typescript]' },
    { name: 'icon-[teenyicons--tailwind-solid]' },
  ]

  const GTRImages = [
    { src: '/gtr-home.png', alt: 'GTR home page' },
    { src: '/gtr-services.png', alt: 'GTR services page' },
    { src: '/gtr-about.png', alt: 'GTR about page' },
    { src: '/gtr-accessibility.png', alt: 'GTR accessibility page' }
  ]

  const AdelmanImages = [
    { src: '/adelman-home.png', alt: 'Adelman Auto home page' },
    { src: '/adelman-services.png', alt: 'Adelman Auto services page' },
    { src: '/adelman-about.png', alt: 'Adelman Auto about page' },
    { src: '/adelman-accessibility.png', alt: 'Adelman Auto accessibility page' },
    { src: '/adelman-review.png', alt: 'Adelman Auto Review Form page' }
  ]

  const PeakImages = [
    { src: '/peak-home.png', alt: 'Peak Performance Refrigeration home page' },
    { src: '/peak-chillers.png', alt: 'Peak Performance Refrigeration chillers page' },
    { src: '/peak-glycol.png', alt: 'Peak Performance Refrigeration glycol heating systems page' },
    { src: '/peak-piping.png', alt: 'Peak Performance Refrigeration wine tank piping page' },
    { src: '/peak-barrel.png', alt: 'Peak Performance Refrigeration barrel room page' },
    { src: '/peak-servicing.png', alt: 'Peak Performance Refrigeration servicing information page' },
    { src: '/peak-contact.png', alt: 'Peak Performance Refrigeration contact page' }
  ]

  // const

  return (
    <section>
      <HeadingOne text='Freelance' />


      <Accordion items={[
        {
          title: 'Adelman Auto',
          description: "I built a website for Adelman Auto, a mobile mechanic service. This project taught me the value of clear communication, practical design, and using modern tools effectively. The site was created with Next.js, TypeScript, Tailwind CSS, and MongoDB with Mongoose, providing a responsive platform to help attract more customers. It also features a review form to collect feedback from clients and was deployed on Vercel.",
          icons: <Icons iconItems={AdelmanIcons} />,
          carousel: <Carousel items={AdelmanImages} />
        },
        {
          title: 'Peak Performance Refrigiration',
          description: "This project involved creating a website for a refrigeration company in the Bay Area. The site was built with Next.js, React, TypeScript, and Tailwind CSS, and features a clean, professional design that highlights the company's services and expertise.",
          icons: <Icons iconItems={PeakIcons} />,
          carousel: <Carousel items={PeakImages} />
        },
        {
          title: "Galo's Truck & Trailer Repair",
          description: "GTR Mobile Fleet Repair is a professional website showcasing mobile repair services in Sonoma and Napa counties. It focuses on creating a responsive, user-friendly landing page that communicates value clearly. Built with Next.js, React, TypeScript, and Tailwind CSS, it features modern, dynamic design.",
          icons: <Icons iconItems={GTRIcons} />,
          carousel: <Carousel items={GTRImages} />
        },
      ]} />
    </section>
  )
}

export default page 