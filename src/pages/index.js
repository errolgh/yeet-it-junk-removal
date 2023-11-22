import * as React from 'react'
import Layout from '../components/Layout'
import ParallaxHero from '../components/ParallaxHero'
import CTABanner from '../components/CTABanner'
import SplitTextImage from '../components/SplitTextImage'
import ThreeFeatureIcons from '../components/ThreeFeatureIcons'
import { Link } from 'gatsby'

const IndexPage = () => {
  return (
    <Layout>
      <ParallaxHero />
      <CTABanner />
      <div className="mb-12 md:mb-24" />
      <SplitTextImage />
      <ThreeFeatureIcons />
      <div className="mb-12 md:mb-24" />
      <section className="mt-20 mb-20 px-12 mx-auto">
        <h2 className="text-2xl md:text-4xl font-sans font-bold mb-4 mt-16">
          What We Take
        </h2>
        <div className="h-2 w-1/2 mb-4 bg-gradient-to-r from-junkGreen to-transparent" />
        <p className="mb-6">
          Instead of navigating around heaps of junk on your property, hire us
          to remove it. We can remove all kinds of junk from your property and
          dispose of it at the proper facilities. We can also remove debris
          that’s been piling up in your yard or at your construction site. We’ll
          handle the cleanup so you can spend time hanging out with friends and
          family.
        </p>
        <br />
        <div className="flex flex-col md:flex-row md:justify-around">
          <ul>
            <li className="feature-list-item">Construction Debris</li>
            <li className="feature-list-item">Appliances</li>
            <li className="feature-list-item">Furniture</li>
            <li className="feature-list-item">Yard Waste</li>
            <li className="feature-list-item">Christmas Trees</li>
          </ul>

          <ul>
            <li className="feature-list-item">Hoarder Junk</li>
            <li className="feature-list-item">Electronic</li>
            <li className="feature-list-item">Mattresses</li>
            <li className="feature-list-item">Storage Units</li>
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
      </section>
      <section className="mt-20 mb-20 px-12 mx-auto">
        <h2 className="text-2xl md:text-4xl font-sans font-bold mb-4 mt-16">
          Get a Free Estimate Today
        </h2>
        <div className="h-2 w-1/2 mb-4 bg-gradient-to-r from-junkGreen to-transparent" />
        <p className="mb-6">
          Whether you need one item removed or an entire house cleaned out, you
          can do a few things to obtain a free quote.
        </p>
        <ol>
          <li className="feature-list-item">
            We can provide a quote over the phone with a detailed description of
            what you need removed.
          </li>
          <li className="feature-list-item">
            You can snap a picture & send: TEXT – 908-472-1977 E-MAIL –
            JunkYeetInfo@gmail.com
          </li>
          <li className="feature-list-item">
            We can come to your location, assess the item(s) at hand, and
            provide you with a quote on site.
          </li>
        </ol>
      </section>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>YEET IT! Junk Removal</title>
