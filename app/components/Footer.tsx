import React from 'react'

interface FooterLink {
  href: string,
  icon: string,
  iconClasses?: string,
  linkClasses?: string,
}

const Footer = () => {

  const links: FooterLink[] = [
    {
      href: '/',
      icon: 'icon-[ion--social-octocat]',
    },
    {
      href: '/',
      icon: 'icon-[line-md--linkedin]',
    },
    {
      href: '/',
      icon: 'icon-[proicons--pdf]',
    },
  ]

  // icon-[tabler--social], icon-[pajamas--work]

  return (
    <footer className='flex flex-col justify-center items-center py-8 container mx-auto'>
      <nav className='flex items-center justify-center gap-8'>
        {
          links.map((link, index) => (
            <a key={index} href={link.href} className={`text-2xl hover:text-hookersGreen hover:-translate-y-1 ${link.linkClasses} transition-all ease-in`}><i className={`${link.icon} ${link.iconClasses}`} role="img" aria-hidden="true" /></a>
          ))
        }
      </nav>
    </footer>
  )
}

export default Footer