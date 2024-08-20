import React from 'react';
import { IoLogoFacebook, IoLogoInstagram } from 'react-icons/io5';
import { Link } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"

// const zoomLevel = 14;
// const mapSource = `https://maps.google.com/maps?q=55%20Manchester%20Avenue,%20May%20Pen,%20Jamaica&t=&z=${zoomLevel}&ie=UTF8&iwloc=&output=embed`;

export default function Footer() {
  return (
    <footer className="py-16 bg-brandPrimary">
      {/* Footer Container  */}
      <div className=" max-w-7xl flex flex-col items-center justify-between mx-auto space-y-16 md:flex-row md:space-y-0 md:items-start">
        {/*  Logo  */}
        <div className="flex flex-col items-center space-y-2 md:flex-row md:space-x-4 md:pr-8">
          <div className="flex w-20 justify-center pt-4 relative z-50">
            <StaticImage loading='lazy' src='../images/logo.png' alt="Nevermore Cleaning & Junk Removal logo" />
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
                className="capitalize text-black mb-1 hover:underline hover:font-bold"
              >
                Home
              </Link>
            </div>
            <div className="flex flex-col items-center space-y-3 ">
              <Link
                to="/services#services"
                className="capitalize text-black mb-1 hover:underline hover:font-bold"
              >
                Services
              </Link>
            </div>
            <div className="flex flex-col items-center space-y-3 ">
              <Link
                to="/about#about"
                className="capitalize text-black mb-1 hover:underline hover:font-bold"
              >
                About
              </Link>
            </div>
            <div className="flex flex-col items-center space-y-3 ">
              <Link
                to="/contact#contact"
                className="capitalize text-black mb-1 hover:underline hover:font-bold"
              >
                Contact&nbsp;Us
              </Link>
            </div>
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
        {/*  Social Container  */}
        <div className="flex flex-col items-center space-y-4 md:items-start pl-4">
          <div className="flex space-x-6">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/people/Nevermore-Cleaning-Junk-Removal/61560563170433/"
              aria-label="Visit our Facebook page"
            >
              <IoLogoFacebook className="text-4xl" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/letstalknevermore"
              aria-label="Visit our Instagram page"
            >
              <IoLogoInstagram className="text-4xl" />
            </a>
          </div>
          <div className="text-center md:text-left text-black">
            <p>
              © {new Date().getFullYear()} Nevermore Cleaning & Junk Removal LLC
            </p>
            {/* <iframe
              src={mapSource}
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            /> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
