import React from "react";
import { Righteous } from "next/font/google";
import Image from "next/image";

const righteous = Righteous({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {
  return (
    <div className="grid grid-col-3 justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="flex justify-center items-center gap-4">
        <Image src={"/pedro.jpg"} alt="Pedro" width={2000} height={2000} className="h-16 w-16 object-cover rounded-full grayscale" />
        <div className="flex flex-col">
          <h1 className={`${righteous.className} font-semibold tracking-wider text-2xl`}>Pedro Cataneda</h1>
          <p className="text-sm">Software Developer / Father & Husband</p>
        </div>
      </div>
    </div>
  );
}
