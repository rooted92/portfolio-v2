import React from 'react'
import Link from 'next/link'

interface NavBarLink {
  href: string,
  title: string,
  srOnly?: boolean,
  icon: string,
  iconClasses?: string,
  linkClasses?: string,
}

const NavBar = () => {

  const links: NavBarLink[] = [
    {
      href: '/',
      title: 'Home',
      srOnly: true,
      icon: 'icon-[tdesign--circle]',
    },
    {
      href: '/work',
      title: 'Work',
      srOnly: true,
      icon: 'icon-[mdi--briefcase-account]',
    },
    {
      href: '/certifications',
      title: 'Certifications',
      srOnly: true,
      icon: 'icon-[lineicons--certificate]',
    },
    {
      href: '/skills',
      title: 'Skills',
      srOnly: true,
      icon: 'icon-[icon-park-outline--kungfu]',
    },
  ]

  return (
    <header>
      <nav className='flex justify-center items-center gap-6 xxs:gap-8 p-8'>
        {
          links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              title={link.title}
              className={`text-2xl hover:text-citrine hover:-translate-y-1 hover:scale-125 ${link.linkClasses} transition-all ease-in`}>
                {link.srOnly && <span className='sr-only'> link to {link.title}</span>}
              <i className={`${link.icon} ${link.iconClasses}`} role="img" aria-hidden="true" />
            </Link>
          ))
        }
      </nav>
    </header>
  )
}

export default NavBar