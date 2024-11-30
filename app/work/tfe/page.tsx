import HeadingOne from '@/app/ui/HeadingOne'
import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <section>
        <HeadingOne text='Trinchero Family Estates' />
        <p>At Trinchero Family Estates, I worked with a talented team to improve web accessibility for <Link href={'https://www.sutterhome.com/'} className='hover:text-citrine hover:border-b border-b-persimmon hover:border-b-persimmon transition-all ease-in'><strong>Sutter Home</strong></Link> and <Link href={'https://www.neyersvineyards.com/'} className='hover:text-citrine hover:border-b border-b-persimmon hover:border-b-persimmon transition-all ease-in'><strong>Neyers Vineyards</strong></Link>, raising WCAG 2.1 AA compliance to 97%. I also developed custom WordPress solutions and collaborated on enhancing functionality for multiple brand websites.</p>
    </section>
  )
}

export default page