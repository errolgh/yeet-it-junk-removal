import React from 'react'
import mainBanner from '../images/brownstone_buildings.jpg';
import { Carousel } from 'antd';

export default function ParallaxHero() {
  return (
    <header>
      <div className="flex flex-column justify-center align-middle text-center relative w-full overflow-hidden h-[85vh]">
        <img
          src={mainBanner}
          alt="Cleaning equipment"
          className="object-cover tint w-full"
        />
        <div className="px-4 absolute text-slate-200 inset-0 flex flex-col justify-center items-center">
          <h1 className="font-bold font-sans text-3xl md:text-5xl mb-4 text-slate-200">
            Affordable Junk Removal and Clean Up
          </h1>
          <p className="text-xl md:text-3xl max-w-xl text-slate-200">
            Your Go-To Service for Efficient Junk Removal and Exterior Cleaning
          </p>
        </div>
      </div>
    </header>
  );
}
