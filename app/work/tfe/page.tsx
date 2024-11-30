import HeadingOne from '@/app/ui/HeadingOne'
import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <section>
        <HeadingOne text='Trinchero Family Estates' />
        <p>At Trinchero Family Estates, I worked with a talented team to improve web accessibility for <Link href={'https://www.sutterhome.com/'} target='_blank' className='hover:text-citrine underline decoration-persimmon decoration-2 hover:no-underline visited:text-hookersGreen transition-all ease-in'><strong>Sutter Home</strong></Link> and <Link href={'https://www.neyersvineyards.com/'} target='_blank' className='hover:text-citrine underline decoration-persimmon decoration-2 hover:no-underline visited:text-hookersGreen transition-all ease-in'><strong>Neyers Vineyards</strong></Link>, raising WCAG 2.1 AA compliance to 97%. I also developed custom WordPress solutions and collaborated on enhancing functionality for multiple brand websites.</p>
    </section>
  )
}

export default page