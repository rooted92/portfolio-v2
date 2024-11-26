import React from "react";
import { Righteous } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const righteous = Righteous({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {
  return (
    <main className="grid grid-cols-4 grid-rows-4 min-h-screen p-8 pb-20 gap-16 sm:p-20 container mx-auto">

      {/* First Row */}
      <div className="col-span-4 flex flex-around gap-4 border border-honeydew p-8">
        <div className="flex items-center justify-center gap-4">
          <div className="flex items-center justify-center gap-4">
            <Image src={"/pedro.jpg"} alt="Photo of Pedro Castaneda" width={2000} height={2000} className="h-40 w-40 object-cover object-top rounded-full" />
            <div className="flex flex-col">
              <h1 className={`${righteous.className} font-bold tracking-wider text-5xl`}>Pedro Cataneda</h1>
              <p className="text-lg bg-gradient-to-r from-citrine to-persimmon bg-transparent bg-clip-text text-transparent font-semibold">Full Stack Developer / Freelancer</p>
              <div className="flex gap-4">
                <p>stack</p>
                <p>icons</p>
                <p>go</p>
                <p>here</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="flex">
        second column
      </div>

      <div className="flex">
        third column
      </div>

      <div className="flex">
        fourth column
      </div>


      {/* Second row */}
      <div className="flex">
        second row first column
      </div>

      <div className="flex">
        second row second column
      </div>
    </main>
  );
}
