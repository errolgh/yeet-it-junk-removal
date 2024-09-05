import React from 'react';
import { Carousel } from 'antd';
import { StaticImage } from 'gatsby-plugin-image';

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
    <div>
      <StaticImage
        src="../images/storefront.jpg"
        alt="Storefront"
        className="tint w-full h-[91vh] object-cover"
        loading="eager"
        layout="constrained" // Optimize image size based on container
        placeholder="blurred" // Use a low-res blurred placeholder
        width={1200} // Specify the maximum width needed
        height={800} // Specify the maximum height needed
      />
    </div>
    <div>
      <StaticImage
        src="../images/mopping.jpg"
        alt="Mopping"
        className="tint w-full h-[91vh] object-cover"
        loading="lazy"
        layout="constrained" // Optimize image size based on container
        placeholder="blurred" // Use a low-res blurred placeholder
        width={1200} // Specify the maximum width needed
        height={800} // Specify the maximum height needed
      />
    </div>
    <div>
      <StaticImage
        src="../images/skyscraper.jpg"
        alt="Skyscraper"
        className="tint w-full h-[91vh] object-cover"
        loading="lazy"
        layout="constrained" // Optimize image size based on container
        placeholder="blurred" // Use a low-res blurred placeholder
        width={1200} // Specify the maximum width needed
        height={800} // Specify the maximum height needed
      />
    </div>
  </Carousel>
);

export default function TailwindUIHero() {
  return (
    <div className="bg-white">
      {mediaNode}
      <div className="left-0 right-0 sm:top-[24px] top-[40px] absolute max-w-2xl py-28 m-auto lg:py-40 justify-center flex flex-col align-middle">
        <div className="hidden sm:mb-8 py-7 sm:flex sm:justify-center"></div>
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
