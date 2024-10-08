import * as React from 'react';
import Layout from '../components/Layout';
// import CarouselHero from '../CarouselHero';
import CTABanner from '../components/CTABanner';
import SplitTextImage from '../components/SplitTextImage';
import ThreeFeatureIcons from '../components/ThreeFeatureIcons';
import TailwindUIHero from '../components/TailwindUIHero';
import { Link } from 'gatsby';

const IndexPage = () => {
  return (
    <Layout>
      <TailwindUIHero />
      <div className="mb-12 md:mb-24" />
      <SplitTextImage />
      <ThreeFeatureIcons />
      <div className="mb-12 md:mb-24" />
      <section id="what-we-do" className="mt-20 mb-20 px-12 mx-auto max-w-7xl">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-sans font-bold mb-4 mt-16">
            What We Do
          </h2>
          <div className="h-2 w-1/2 mb-4 bg-gradient-to-r from-junkGreen to-transparent" />
          <p className="mb-6">
            At Nevermore, we excel in three core areas: comprehensive interior
            cleaning, exterior cleaning, and bulk junk removal. Whether you're
            preparing properties for turnovers, maintaining commercial spaces,
            or seeking top-notch home cleaning solutions, we ensure your spaces
            are spotless and clutter-free.
          </p>
          <p className="mb-6">
            Partnered with the Canton Cleaning Company, we offer a seamless
            blend of services that guarantee your property is "good to go"
            inside and out. From meticulous interior cleaning to expert junk
            removal and exterior cleaning, our collaboration ensures every
            detail is covered.
          </p>
          <br />
          <div className="flex flex-col md:flex-row md:justify-around">
            <ul>
              {/* <li className="feature-list-item">Construction Debris</li> */}
              <li className="feature-list-item">Appliances</li>
              <li className="feature-list-item">Furniture</li>
              <li className="feature-list-item">Excess Collections</li>
            </ul>

            <ul>
              <li className="feature-list-item">Electronics</li>
              <li className="feature-list-item">Mattresses</li>
              <li className="feature-list-item">Storage Units Cleanouts</li>
              <li className="feature-list-item">...And Much More!</li>
            </ul>
          </div>
          <br />
          <p>
            Due to local regulations, we have to charge additional environmental
            fees for the following items:
          </p>
          <br />
          <div className="flex flex-col md:flex-row md:justify-around">
            <ul>
              <li className="feature-list-item">Mattresses & Box Springs</li>
              <li className="feature-list-item">Propane Tanks</li>
              <li className="feature-list-item">Refrigerators</li>
              <li className="feature-list-item">Air Conditioners</li>
            </ul>

            <ul>
              <li className="feature-list-item">Televisions & Monitors</li>
              <li className="feature-list-item">Computers & Laptops</li>
              <li className="feature-list-item">Car Batteries</li>
            </ul>
          </div>
        </div>
      </section>
      <section
        id="discover-more"
        className="mt-20 mb-20 px-12 mx-auto max-w-7xl"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-sans font-bold mb-4 mt-16">
            Discover More
          </h2>
          <div className="h-2 w-1/2 mb-4 bg-gradient-to-r from-junkGreen to-transparent" />
          <p className="mb-6">
            Explore more about our range of services on{' '}
            <Link className="font-semibold underline text-black" to="/services">
              Our Services
            </Link>{' '}
            page. Discover how Nevermore’s services can elevate your business or
            property with our professional, friendly, and cost-effective
            approach.
          </p>
        </div>
      </section>
      <CTABanner />
      <section id="estimate" className="mt-20 mb-20 px-12 mx-auto max-w-7xl">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-sans font-bold mb-4 mt-16">
            Get a Free Estimate Today
          </h2>
          <div className="h-2 w-1/2 mb-4 bg-gradient-to-r from-junkGreen to-transparent" />
          {/* <p className="mb-6">
          Whether you need one item removed or an exterior house cleaning, you
          can do a few things to obtain a free quote:
        </p> */}
          <p className="mb-6">
            We can provide a quote over the phone with a detailed description of
            what you need removed.
          </p>
          <ol>
            <li className="feature-list-item">
              You can snap pictures and send via text at{' '}
              <a
                href="sms:+14438838595"
                className="font-bold underline text-black"
              >
                +1(443)883-8595
              </a>{' '}
              or email us at{' '}
              <a
                className="font-bold underline text-black"
                href="mailto:LetsTalkNevermore@gmail.com"
              >
                LetsTalkNevermore@gmail.com
              </a>
            </li>
            {/* <li className="feature-list-item">
            We can come to your location, assess the item(s) at hand, and
            provide you with a quote on site.
          </li> */}
          </ol>
        </div>
      </section>
      <section>
        {' '}
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 pt-10 pb-10 text-md leading-6 text-gray-600  ring-gray-900/10 hover:ring-gray-900/20">
            Black and Queer owned Business in Baltimore.{' '}
            <a href="/about" className="font-semibold text-indigo-600">
              <span className="absolute inset-0" aria-hidden="true" />
              Read more <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <html lang="en" />
    <title>Home | Nevermore Cleaning & Junk Removal</title>
    <link rel="icon" href="/src/images/nevermorelogo-orange.png"></link>
    <meta charSet="utf-8" />
    <meta
      name="description"
      content="Nevermore Cleaning & Junk Removal offers top-notch services in junk removal, exterior cleaning, and comprehensive interior cleaning. Partnered with the Canton Cleaning Company, we ensure your property is spotless and clutter-free."
    />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, viewport-fit=cover"
    />
    <meta
      name="theme-color"
      content="#000000"
      media="(prefers-color-scheme: dark)"
    />
    <link
      rel="preload"
      href="https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLDz8Z1xlFd2JQEk.woff2"
      as="font"
      type="font/woff2"
      crossorigin="anonymous"
    />
    <link
      rel="preload"
      href="https://fonts.gstatic.com/s/ubuntu/v15/4iCs6KVjbNBYlgoKfw72.woff2"
      as="font"
      type="font/woff2"
      crossorigin="anonymous"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&family=Ubuntu:wght@400;500;700&display=swap"
      rel="stylesheet"
    />
  </>
);
