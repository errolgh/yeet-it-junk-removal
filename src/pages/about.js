import * as React from 'react'
import Layout from '../components/Layout.jsx'
import { Link } from 'gatsby'
import Button from '../components/Button.jsx'

const AboutPage = () => {
  return (
    <Layout>
      <section className="mt-20 mb-20 px-6 mx-auto max-w-lg md:max-w-xl lg:max-w-4xl">
        <h1 className="mb-14">
          YEET! IT Junk Removal —
          <small className="block mb-3 mt-4 text-lg text-slate-600">
            Your Trusted Junk Removal Partner in Baltimore, MD
          </small>
        </h1>
        <h2 className="text-2xl font-bold mb-4 mt-16">Responsible Disposal</h2>
        <p className="mb-6">
          At YEET IT!, we believe in going beyond just removal. Our commitment
          to responsible disposal is at the core of our mission. We ensure that
          items we collect are disposed of ethically, with a focus on recycling
          and minimizing environmental impact. Your clutter doesn't just
          disappear; it's handled with care for a sustainable tomorrow.
        </p>
        <h2 className="text-2xl font-bold mb-4 mt-16">
          Up and Coming Business
        </h2>
        <p className="mb-6">
          As an up-and-coming business, YEET IT! is passionate about making a
          mark in the junk removal industry. With fresh ideas, a dedicated team,
          and a commitment to customer satisfaction, we're excited to bring a
          new level of service to Baltimore. Join us on this journey of growth
          and transformation!
        </p>
        <p>
          Thank you for considering YEET IT! for your junk removal needs. We
          look forward to serving you and making a positive impact on your space
          and our community.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-16">Mission Statement</h2>
        <p className="mb-6">
          To provide efficient, affordable, and eco-friendly junk removal
          services to the Baltimore community. We aim to exceed expectations in
          every job, making a positive impact on our clients' spaces and the
          environment.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-16">Contact Us</h2>
        <p className="mb-6">
          Ready to declutter your space or have questions about our services?
          Contact us today! We're here to answer your inquiries, provide quotes,
          and schedule appointments. Your satisfaction is our priority.
        </p>

        <Link to="/contact">
          <Button className="text-white" order="primary">Contact Us Today</Button>
        </Link>
      </section>
    </Layout>
  )
}

// Step 3: Export your component
export default AboutPage
