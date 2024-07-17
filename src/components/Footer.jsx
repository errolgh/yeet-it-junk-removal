import React from 'react';
// import Owl from '../images/svg/owl.js'
import Logo from '../images/logo.png';
import Facebook from '../images/svg/icon-facebook.svg';
import Twitter from '../images/svg/icon-twitter.svg';
import Pinterest from '../images/svg/icon-pinterest.svg';
import Instagram from '../images/svg/icon-instagram.svg';
import { Link } from 'gatsby';

export default function Footer() {
  return (
    <footer className="py-16 bg-yellow-600">
      {/* Footer Container  */}
      <div className="container flex flex-col items-center justify-between mx-auto space-y-16 md:flex-row md:space-y-0 md:items-start">
        {/*  Logo  */}
        <div className="flex flex-col items-center space-y-2 md:flex-row md:space-x-4 md:pr-8">
          <div className="flex w-20 justify-center pt-4 relative z-50">
            <img src={Logo} alt="Nevermore Cleaning & Junk Removal logo" />
          </div>
          <div className="flex flex-col text-center justify-center z-10 text-black font-bold">
            <span className="font-bold text-xl tracking-widest text-black">
              Nevermore
            </span>
            <span className="text-xs tracking-widest uppercase text-black font-bold">
              Cleaning & Junk Removal
            </span>
          </div>
        </div>
        {/*  Menus Container  */}
        <div className="flex flex-col space-y-12 md:space-x-48 md:flex-row md:space-y-0">
          {/*  Menu 1  */}
          <div className="flex flex-col items-center w-full  group">
            <div className="mb-5 font-bold text-black capitalize">Menu</div>

            <div className="flex flex-col items-center space-y-3 ">
              <Link
                to="/"
                className="capitalize text-black mb-1 hover:underline"
              >
                Home
              </Link>
            </div>
            <div className="flex flex-col items-center space-y-3 ">
              <Link
                to="/services#services"
                className="capitalize text-black mb-1 hover:underline"
              >
                Services
              </Link>
            </div>
            <div className="flex flex-col items-center space-y-3 ">
              <Link
                to="/about#about"
                className="capitalize text-black mb-1 hover:underline"
              >
                About
              </Link>
            </div>
            <div className="flex flex-col items-center space-y-3 ">
              <Link
                to="/contact#contact"
                className="capitalize text-black mb-1 hover:underline"
              >
                Contact&nbsp;Us
              </Link>
            </div>
            {/* <div className="flex flex-col items-center space-y-3 md:items-start">
              <Link
                to="/portfolio"
                className="capitalize text-black mb-1 hover:text-teal-400"
              >
                Portfolio
              </Link>
            </div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <Link
                to="/blog"
                className="capitalize text-black mb-1 hover:text-teal-400"
              >
                Blog
              </Link>
            </div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <Link
                to="/about"
                className="capitalize text-black mb-1 hover:text-teal-400"
              >
                About
              </Link>
            </div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <Link
                to="/contact"
                className="capitalize text-black mb-1 hover:text-teal-400"
              >
                Contact
              </Link>
            </div> */}
          </div>
          {/*  Menu 2  */}
          {/* <div className="flex flex-col items-center w-full md:items-start">
            <div className="mb-5 font-bold text-black capitalize">Services</div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <AnchorLink
                to="/services#web-development"
                className="capitalize text-black mb-1 hover:text-teal-400"
              >
                Web Development
              </AnchorLink>
            </div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <AnchorLink
                to="/services#web-design"
                className="capitalize text-black mb-1 hover:text-teal-400"
              >
                Web Design
              </AnchorLink>
            </div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <AnchorLink
                to="/services#digital-marketing"
                className="capitalize text-black mb-1 hover:text-teal-400"
              >
                Digital Marketing
              </AnchorLink>
            </div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <AnchorLink
                to="/services#on-demand"
                className="capitalize text-black mb-1 hover:text-teal-400"
              >
                On-Demand
              </AnchorLink>
            </div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <AnchorLink
                to="/services#support"
                className="capitalize text-black mb-1 hover:text-teal-400"
              >
                Support
              </AnchorLink>
            </div>
          </div> */}
        </div>
        {/*  Social Container 
         @TODO: Add hue-rotate elements that match theme colors: https://codepen.io/sosuke/pen/Pjoqqp */}
        <div className="flex flex-col items-center space-y-4 md:items-start pl-4">
          <div className="flex space-x-6">
            {/* <a href="https://www.facebook.com/profile.php?id=61553945744042">
              <Facebook />
            </a> */}
            {/* <a href="/">
              <Twitter />
            </a>
            <a href="/">
              <Pinterest />
            </a> */}
            {/* <a href="https://www.instagram.com/yeet_itjunkremoval">
              <Instagram />
            </a> */}
          </div>
          <div className="text-center md:text-left text-black">
            <p>
              © {new Date().getFullYear()} Nevermore Cleaning & Junk Removal LLC
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
