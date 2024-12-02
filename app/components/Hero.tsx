import React from 'react'
import Image from 'next/image'
import { Righteous } from 'next/font/google'
import Icons from '../ui/Icons';

const righteous = Righteous({
    subsets: ["latin"],
    weight: ["400"],
});

const Hero = () => {

    const icons = [
        { name: 'icon-[simple-icons--react]' },
        { name: 'icon-[cib--next-js]' },
        { name: 'icon-[teenyicons--tailwind-solid]' },
        { name: 'icon-[fa-brands--node-js]' },
        { name: 'icon-[simple-icons--mongodb]' },
        { name: 'icon-[simple-icons--express]' },
    ]

    return (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 xxs:mx-3 xs:mx-5 md:mx-6">
            <Image src={"/pedro.jpg"} alt="Photo of Pedro Castaneda" width={2000} height={2000} className="h-32 w-32 lg:h-40 lg:w-40 object-cover object-top rounded-full" />
            <div className="flex flex-col justify-center sm:justify-start items-center sm:items-start">
                <h1 className={`${righteous.className} font-bold tracking-wider text-2xl tiny:text-3xl xxs:text-4xl sm:text-5xl lg:text-6xl`}>Pedro Castaneda</h1>
                <p className=" text-center text-sm tiny:text-md xxs:text-lg sm:text-base lg:text-lg bg-gradient-to-r from-citrine to-persimmon bg-transparent bg-clip-text text-transparent font-semibold">Full Stack Developer / Freelancer</p>
                <Icons iconItems={icons} />
            </div>
        </div>
    )
}

export default Hero