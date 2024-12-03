import HeadingOne from '@/app/ui/HeadingOne'
import React from 'react'
import Link from 'next/link'
import Carousel from '@/app/components/Carousel'
import Image from 'next/image'
import Icons from '@/app/ui/Icons'

const page = () => {

  const icons = [
    { name: 'icon-[simple-icons--wordpress]' },
    { name: 'icon-[simple-icons--php]' },
    { name: 'icon-[simple-icons--javascript]' },
    { name: 'icon-[streamline--css-three-solid]' },
    { name: 'icon-[simple-icons--wpengine]' },
    { name: 'icon-[simple-icons--bootstrap]' },
  ]

  return (
    <section>
      <HeadingOne text='Trinchero Family Estates' />
      <p className='text-pretty'>At TFE, I worked with a talented team to improve web accessibility for <Link href={'https://www.sutterhome.com/'} target='_blank' className='hover:text-citrine text-nowrap underline decoration-persimmon decoration-2 hover:no-underline transition-all ease-in'><strong>Sutter Home</strong></Link> and <Link href={'https://www.neyersvineyards.com/'} target='_blank' className='hover:text-citrine text-nowrap underline decoration-persimmon decoration-2 hover:no-underline  transition-all ease-in'><strong>Neyers Vineyards</strong></Link>, raising WCAG 2.1 AA compliance to 97%. I also developed custom WordPress solutions and collaborated on enhancing functionality for multiple brand websites.</p>

      <div className='flex gap-3 mt-2'>
        <Icons iconItems={icons} />
      </div>


      <div className="flex flex-col items-center mt-6 mb-16">
        <Image src='/sutterhome.png' alt='sutter home logo' width={2000} height={2000} className='h-20 w-auto mb-4 hidden dark:block' />
        <Image src='/sutterhome-black.png' alt='sutter home logo' width={2000} height={2000} className='h-20 w-auto mb-4 block dark:hidden' />
        <Carousel items={[
          { src: '/sh-home.png', alt: 'Sutter Home home page' },
          { src: '/sh-recipes.png', alt: 'Sutter Home recipes page' },
          { src: '/sh-wines.png', alt: 'Sutter Home wines page' },
          { src: '/sh-wines-cart.png', alt: 'Sutter Home wines page with cart items displayed' },
          { src: '/sh-cart.png', alt: 'Sutter Home cart page' },
          { src: '/sh-checkout.png', alt: 'Sutter Home checkout page' },
          { src: '/sh-roots.png', alt: 'Sutter Home roots page' },
          { src: '/sh-locate.png', alt: 'Sutter Home locate retailer page' }]} />
      </div>

      <div className="flex flex-col items-center mt-6">
        <Image src='/neyers.png' alt='neyers vineyards logo' width={2000} height={2000} className='h-20 w-auto mb-4' />
        <Carousel items={[
          { src: '/nv-home.png', alt: 'Neyers Vineyards home page' },
          { src: '/nv-wines.png', alt: 'Neyers Vineyards wines page' },
          { src: '/nv-clubs.png', alt: 'Neyers Vineyards wine clubs page' },
          { src: '/nv-locate.png', alt: 'Neyers Vineyards locate retailer page' },
          { src: '/nv-visit.png', alt: 'Neyers Vineyards visit page' },
          { src: '/nv-about.png', alt: 'Neyers Vineyards about page' }]} />
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