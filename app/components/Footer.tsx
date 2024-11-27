import React from 'react'
import Link from 'next/link'

interface FooterLink {
  href: string,
  title: string,
  icon: string,
  targetBlank?: boolean,
  iconClasses?: string,
  linkClasses?: string,
}

const Footer = () => {

  const links: FooterLink[] = [
    {
      href: 'https://github.com/rooted92',
      title: 'GitHub',
      targetBlank: true,
      icon: 'icon-[ion--social-octocat]',
    },
    {
      href: 'https://www.linkedin.com/in/pedro-castaneda-developer/',
      title: 'LinkedIn',
      targetBlank: true,
      icon: 'icon-[line-md--linkedin]',
    },
    {
      href: '/',
      title: 'Resume',
      icon: 'icon-[proicons--pdf]',
    },

    {
      href: '/contact',
      title: 'Contact',
      icon: 'icon-[entypo--email]',
    },
  ]

  // icon-[tabler--social], icon-[pajamas--work]

  return (
    <footer className='flex flex-col justify-center items-center py-8 container mx-auto'>
      <nav className='flex items-center justify-center gap-8'>
        {
          links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              title={link.title}
              target={link.targetBlank ? '_blank' : '_self'}
              className={`text-2xl hover:text-persimmon hover:-translate-y-1 hover:scale-125 ${link.linkClasses} transition-all ease-in`}>
              <i className={`${link.icon} ${link.iconClasses}`} role="img" aria-hidden="true" />
            </Link>
          ))
        }
      </nav>
      <nav>
        <span className='sr-only'>link to accessibility statement</span>
        <Link
        href={'/accessibility'}
        className='hover:text-persimmon transition-all ease-in text-sm'>
          Accessibility
          </Link>
      </nav>
    </footer>
  )
}

export default Footer