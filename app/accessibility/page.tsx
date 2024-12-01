import React from 'react'
import HeadingOne from '../ui/HeadingOne'
import Link from 'next/link'

const page = () => {
  return (
    <section className='container mx-auto flex flex-col items-start justify-center'>
      <HeadingOne text="Accessibility" />
      <p className='py-8 mb-4 border-b border-b-citrine'>
        I am committed to ensuring digital accessibility for all users, including those with disabilities. I continuously strive to create a website that is usable, inclusive, and accessible to the widest possible audience.
      </p>

      <h2 className='text-xl text-persimmon mb-4 font-semibold'>Efforts to Support Accessibility</h2>

      <p className='mb-4'>
        To ensure my portfolio website meets accessibility standards, I have implemented the following practices:
      </p>

      <ul className='flex flex-col justify-center items-start gap-4 pb-8 mb-4 border-b border-b-citrine'>
        <li><div className="flex items-center gap-2 text-citrine"><i className="icon-[whh--html]" role="img" aria-hidden="true" /> <span className='font-bold list-none'>Semantic HTML:</span></div> I use well-structured HTML to provide meaningful navigation and enhance usability for assistive technologies like screen readers.</li>
        <li><div className="flex items-center gap-2 text-citrine"><i className="icon-[gravity-ui--keyboard]" role="img" aria-hidden="true" /><span className='font-bold list-none'>Keyboard Navigation:</span></div> All interactive elements, such as links, buttons, and forms, can be accessed and operated using a keyboard.</li>
        <li><div className="flex items-center gap-2 text-citrine"><i className="icon-[material-symbols--responsive-layout-rounded]" role="img" aria-hidden="true" /><span className='font-bold list-none'>Responsive Design:</span></div> The website is designed to adapt to various screen sizes and orientations, providing a seamless experience for users on all devices.</li>
        <li><div className="flex items-center gap-2 text-citrine"><i className="icon-[si-glyph--contrast]" role="img" aria-hidden="true" /><span className='font-bold list-none'>Color Contrast:</span></div> I have carefully chosen color schemes to ensure sufficient contrast for readability, benefiting users with visual impairments.</li>
        <li><div className="flex items-center gap-2 text-citrine"><i className="icon-[tabler--forms]" role="img" aria-hidden="true" /><span className='font-bold list-none'>Accessible Forms:</span></div> My contact form, powered by FormSubmit, is designed with appropriate labels and focus states for accessibility.</li>
      </ul>

      <h2 className='text-xl text-persimmon mb-4 font-semibold'>Third-Party Services</h2>
      <p className='pb-8 mb-4 border-b border-b-citrine'>
        This site uses <Link href={'https://formsubmit.co/'} className='hover:text-citrine underline decoration-persimmon decoration-2 hover:no-underline  transition-all ease-in'>FormSubmit</Link> for managing form submissions. While I strive to ensure third-party services align with accessibility standards, I encourage users to visit their Accessibility Statement (if available) for more details.
      </p>

      <h2 className='text-xl text-persimmon mb-4 font-semibold'>Testing and Monitoring</h2>
      <p className='pb-8 mb-4 border-b border-b-citrine'>
        I regularly test my website using tools like Lighthouse and other accessibility checkers to identify and address potential issues. If you encounter any accessibility barriers while using this site, I welcome your feedback and suggestions for improvement.
      </p>

      <h2 className='text-xl text-persimmon mb-4 font-semibold'>Feedback</h2>
      <p className='pb-8 mb-4 border-b border-b-citrine'>
        Your experience is important to me. If you have any questions, suggestions, or concerns about the accessibility of this website, please don’t hesitate to <Link href={'/contact'} className='hover:text-citrine underline decoration-persimmon decoration-2 hover:no-underline  transition-all ease-in'>contact me</Link>. I aim to respond to all inquiries promptly and make every effort to address accessibility issues.
      </p>

      <h2 className='text-xl text-persimmon mb-4 font-semibold'>Ongoing Commitment</h2>
      <p className='pb-8 mb-4'>
        Accessibility is an ongoing process, and I am dedicated to improving my website to meet evolving accessibility standards and user needs. Thank you for helping me create a more inclusive digital experience for everyone.
      </p>
    </section>
  )
}

export default page