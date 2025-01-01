'use client';

import HeadingOne from '@/app/ui/HeadingOne';
import React from 'react';
import Carousel from '@/app/components/Carousel';
import Image from 'next/image';
import Icons from '@/app/ui/Icons';
import { motion } from 'motion/react';

const page = () => {
  const icons = [
    { name: 'icon-[simple-icons--wordpress]' },
    { name: 'icon-[simple-icons--php]' },
    { name: 'icon-[simple-icons--javascript]' },
    { name: 'icon-[streamline--css-three-solid]' },
    { name: 'icon-[simple-icons--wpengine]' },
    { name: 'icon-[simple-icons--bootstrap]' },
  ];

  return (
    <section className="flex flex-col items-start">
      {/* Animated Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <HeadingOne text="Trinchero Family Estates" />
      </motion.div>

      {/* Animated Paragraph */}
      <motion.p
        className="text-pretty mt-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
      >
        At TFE, I worked with a talented team to improve web accessibility for{' '}
        <a
          href="https://www.sutterhome.com/"
          rel="noopener noreferrer"
          target="_blank"
          className="hover:text-citrine text-nowrap underline decoration-persimmon decoration-2 hover:no-underline transition-all ease-in"
        >
          <strong>Sutter Home</strong>
        </a>{' '}
        and{' '}
        <a
          href="https://www.neyersvineyards.com/"
          rel="noopener noreferrer"
          target="_blank"
          className="hover:text-citrine text-nowrap underline decoration-persimmon decoration-2 hover:no-underline transition-all ease-in"
        >
          <strong>Neyers Vineyards</strong>
        </a>
        , raising WCAG 2.1 AA compliance to 97%. I also developed custom
        WordPress solutions and collaborated on enhancing functionality for
        multiple brand websites.
      </motion.p>

      {/* Animated Icons */}
      <motion.div
        className="flex gap-3 mt-2"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <Icons iconItems={icons} />
      </motion.div>

      {/* Animated Carousels */}
      <div className="flex flex-col items-center mt-6 mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="flex justify-center">
            <Image
              src="/sutterhome.png"
              alt="sutter home logo"
              width={2000}
              height={2000}
              className="h-20 w-auto mb-4 hidden dark:block"
            />
            <Image
              src="/sutterhome-black.png"
              alt="sutter home logo"
              width={2000}
              height={2000}
              className="h-20 w-auto mb-4 block dark:hidden"
            />
          </div>

          <Carousel
            items={[
              { src: '/sh-home.png', alt: 'Sutter Home home page' },
              { src: '/sh-recipes.png', alt: 'Sutter Home recipes page' },
              { src: '/sh-wines.png', alt: 'Sutter Home wines page' },
              { src: '/sh-wines-cart.png', alt: 'Sutter Home wines page with cart items displayed' },
              { src: '/sh-cart.png', alt: 'Sutter Home cart page' },
              { src: '/sh-checkout.png', alt: 'Sutter Home checkout page' },
              { src: '/sh-roots.png', alt: 'Sutter Home roots page' },
              { src: '/sh-locate.png', alt: 'Sutter Home locate retailer page' },
            ]}
          />
        </motion.div>
      </div>

      <div className="flex flex-col items-center mt-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="flex justify-center">
            <Image
              src="/neyers.png"
              alt="neyers vineyards logo"
              width={2000}
              height={2000}
              className="h-20 w-auto mb-4"
            />
          </div>
          
          <Carousel
            items={[
              { src: '/nv-home.png', alt: 'Neyers Vineyards home page' },
              { src: '/nv-wines.png', alt: 'Neyers Vineyards wines page' },
              { src: '/nv-clubs.png', alt: 'Neyers Vineyards wine clubs page' },
              { src: '/nv-locate.png', alt: 'Neyers Vineyards locate retailer page' },
              { src: '/nv-visit.png', alt: 'Neyers Vineyards visit page' },
              { src: '/nv-about.png', alt: 'Neyers Vineyards about page' },
            ]}
          />
        </motion.div>
      </div>

      {/* Animated Blockquote */}
      <motion.div
        className="border-t border-t-persimmon mt-20 mb-8 py-8 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <blockquote className="text-lg mb-4">
          &ldquo;Pedro is highly knowledgeable in web accessibility and takes
          pride in his coding skills. His positive attitude and strong work
          ethic make him a valuable asset to any team.&rdquo;
        </blockquote>
        <a
          href="https://www.linkedin.com/in/mark-rioux/"
          rel="noopener noreferrer"
          target="_blank"
          className="hover:text-citrine underline decoration-persimmon decoration-2 hover:no-underline transition-all ease-in"
        >
          Mark Rioux
        </a>
        <p className="text-sm text-hookersGreen">
          Manager, Web Dev & Integration at Trinchero Family Estates
        </p>
      </motion.div>
    </section>
  );
};

export default page;