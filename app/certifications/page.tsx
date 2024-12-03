import React from 'react'
import HeadingOne from '../ui/HeadingOne'
import Cert from '../ui/Cert'

interface Certs {
  url: string,
  title: string,
  imgSrc: string,
  imgAlt: string,
}

const page = () => {

  const certs: Certs[] = [
    {
      url: '/udemy-ghactions.pdf',
      title: 'GitHub Actions',
      imgSrc: '/udemy-ghactions.png',
      imgAlt: 'GitHub Actions certification'
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4 sm:mt-16 mx-4">
        {
          certs.map(cert => (
            <Cert key={cert.title} cert={cert} />))
        }
      </div>
    </section>
  )
}

export default page