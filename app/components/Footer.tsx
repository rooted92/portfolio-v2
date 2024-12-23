'use client';
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface FooterLink {
  href: string,
  title: string,
  icon: string,
  ariaLabelText: string,
  targetBlank?: boolean,
  iconClasses?: string,
  linkClasses?: string,
};

const Footer = () => {
  const pathname = usePathname();

  const links: FooterLink[] = [
    {
      href: 'https://github.com/rooted92',
      title: 'GitHub',
      targetBlank: true,
      ariaLabelText: 'GitHub profile',
      icon: 'icon-[ion--social-octocat]',
    },
    {
      href: 'https://www.linkedin.com/in/pedro-castaneda-developer/',
      title: 'LinkedIn',
      targetBlank: true,
      ariaLabelText: 'LinkedIn profile',
      icon: 'icon-[line-md--linkedin]',
    },
    {
      href: '/pc-resume.pdf',
      title: 'Resume',
      targetBlank: true,
      ariaLabelText: 'Download resume (PDF)',
      icon: 'icon-[proicons--pdf]',
    },

    {
      href: '/contact',
      title: 'Contact',
      ariaLabelText: 'Contact',
      icon: 'icon-[entypo--email]',
    },
    {
      href: '/accessibility',
      title: 'Accessibility',
      ariaLabelText: 'Accessibility',
      icon: 'icon-[proicons--accessibility]'
    }
  ];

  return (
    <footer className='flex flex-col justify-center items-center py-8 container mx-auto'>
      <nav className='flex items-center justify-center gap-6 xxs:gap-8'>
        {
          links.map((link, index) => {

            const isActive = pathname === link.href;

            return (
              <Link
                key={index}
                href={link.href}
                rel='noopener noreferrer'
                title={link.title}
                aria-label={link.ariaLabelText}
                target={link.targetBlank ? '_blank' : '_self'}
                className={`text-2xl hover:text-persimmon ${isActive ? 'text-persimmon' : ''} hover:-translate-y-1 hover:scale-125 ${link.linkClasses} transition-all ease-in`}>
                <i className={`${link.icon} ${link.iconClasses}`} role="img" aria-hidden="true" />
              </Link>)
          })
        }
      </nav>
    </footer>
  )
};

export default Footer