import React from 'react'
import Link from 'next/link'

interface NavBarLink {
  href: string,
  title: string,
  icon: string,
  iconClasses?: string,
  linkClasses?: string,
}

const NavBar = () => {

  const links: NavBarLink[] = [
    {
      href: '/',
      title: 'Home',
      icon: 'icon-[tdesign--circle]',
    },
    {
      href: '/experience',
      title: 'Experience',
      icon: 'icon-[mdi--briefcase-account]',
    },
    {
      href: '/certifications',
      title: 'Certifications',
      icon: 'icon-[lineicons--certificate]',
    },
    {
      href: '/projects',
      title: 'Projects',
      icon: 'icon-[mdi--code-braces]',
    },
    {
      href: '/skills',
      title: 'Skills',
      icon: 'icon-[icon-park-outline--kungfu]',
    },
  ]

  return (
    <header>
      <nav className='flex justify-center items-center gap-8 p-8'>
        {
          links.map((link, index) => (
            <Link key={index} href={link.href} className={`text-2xl hover:text-citrine hover:-translate-y-1 hover:scale-125 ${link.linkClasses} transition-all ease-in`}><i className={`${link.icon} ${link.iconClasses}`} role="img" aria-hidden="true" /></Link>
          ))
        }
      </nav>
    </header>
  )
}

export default NavBar