import * as React from 'react';
import Layout from '../components/Layout.jsx';
import { Link } from 'gatsby';
import Button from '../components/Button.jsx';

const AboutPage = () => {
  return (
    <Layout>
      <section className="mt-20 mb-20 px-6 mx-auto max-w-lg md:max-w-xl lg:max-w-4xl">
        <h1 className="mb-14">
          Nevermore Cleaning & Junk Removal —
          <small className="block mb-3 mt-4 text-lg text-slate-600">
            Your Trusted Cleaning Junk Removal Partner in Baltimore, MD
          </small>
        </h1>
        <h2 className="text-2xl font-bold mb-4 mt-16">Responsible Disposal</h2>
        <p className="mb-6">
          At Nevermore, we believe in going beyond cleaning and just removal.
          Our commitment to responsible cleaning and disposal is at the core of
          our mission. We ensure that items we collect are disposed of
          ethically, with a focus on recycling and minimizing environmental
          impact. Your clutter doesn't just disappear; it's handled with care
          for a sustainable tomorrow.
        </p>
        <h2 className="text-2xl font-bold mb-4 mt-16">
          Up and Coming Business
        </h2>
        <p className="mb-6">
          As an up-and-coming business, Nevermore is passionate about making a
          mark in the cleaning and junk removal industry. With fresh ideas, a
          dedicated team, and a commitment to customer satisfaction, we're
          excited to bring a new level of service to Baltimore. Join us on this
          journey of growth and transformation!
        </p>
        <p>
          Thank you for considering Nevermore for your cleaning and junk removal
          needs. We look forward to serving you and making a positive impact on
          your space and our community.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-16">Mission Statement</h2>
        <p className="mb-6">
          To provide efficient, affordable, responsible cleaning and junk
          removal services to the Baltimore community. We aim to exceed
          expectations in every job, making a positive impact on our clients'
          spaces and the environment.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-16">Contact Us</h2>
        <p className="mb-6">
          Ready to declutter your space or have questions about our services?
          Contact us today! We're here to answer your inquiries, provide quotes,
          and schedule appointments. Your satisfaction is our priority.
        </p>

        <div className="flex justify-center md:justify-normal">
          <Link to="/contact">
            <Button className="text-white" order="primary">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
