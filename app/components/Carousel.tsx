'use client';
import React, { useState } from "react";
import Image from "next/image";

interface CarouselProps {
  items: string[],
  objectType?: string,
  width?: string,
  height?: string,
}

const Carousel = ({ items, objectType, width, height }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-screen-lg mx-auto">
      {/* Carousel Container */}
      <div className="hidden sm:block overflow-hidden relative w-auto max-h-[400px] rounded shadow-sm shadow-licorice">
        <div
          className={`flex transition-transform duration-500`}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 bg-hondeydew dark:bg-licorice flex items-center justify-center h-[400px]"
            >
              <Image
                src={item}
                alt={`Slide ${index}`}
                width={2000}
                height={2000}
                className={`${width} ${height} object-${objectType} object-top`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-licorice bg-opacity-50 text-honeydew p-2 rounded-full z-10 focus:outline-none hover:bg-opacity-75 hidden sm:block"
      >
        <i
          className="icon-[icon-park-outline--left-one]"
          role="img"
          aria-hidden="true"
        />
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-licorice bg-opacity-50 text-honeydew p-2 rounded-full z-10 focus:outline-none hover:bg-opacity-75 hidden sm:block"
      >
        <i
          className="icon-[icon-park-outline--right-one]"
          role="img"
          aria-hidden="true"
        />
      </button>

      {/* Pagination Dots */}
      <div className="hidden sm:block absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex
                ? "bg-persimmon"
                : "bg-persimmon opacity-75 hover:opacity-100"
            }`}
          />
        ))}
      </div>

      {/* Mobile Responsiveness */}
      <div className="block sm:hidden mt-4">
        <div className="flex overflow-x-auto space-x-4 snap-x snap-mandatory">
          {items.map((item, index) => (
            <div
              key={index}
              className={`${width} h-[300px] flex-shrink-0 bg-transparent flex items-center justify-center rounded-md snap-start my-2`}
            >
              <Image
                src={item}
                alt={`Mobile Slide ${index}`}
                className={`w-full h-full ${objectType} object-top rounded-md shadow shadow-licorice`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
