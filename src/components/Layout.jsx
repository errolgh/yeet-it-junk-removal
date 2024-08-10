import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import GratefulPlug from './GratefulPlug';
import { motion as m } from 'framer-motion';

export default function Layout({ children }) {
  return (
    <div id="overflow-fix">
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
      <GratefulPlug />
    </div>
  );
}
