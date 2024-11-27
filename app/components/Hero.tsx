import React from 'react'
import Image from 'next/image'
import { Righteous } from 'next/font/google'

const righteous = Righteous({
    subsets: ["latin"],
    weight: ["400"],
});

interface heroIcons {
    icon: string;
    iconClasses?: string;
}

const Hero = () => {

    const icons: heroIcons[] = [
        { icon: 'icon-[simple-icons--react]' },
        { icon: 'icon-[cib--next-js]' },
        // { icon: 'icon-[file-icons--tsx-alt]' },
        { icon: 'icon-[teenyicons--tailwind-solid]' },
        { icon: 'icon-[fa-brands--node-js]' },
        { icon: 'icon-[simple-icons--mongodb]' },
        { icon: 'icon-[simple-icons--express]' },
        // { icon: 'icon-[simple-icons--mongoose]' },
        // { icon: 'icon-[mdi--git]' },
        // { icon: 'icon-[devicon-plain--pnpm-wordmark]' },
    ]

    return (
        <div className="flex items-center justify-center gap-4">
            <Image src={"/pedro.jpg"} alt="Photo of Pedro Castaneda" width={2000} height={2000} className="h-32 w-32 object-cover object-top rounded-full" />
            <div className="flex flex-col">
                <h1 className={`${righteous.className} font-bold tracking-wider text-6xl`}>Pedro Castaneda</h1>
                <p className="text-lg bg-gradient-to-r from-citrine to-persimmon bg-transparent bg-clip-text text-transparent font-semibold">Full Stack Developer / Freelancer / Available For Hire</p>
                <div className="flex gap-3 mt-2">
                    {
                        icons.map((icon, index) => (
                            <i key={index} className={`${icon.icon} ${icon.iconClasses} text-hookersGreen text-2xl`} role="img" aria-hidden="true" />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Hero