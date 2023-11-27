import * as React from 'react'
import skyline from '../images/skyline.jpg'

export default function SplitTextImage(props, children) {
  return (
    <section className='mx-auto'>
      <div className="mx-auto flex flex-col md:flex-row px-8 space-y-8 md:space-x-10 md:justify-between md:space-y-0 mb-12 md:pl-20">
        <div className="">
          <h2 className="text-2xl md:text-4xl font-sans">Who We Are</h2>
          <div className="h-2 w-1/2 mb-4 bg-gradient-to-r from-junkGreen to-transparent" />
          <p className="font-sans max-w-xl">
            Discover the difference with YEET IT!, where professionalism meets
            friendliness in every junk removal job. Based in Baltimore, MD, we
            take pride in our expert team's commitment to providing top-notch
            service with a personal touch. Our mission is simple – making
            clutter, furniture, and debris disappear without the hassle.
            Experience the convenience of our transparent and affordable
            pricing, ensuring satisfaction at every step.
          </p>
          <br />
          <p className="font-sans max-w-xl">
            Choose YEET IT! for professional, friendly, and budget-friendly junk
            removal that puts your space first.
          </p>
        </div>
        {/* Image */}
        <div className="mx-auto flex justify-center align-center w-full">
          <img src={skyline} alt="" className="shadow-2xl object-cover" />
        </div>
      </div>
    </section>
  )
}
