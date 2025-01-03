'use client';

import React from 'react'
import { Righteous } from 'next/font/google'
import { motion } from 'motion/react';

const righteous = Righteous({
    subsets: ['latin'],
    weight: ['400'],
})

const page = () => {
    return (
        <motion.section
            className='flex flex-col gap-4 justify-center items-center'
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            <div className="flex flex-row-reverse justify-center items-center gap-4 mx-2">
                <h1 className={`${righteous.className} text-base tiny:text-lg xxs:text-1xl xs:text-3xl`}>Thank you for reaching out!</h1>
                <i className="icon-[material-symbols--done-all-rounded] text-4xl text-citrine" role="img" aria-hidden="true" />
            </div>

            <p className='text-center'>I&apos;ll get back to you as soon as possible.</p>
        </motion.section>
    )
}

export default page