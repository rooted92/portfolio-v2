import React from 'react'
import Link from 'next/link'
import { link } from 'fs'

interface NavBarLink {
  href: string,
  icon: string,
  iconClasses?: string,
  linkClasses?: string,
}

const NavBar = () => {

  const links: NavBarLink[] = [
    {
      href: '/',
      icon: 'icon-[tdesign--circle]',
    },
  ]

  return (
    <header>
      <nav className='flex justify-center items-center gap-6 p-8'>
        {
          links.map((link, index) => (
            <Link key={index} href={link.href} className={`text-2xl hover:text-hookersGreen hover:-translate-y-1 ${link.linkClasses} transition-all ease-in`}><i className={`${link.icon} ${link.iconClasses}`} role="img" aria-hidden="true" /></Link>
          ))
        }
      </nav>
    </header>
  )
}

export default NavBar