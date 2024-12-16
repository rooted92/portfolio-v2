import React from 'react'
import HeadingOne from '../../ui/HeadingOne'
import Carousel from '@/app/components/Carousel'
import Accordion from '@/app/components/Accordion'
import Icons from '@/app/ui/Icons'

const page = () => {

  const lunaLinkIcons = [
    { name: 'icon-[simple-icons--mongodb]' },
    { name: 'icon-[simple-icons--express]' },
    { name: 'icon-[file-icons--ejs]' },
    { name: 'icon-[fa-brands--node-js]' },
    { name: 'icon-[simple-icons--bootstrap]' },
  ]

  const pokedexIcons = [
    { name: 'icon-[simple-icons--html5]' },
    { name: 'icon-[simple-icons--css3]' },
    { name: 'icon-[simple-icons--javascript]' },
    { name: 'icon-[simple-icons--tailwindcss]' },
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

  const pokedexImages = [
    {src: '/pokemon-home.png', alt: 'Pokedex home page'},
    {src: '/pokemon-details.png', alt: 'Pokedex details page'},
  ]

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
          description: 'The Pokémon Gallery Project is a responsive web app that showcases over 1,000 Pokémon using data from the PokeAPI. It features infinite scrolling, a search bar, and detailed Pokémon pages with stats, abilities, evolutions, and random flavor text. Built with HTML, CSS, JavaScript, and Tailwind CSS, it’s optimized for performance and deployed on Vercel. This project helped me improve my front-end skills and API integration while creating a smooth, user-friendly experience.',
          icons: <Icons iconItems={pokedexIcons} />,
          projectHref: 'https://pokemonvanilla.vercel.app/',
          repoHref: 'https://github.com/rooted92/pokemon-vanilla',
          carousel: <Carousel items={pokedexImages} />
        }
      ]} />
    </section>


  )
}

export default page