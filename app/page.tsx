import React from "react";
import { Righteous } from "next/font/google";
import Image from "next/image";
// import Link from "next/link";

const righteous = Righteous({
  subsets: ["latin"],
  weight: ["400"],
});

interface heroIcons {
  icon: string;
  iconClasses?: string;
}

export default function Home() {

  const icons: heroIcons[] = [
    { icon: 'icon-[simple-icons--react]' },
    { icon: 'icon-[cib--next-js]' },
    // { icon: 'icon-[file-icons--tsx-alt]' },
    // { icon: 'icon-[teenyicons--tailwind-solid]' },
    { icon: 'icon-[fa-brands--node-js]' },
    { icon: 'icon-[simple-icons--express]' },
    { icon: 'icon-[simple-icons--mongodb]' },
    // { icon: 'icon-[simple-icons--mongoose]' },
    // { icon: 'icon-[mdi--git]' },
    // { icon: 'icon-[devicon-plain--pnpm-wordmark]' },
  ]

  return (
    <main className="grid grid-cols-4 grid-rows-4 min-h-screen p-8 gap-10 container mx-auto">

      {/* First Row */}
      <div className="col-span-2 flex flex-around gap-4 border-r border-r-persimmon p-4">
        <div className="flex items-center justify-center gap-4">
          <div className="flex items-center justify-center gap-4">
            <Image src={"/pedro.jpg"} alt="Photo of Pedro Castaneda" width={2000} height={2000} className="h-40 w-40 object-cover object-top rounded-full" />
            <div className="flex flex-col">
              <h1 className={`${righteous.className} font-bold tracking-wider text-5xl`}>Pedro Cataneda</h1>
              <p className="text-lg bg-gradient-to-r from-citrine to-persimmon bg-transparent bg-clip-text text-transparent font-semibold">Full Stack Developer / Freelancer</p>
              <div className="flex gap-3 mt-2">
                {
                  icons.map((icon, index) => (
                    <i key={index} className={`${icon.icon} ${icon.iconClasses} text-hookersGreen text-2xl`} role="img" aria-hidden="true" />
                  ))
                }
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="flex border">
        second column
      </div>

      <div className="flex border">
        third column
      </div>

      <div className="flex border">
        fourth column
      </div>


      {/* Second row */}
      <div className="flex border">
        second row first column
      </div>

      <div className="flex border">
        second row second column
      </div>
      <div className="flex border">
        second row second column
      </div>
    </main>
  );
}
