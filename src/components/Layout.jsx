import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import GratefulPlug from './GratefulPlug';
import { motion as m } from 'framer-motion';
import CCPPBanner from './CCPPBanner';
import { useLocation } from '@reach/router';

export default function Layout({ children }) {
  const location = useLocation();
  const isNotFoundPage =
    location.pathname === '/404' || location.pathname === '/404.html';
  return (
    <div id="overflow-fix">
      <Nav />
      {!isNotFoundPage && <CCPPBanner />}
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
