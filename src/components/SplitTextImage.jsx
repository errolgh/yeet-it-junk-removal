import * as React from 'react';
import skyline from '../images/baltimore_harbor.jpg';

export default function SplitTextImage(props, children) {
  return (
    <section className="mx-auto max-w-8xl">
      <div className="mx-auto flex flex-col md:flex-row px-8 space-y-8 md:space-x-16 md:justify-around md:space-y-0 mb-12 md:pl-20">
        <div className="">
        <h2 className="text-2xl md:text-4xl font-sans font-bold mb-4 mt-16">
            Who We{' '}
            <span className="text-junkGreen text-2xl md:text-4xl font-bold">Are</span>
          </h2>
          <div className="h-2 w-1/2 mb-4 bg-gradient-to-r from-junkGreen to-transparent" />
          <p className="max-w-xl">
            Discover the difference with Nevermore services, where
            professionalism meets friendliness in every job. We are based in
            Baltimore, MD and we take pride in our expert team's commitment to
            providing top-notch service with a personal touch to our community.
            Our mission is simple – making clutter, furniture, and debris
            disappear without the hassle. Because we are committed to
            responsible disposal and cleaning, our team transports items to the
            appropriate disposal facilities such as recycling centers, donantion
            centers and waste facilities. Experience the convenience of our
            transparent and affordable pricing, ensuring satisfaction at every
            step.
          </p>
          <br />
          <p className="font-sans max-w-xl">
            Choose Nevermore for professional, friendly, and budget-friendly
            junk removal & exterior cleaning that puts your space first.
          </p>
        </div>
        {/* Image */}
        <div className="mx-auto flex justify-center align-center">
          <img
            src={skyline}
            alt=""
            className="shadow-2xl object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
