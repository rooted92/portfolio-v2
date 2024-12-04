'use client';
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

interface NavBarLink {
  href: string,
  title: string,
  ariaLabelText: string,
  icon: string,
  iconClasses?: string,
  linkClasses?: string,
}

const NavBar = () => {

  const pathname = usePathname();

  const links: NavBarLink[] = [
    {
      href: '/',
      title: 'Home',
      ariaLabelText: 'Home page',
      icon: 'icon-[tdesign--circle]',
    },
    {
      href: '/work',
      title: 'Work',
      ariaLabelText: 'Work page',
      icon: 'icon-[mdi--briefcase-account]',
    },
    {
      href: '/certifications',
      title: 'Certifications',
      ariaLabelText: 'Certifications page',
      icon: 'icon-[lineicons--certificate]',
    },
    {
      href: '/skills',
      title: 'Skills',
      ariaLabelText: 'Skills page',
      icon: 'icon-[icon-park-outline--kungfu]',
    },
  ]

  return (
    <header>
      <nav className='flex justify-center items-center gap-6 xxs:gap-8 p-8'>
        {
          links.map((link, index) => {

            const isActive = pathname === link.href;
            
            return (
            <Link
              key={index}
              href={link.href}
              title={link.title}
              aria-label={link.ariaLabelText}
              aria-current={isActive ? 'page' : undefined}
              className={`text-2xl hover:text-citrine ${isActive ? 'text-citrine' : ''}  hover:-translate-y-1 hover:scale-125 ${link.linkClasses} transition-all ease-in`}>
              <i className={`${link.icon} ${link.iconClasses}`} aria-hidden="true" />
            </Link>
          )})
        }
      </nav>
    </header>
  )
}

export default NavBar