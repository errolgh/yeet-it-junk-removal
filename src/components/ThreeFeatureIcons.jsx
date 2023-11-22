import React from 'react'
import { IoLocationOutline } from 'react-icons/io5'
import { FaRegFaceSmileBeam } from 'react-icons/fa6'
import { GiReceiveMoney } from 'react-icons/gi'

// @TODO: Convert svgs to React Components AND abstract fill properties
export default function ThreeFeatureIcons() {
  return (
    <section id="three-features">
      <div className="font-sans container max-w-6xl mx-auto flex flex-col mt-12 space-y-10 text-center px-10 md:space-y-16 md:mt-32 lg:mt-40 lg:flex-row lg:space-y-0 lg:space-x-20">
        {/* Item 1 */}
        <div className="mx-auto">
          <div className="mx-auto w-16">
            <FaRegFaceSmileBeam className="text-junkGreen text-7xl" />
          </div>
          <h3 className="font-bold text-2xl mt-6 mb-3 font-sans">
            Friendly&nbsp;&&nbsp;Professional
          </h3>
          <p className="mx-auto max-w-md lg:max-w-xs">
            Our team is trained, experienced, and polite!
          </p>
        </div>

        {/* Item 2 */}
        <div className="mx-auto">
          <div className="mx-auto w-16">
            <GiReceiveMoney className="text-junkGreen text-7xl" />
          </div>
          <h3 className="font-bold text-2xl mt-6 mb-3 font-sans">
            Affordable & Available
          </h3>
          <p className="mx-auto max-w-md lg:max-w-xs">
            Our prices are competitive & our team is readily available to help.
          </p>
        </div>

        {/* Item 3 */}
        <div className="mx-auto">
          <div className="mx-auto w-16">
            <IoLocationOutline className="text-junkGreen text-7xl" />
          </div>
          <h3 className="font-bold text-2xl mt-6 mb-3 font-sans">
            We are Local
          </h3>
          <p className="mx-auto max-w-md lg:max-w-xs">
            Our company is locally owned and operated.
          </p>
        </div>
      </div>
    </section>
  )
}
