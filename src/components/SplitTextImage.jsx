import * as React from 'react';
import { StaticImage } from "gatsby-plugin-image"

export default function SplitTextImage(props, children) {
  return (
    <section className="mx-auto max-w-8xl">
      <div className="mx-auto flex flex-col md:flex-row px-8 space-y-8 md:space-x-16 md:justify-around md:space-y-0 mb-12 md:pl-20">
        <div className="">
          <h2 className="text-2xl md:text-4xl font-sans font-bold mb-4 mt-16">
            Who We{' '}
            <span className="text-junkGreen text-2xl md:text-4xl font-bold">
              Are
            </span>
          </h2>
          <div className="h-2 w-1/2 mb-4 bg-gradient-to-r from-junkGreen to-transparent" />
          <p className="max-w-xl">
            Welcome to Nevermore, a proudly Black and Queer owned business based
            in Baltimore, MD. We specialize in delivering exceptional cleaning
            and junk removal services to both residential and commercial clients
            with a commitment to professionalism and care.
          </p>
          <br />
          <p className="max-w-xl">
            Choose us for professional, kind, and budget-friendly
            cleaning and junk removal that puts your space first.
          </p>
        </div>
        {/* Image */}
        <div className="mx-auto flex justify-center align-center">
          <StaticImage
            src='../images/baltimore_harbor.jpg'
            alt="skyline"
            className="shadow-2xl object-cover rounded-lg"
            loading='lazy'
          />
        </div>
      </div>
    </section>
  );
}
