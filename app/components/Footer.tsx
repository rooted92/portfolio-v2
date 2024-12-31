'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'motion/react';

const Footer = () => {
  const pathname = usePathname();

  const links = [
    { href: 'https://github.com/rooted92', title: 'GitHub', targetBlank: true, ariaLabelText: 'GitHub profile', icon: 'icon-[ion--social-octocat]' },
    { href: 'https://www.linkedin.com/in/pedro-castaneda-developer/', title: 'LinkedIn', targetBlank: true, ariaLabelText: 'LinkedIn profile', icon: 'icon-[line-md--linkedin]' },
    { href: '/pc-resume.pdf', title: 'Resume', targetBlank: true, ariaLabelText: 'Download resume (PDF)', icon: 'icon-[proicons--pdf]' },
    { href: '/contact', title: 'Contact', ariaLabelText: 'Contact', icon: 'icon-[entypo--email]' },
    { href: '/accessibility', title: 'Accessibility', ariaLabelText: 'Accessibility', icon: 'icon-[proicons--accessibility]' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <footer className="flex flex-col justify-center items-center py-8 container mx-auto">
      <motion.nav
        className="flex items-center justify-center gap-6 xxs:gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {links.map((link, index) => {
          const isActive = pathname === link.href;
          return (
            <motion.div key={index} variants={itemVariants}>
              <Link
                href={link.href}
                rel="noopener noreferrer"
                title={link.title}
                aria-label={link.ariaLabelText}
                target={link.targetBlank ? '_blank' : '_self'}
                className={`text-2xl hover:text-persimmon ${
                  isActive ? 'text-persimmon' : ''
                } hover:-translate-y-1 hover:scale-125 transition-all ease-in`}
              >
                <i className={`${link.icon}`} role="img" aria-hidden="true" />
              </Link>
            </motion.div>
          );
        })}
      </motion.nav>
    </footer>
  );
};

export default Footer;