import React, { useRef } from 'react'
import { motion as m, useTransform, useScroll } from 'framer-motion'
import chairs from '../images/hero-truck.png'

export default function ParallaxHero() {
  const ref = useRef(null)
  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.1px', 'end start'],
  })
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0.1%', '80%'])
  let textY = useTransform(scrollYProgress, [0, 1], ['0%', '45%'])

  return (
    <header>
      <div ref={ref} className="text-center relative w-full overflow-hidden">
        <m.img
          style={{ y: backgroundY }}
          src={chairs}
          alt="Wimberley Office"
          className="object-cover tint -z-10 w-full"
        />
        <m.div
          style={{ y: textY }}
          className="px-4 absolute text-slate-200 inset-0 flex flex-col justify-center items-center"
        >
          <h1 className="font-bold font-sans text-3xl md:text-5xl mb-4 text-slate-200">
            Affordable Cleaning & Junk Removal in the Baltimore Area
          </h1>
          <p className="text-xl md:text-3xl max-w-xl text-slate-200">
            Your Trusted Partner in Stress-Free Space Cleaning.
          </p>
        </m.div>
      </div>
    </header>
  )
}
