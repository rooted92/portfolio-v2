'use client';

import React from 'react'
import HeadingOne from '../ui/HeadingOne'
import Cert from '../ui/Cert'

import { motion } from 'motion/react'

interface Certs {
  url: string,
  title: string,
  imgSrc: string,
  imgAlt: string,
}

const page = () => {

  const certs: Certs[] = [
    {
      url: '/learn-react.pdf',
      title: 'React Certification, Codecademy',
      imgSrc: '/learnreact.png',
      imgAlt: 'React Certification, Codecademy'
    },
    {
      url: '/learn-js-objects.pdf',
      title: 'JavaScript Objects, Codecademy',
      imgSrc: '/learnjsobjects.png',
      imgAlt: 'JavaScript Objects Certification, Codecademy'
    },
    {
      url: '/learn-js-iterators.pdf',
      title: 'JavaScript Iterators, Codecademy',
      imgSrc: '/learnjsiterators.png',
      imgAlt: 'JavaScript Iterators Certification, Codecademy'
    },
    {
      url: '/learn-javascript.pdf',
      title: 'JavaScript Certification, Codecademy',
      imgSrc: '/learnjavascript.png',
      imgAlt: 'JavaScript Certification, Codecademy'
    },
    {
      url: '/learn-html.pdf',
      title: 'HTML Certification, Codecademy',
      imgSrc: '/learnhtml.png',
      imgAlt: 'HTML Certification, Codecademy'
    },
    {
      url: '/learn-css-accessibility.pdf',
      title: 'CSS Certification, Codecademy',
      imgSrc: '/learncssaccessibility.png',
      imgAlt: 'CSS Certification, Codecademy'
    },
    {
      url: '/learn-csharp.pdf',
      title: 'C# Certification, Codecademy',
      imgSrc: '/learn-csharp.png',
      imgAlt: 'C# Certification, Codecademy'
    },
    {
      url: '/udemy-ghactions.pdf',
      title: 'GitHub Actions',
      imgSrc: '/udemy-ghactions.png',
      imgAlt: 'GitHub Actions certification'
    },
    {
      url: '/learn-php.pdf',
      title: 'Learn PHP, Codecademy',
      imgSrc: '/learnphp.png',
      imgAlt: 'PHP Intro Certification, Codecademy'
    },
    {
      url: '/php-wordpress.pdf',
      title: 'PHP for WordPress Development',
      imgSrc: '/phpwordpress.png',
      imgAlt: 'PHP for WordPress Development certification'
    },
    {
      url: '/gtm-certificate.pdf',
      title: 'Google Tag Manager',
      imgSrc: '/gtm-certificate.png',
      imgAlt: 'Google Tag Manager certification'
    },
    {
      url: '/advanced-google-analytics.pdf',
      title: 'Advanced Google Analytics',
      imgSrc: '/advancedgoogleanalytics.png',
      imgAlt: 'Advanced Google Analytics certification'
    }
  ]

  return (
    <section className='flex flex-col items-center'>
      <HeadingOne text="Certifications" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 sm:mt-16 mx-4">
        {
          certs.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.2, delay: index * 0.1 }}>
              <Cert key={cert.title} cert={cert} />
            </motion.div>
          ))
        }
      </div>
    </section>
  )
}

export default page