import HeadingOne from '@/app/ui/HeadingOne'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const page = () => {
  return (
    <section>
      <HeadingOne text='Trinchero Family Estates' />
      <p>At TFE, I worked with a talented team to improve web accessibility for <Link href={'https://www.sutterhome.com/'} target='_blank' className='hover:text-citrine text-nowrap underline decoration-persimmon decoration-2 hover:no-underline transition-all ease-in'><strong>Sutter Home</strong></Link> and <Link href={'https://www.neyersvineyards.com/'} target='_blank' className='hover:text-citrine text-nowrap underline decoration-persimmon decoration-2 hover:no-underline  transition-all ease-in'><strong>Neyers Vineyards</strong></Link>, raising WCAG 2.1 AA compliance to 97%. I also developed custom WordPress solutions and collaborated on enhancing functionality for multiple brand websites.</p>
      <div className="flex justify-between items-center gap-8 flex-col xl:flex-row mt-12 mb-4 mx-8 xs:mx-0 w-full">
        <Link href={'https://www.sutterhome.com/'} target='_blank' className='flex flex-col items-center justify-center mb-16 hover:opacity-90 hover:scale-90 transition-all ease-linear'>
          <Image src='/sutterhome.png' alt='Sutter Home' width={2000} height={2000} className='h-16 w-auto self-center hidden dark:block' />
          <Image src='/sutterhome-black.png' alt='Sutter Home' width={2000} height={2000} className='h-16 w-auto self-center block dark:hidden' />
          <div className="relative mt-4">
            <Image src='/sh-screenshot-one.png' alt='Sutter Home' width={2000} height={2000} className='h-40 w-40 xs:h-80 xs:w-80 object-cover rounded shadow shadow-licorice' />
            <Image src='/sh-screenshot-two.png' alt='Sutter Home' width={2000} height={2000} className='h-40 w-40 xs:h-80 xs:w-80 object-cover rounded shadow shadow-licorice  absolute top-10 left-10' />
            <Image src='/sh-accessibility.png' alt='Sutter Home' width={2000} height={2000} className='h-20 xs:h-32 w-auto object-cover rounded shadow shadow-licorice  absolute top-40 right-10' />
          </div>
        </Link>
        <Link href={'https://www.neyersvineyards.com/'} target='_blank' className='flex flex-col items-center justify-center mb-8 sm:mb-4 hover:opacity-90 hover:scale-95 transition-all ease-linear'>
          <Image src='/neyers.png' alt='Sutter Home' width={2000} height={2000} className='h-16 w-auto self-center' />
          <div className="relative mt-4">
            <Image src='/neyers-screenshot-one.png' alt='Neyers Vineyards screenshot of home page' width={2000} height={2000} className='h-40 w-40 xs:h-80 xs:w-80 object-cover rounded shadow shadow-licorice' />
            <Image src='/neyers-screenshot-two.png' alt='Sutter Home' width={2000} height={2000} className='h-40 w-40 xs:h-80 xs:w-80 object-cover rounded shadow shadow-licorice  absolute top-10 left-10' />
            <Image src='/neyers-accessibility.png' alt='Sutter Home' width={2000} height={2000} className='h-20 xs:h-32 w-auto object-cover rounded shadow shadow-licorice  absolute top-40 right-10' />
          </div>
        </Link>
      </div>
      <div className="border-t border-t-persimmon mt-20 mb-8 py-8 px-4">
          <blockquote className='text-lg mb-4'>&ldquo;Pedro is highly knowledgeable in web accessibility and takes pride in his coding skills. His positive attitude and strong work ethic make him a valuable asset to any team.&rdquo;</blockquote>
          <Link href={'https://www.linkedin.com/in/mark-rioux/'} target='_blank' className='hover:text-citrine underline decoration-persimmon decoration-2 hover:no-underline  transition-all ease-in'>Mark Rioux</Link>
          <p className='text-sm text-hookersGreen'>Manager, Web Dev & Integration at Trinchero Family Estates</p>
        </div>
    </section>
  )
}

export default page