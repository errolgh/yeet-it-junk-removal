import React from 'react';
import brownStone from '../images/brownstone_buildings.jpg';
import mopping from '../images/mopping.jpg';
import { Carousel } from 'antd';

const images = [brownStone, mopping];

const carouselNode = (
  <Carousel
    autoplay
    dots
    draggable
    autoplaySpeed={4000}
    speed={1500}
    easing="easeInOutBack"
    className="relative"
  >
    {images.map((slide, index) => (
      <div key={index}>
        <img
          src={slide}
          alt={`Slide ${index + 1}`}
          className="tint w-full h-[91vh] object-cover"
        />
      </div>
    ))}
  </Carousel>
);

export default function TailwindUIHero() {
  return (
    <div className="bg-white">
        {carouselNode}
      <div className="relative isolate px-6 lg:px-8">
        <div className="absolute max-w-2xl py-28 bottom-64 md:bottom-20 m-auto left-0 right-0 lg:py-40 justify-center flex flex-col align-middle">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-200 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Black and Queer owned Business in Baltimore.{' '}
              <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-200 sm:text-6xl">
              Affordable Junk Removal and Clean Up
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Your Go-To Service for Efficient Junk Removal and Exterior
              Cleaning
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/#estimate"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Book Now!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
