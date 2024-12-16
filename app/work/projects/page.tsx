import React from 'react'
import HeadingOne from '../../ui/HeadingOne'
import Carousel from '@/app/components/Carousel'
import Accordion from '@/app/components/Accordion'
import Icons from '@/app/ui/Icons'
import Link from 'next/link'

const page = () => {

  const lunaLinkIcons = [
    { name: 'icon-[simple-icons--mongodb]' },
    { name: 'icon-[simple-icons--express]' },
    { name: 'icon-[file-icons--ejs]' },
    { name: 'icon-[fa-brands--node-js]' },
    { name: 'icon-[simple-icons--bootstrap]' },
  ]

  const pokedexIcons = [
    { name: 'icon-[simple-icons--react]' },
    { name: 'icon-[simple-icons--redux]' },
    { name: 'icon-[simple-icons--typescript]' },
    { name: 'icon-[simple-icons--tailwindcss]' },
    { name: 'icon-[simple-icons--firebase]' },
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

  const pokedexImages = []

  return (
    <section aria-label='Projects Overview' className='w-full'>
      <HeadingOne text="Projects" />
      <Accordion items={[
        {
          title: 'Luna Link',
          description: 'A fleet management tool designed to track trailers across multiple yards. Initially built using the MERN stack with EJS, the project is now transitioning to a React-based, production-ready version. It aims to streamline fleet logistics by offering intuitive tracking and management capabilities.',
          icons: <Icons iconItems={lunaLinkIcons} />,
          repoHref: 'https://github.com/rooted92/trucker-app-sandbox',
          carousel: <Carousel items={lunaLinkImages} />
        },
        {
          title: 'Pokemon Gallery',
          description: 'The Pokémon Gallery Project is an interactive web app that showcases over 1,000 Pokémon using data from the PokeAPI. It features infinite scrolling for seamless browsing, a search bar to quickly find specific Pokémon, and detailed information pages displaying stats, abilities, moves, evolutions, and random flavor text. Built with HTML, CSS, and JavaScript, styled using Tailwind CSS, and optimized with lazy loading for smooth performance, the app delivers a responsive experience across all devices. The project is deployed on Vercel for easy access and fast load times. Through this project, I honed my front-end skills, learned to work with APIs effectively, and focused on creating a clean and user-friendly interface.',
          icons: <Icons iconItems={pokedexIcons} />,
          projectHref: 'https://pokemonvanilla.vercel.app/',
          repoHref: '',
        }
      ]} />
    </section>


  )
}

export default page