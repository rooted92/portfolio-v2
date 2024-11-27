import React from "react";
import { Righteous } from "next/font/google";
import Image from "next/image";
// import Link from "next/link";

const righteous = Righteous({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {

  return (
    <div className="grid grid-cols-4 grid-rows-auto p-8 gap-10 container mx-auto">

      

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
    </div>
  );
}
