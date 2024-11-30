import React from 'react'
import HeadingOne from '../ui/HeadingOne'
import ContactForm from '../components/ContactForm'

const page = () => {
  return (
    <section>
        <HeadingOne text="Let's Get In Touch!" />
        <ContactForm />
    </section>
  )
}

export default page