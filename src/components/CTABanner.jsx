import React from 'react'
import Button from './Button'
import { motion as m } from 'framer-motion'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

// @TODO: Add teal to isBreakOrContinueStatement
// idk what the todo above means anymore

export default function CTABanner() {
  return (
    <section id="cta">
      <div id="cta" className="bg-black py-12 w-full">
        <div className="flex flex-col p-2 space-y-6 font-sans text-center">
          <h2 className="mx-auto space-y-10 text-2xl md:text-4xl font-sans font-bold text-slate-100">
            Clear Out Your Space Today!
          </h2>
          <p className="text-slate-200">
            Schedule Hassle-Free Junk Removal and Transform Your Home. Get
            Started Now!
          </p>
          <m.div
            animate={['initial']}
            // whileHover={['grow']}
            variants={{
              // grow: {
              //   scale: 1.1,
              // },
              rotate: {
                rotate: [null, -5, 5, 0],
                transition: {
                  // delay,
                  duration: 10,
                  // repeat: Infinity,
                  // repeatDelay: 0.2,
                  // repeatType: "reverse"
                },
              },
              initial: {
                y: [-10, 10],
                rotate: 0,
                transition: {
                  // delay,
                  duration: 1,
                  repeat: Infinity,
                  // repeatDelay: 0.2,
                  repeatType: 'reverse',
                },
              },
            }}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              height="3em"
              width="3em"
              xmlns="http://www.w3.org/2000/svg"
              className="text-junkGreen mx-auto"
            >
              <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
            </svg>
          </m.div>
          <div className="mx-auto">
            <AnchorLink to="#estimate">
              <Button className="text-white" order="primary">
                BOOK NOW
              </Button>
            </AnchorLink>
          </div>
        </div>
      </div>
    </section>
  )
}
