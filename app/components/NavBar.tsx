'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'motion/react';

const NavBar = () => {
  const pathname = usePathname();

  const links = [
    { href: '/', title: 'Home', ariaLabelText: 'Home', icon: 'icon-[tdesign--circle]' },
    { href: '/work', title: 'Work', ariaLabelText: 'Work', icon: 'icon-[mdi--briefcase-account]' },
    { href: '/certifications', title: 'Certifications', ariaLabelText: 'Certifications', icon: 'icon-[lineicons--certificate]' },
    { href: '/skills', title: 'Skills', ariaLabelText: 'Skills', icon: 'icon-[icon-park-outline--kungfu]' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <header>
      <motion.nav
        className="flex justify-center items-center gap-6 xxs:gap-8 p-8"
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
                aria-current={isActive ? 'page' : undefined}
                className={`text-2xl hover:text-citrine ${
                  isActive ? 'text-citrine' : ''
                } hover:-translate-y-1 hover:scale-125 transition-all ease-in`}
              >
                <i className={`${link.icon}`} aria-hidden="true" />
              </Link>
            </motion.div>
          );
        })}
      </motion.nav>
    </header>
  );
};

export default NavBar;
