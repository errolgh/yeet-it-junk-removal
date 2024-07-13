import React from 'react';
import mainBanner from '../images/brownstone_buildings.jpg';
import mopping from '../images/mopping.jpg';
import { Carousel } from 'antd';

const images = [mainBanner, mopping];

export default function CarouselHero() {
  return (
    <header>
      <Carousel
        autoplay
        dots
        draggable
        autoplaySpeed={4000}
        speed={1500}
        easing="easeInOutBack"
        className="flex flex-column justify-center align-middle text-center w-full overflow-hidden h-screen"
      >
        {images.map((slide, index) => (
          <div key={index} className="w-full h-auto">
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="object-cover tint w-full h-auto"
            />
          </div>
        ))}
      </Carousel>
      <div className="w-[90%] text-slate-200 text-center items-center absolute top-1/4 sm:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="font-bold font-sans text-sm md:text-5xl mb-4 text-slate-200">
          Affordable Junk Removal and Clean Up
        </h1>
        <div>
          <p className="text-xl md:text-3xl text-slate-200">
            Your Go-To Service for Efficient Junk Removal and Exterior Cleaning
          </p>
        </div>
      </div>
    </header>
  );
}
