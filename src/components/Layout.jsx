import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import { motion as m } from 'framer-motion'

export default function Layout({ children }) {
  return (
    <div id="overflow-fix">
      {/* don't remember the reason we used id instead of just using tailwind overflow-x-hidden... */}
      {/* ... but the actual overflow occured on iPhone14*/}
      <Nav />
      <m.main
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
        }}
        transition={{
          type: 'tween',
          mass: 1.35,
          stiffness: 100,
          duration: 0.2,
        }}
      >
        {children}
      </m.main>
      <Footer />
    </div>
  )
}
