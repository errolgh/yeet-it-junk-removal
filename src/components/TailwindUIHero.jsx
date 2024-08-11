import React from 'react';
import storefront from '../images/storefront.jpg';
import mopping from '../images/mopping.jpg';
import skyscraper from '../images/skyscraper.jpg';
import { Carousel } from 'antd';

const images = [storefront, mopping, skyscraper];

const mediaNode = (
  <Carousel
    autoplay
    dots
    draggable
    pauseOnHover={false}
    pauseonFocus={false}
    autoplaySpeed={4200}
    speed={1200}
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
      {mediaNode}
      <div className="left-0 right-0 sm:top-[24px] top-[40px] absolute max-w-2xl py-28 m-auto lg:py-40 justify-center flex flex-col align-middle">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-200 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Black and Queer owned Business in Baltimore.{' '}
            <a href="/about" className="font-semibold text-indigo-600">
              <span className="absolute inset-0" aria-hidden="true" />
              Read more <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-200 sm:text-5xl md:text-6xl">
            Affordable Cleaning & Junk Removal
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Your Go-To Service for Efficient Property Maintenance
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/contact"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
      {/* entire rest of component was sandwiched between here */}
      {/* <div className="relative isolate px-6 lg:px-8">
      </div> */}
    </div>
  );
}
