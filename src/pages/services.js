import * as React from 'react';
import Layout from '../components/Layout.jsx';
import { Link } from 'gatsby';
import Button from '../components/Button.jsx';
import Accordion from '../components/Accordion.jsx';

const ourServices = [
  {
    id: 0,
    renderLabel: () => (
      <h3 className="font-bold text-xl md:text-2xl mt-6 mb-3 font-sans">
        Interior Cleaning
      </h3>
    ),
    renderContent: () => (
      <ul className="mb-6">
        <li className="feature-list-item">
          <strong>Residential:</strong> Cleaning for homes and apartments to
          maintain comfort and hygiene.
        </li>
        <li className="feature-list-item">
          <strong>Commercial:</strong> Comprehensive cleaning for offices and
          facilities to create a professional atmosphere.
        </li>
      </ul>
    ),
  },
  {
    id: 1,
    renderLabel: () => (
      <h3 className="font-bold text-xl md:text-2xl mt-6 mb-3 font-sans">
        Exterior Cleaning
      </h3>
    ),
    renderContent: () => (
      <ul className="mb-6">
        <li className="feature-list-item">
          <strong>Parking Lots:</strong> Thorough cleanup and debris removal for
          safety and cleanliness.
        </li>
        <li className="feature-list-item">
          <strong>Sidewalks:</strong> Pressure washing to remove dirt and grime.
        </li>
        <li className="feature-list-item">
          <strong>Dumpster Areas:</strong> Removal of trash to maintain a tidy
          environment.
        </li>
      </ul>
    ),
  },
 
  {
    id: 2,
    renderLabel: () => (
      <h3 className="font-bold text-xl md:text-2xl mt-6 mb-3 font-sans">
        Junk Removal
      </h3>
    ),
    renderContent: () => (
      <ul className="mb-6">
        <li className="feature-list-item">
          <strong>Junk Removal:</strong> Efficient disposal of large items and
          debris.
        </li>
        <li className="feature-list-item">
          <strong>Bulk Trash:</strong> Easy removal of prepared waste bags made
          accessible from designated areas.
        </li>
      </ul>
    ),
  },
];

const whyChooseUs = [
  {
    id: 0,
    renderLabel: () => (
      <h3 className="font-bold text-xl md:text-2xl mt-6 mb-3 font-sans">
        Comprehensive Solutions
      </h3>
    ),
    renderContent: () => (
      <ul className="mb-6">
        <li className="feature-list-item">
          From exterior maintenance to detailed interior cleaning, we handle it
          all.
        </li>
        <li className="feature-list-item">
          Simplify your property maintenance with our convenient one-stop-shop
          approach.
        </li>
      </ul>
    ),
  },
  {
    id: 1,
    renderLabel: () => (
      <h3 className="font-bold text-xl md:text-2xl mt-6 mb-3 font-sans">
        Professional Partnerships
      </h3>
    ),
    renderContent: () => (
      <ul className="mb-6">
        <li className="feature-list-item">
          Partnered with Canton Cleaning Company, ensuring top-notch interior
          cleaning services.
        </li>
        <li className="feature-list-item">
          Vendor for BMG (Bay Management Group): Trusted provider for a leading
          property management group.
        </li>
      </ul>
    ),
  },
  {
    id: 2,
    renderLabel: () => (
      <h3 className="font-bold text-xl md:text-2xl mt-6 mb-3 font-sans">
        Local Commitment
      </h3>
    ),
    renderContent: () => (
      <ul className="mb-6">
        <li className="feature-list-item">
          Dedicated to serving Baltimore with reliable and efficient cleaning
          services.
        </li>
        <li className="feature-list-item">
          Responsive customer service to address your cleaning and junk removal
          needs promptly.
        </li>
      </ul>
    ),
  },
];

const ServicesPage = () => {
  return (
    <Layout>
      <section
        id="services"
        className="mt-20 mb-20 px-6 mx-auto max-w-lg md:max-w-xl lg:max-w-4xl"
      >
        <h1>Nevermore Cleaning & Junk Removal —</h1>
        <small className="block mt-4 font-bold text-lg text-slate-600 mb-14">
          Your All-In-One Cleaning Junk Removal Partner in Baltimore, MD
        </small>
        <p className="mb-6">
          We offer comprehensive exterior cleaning and junk removal services to
          keep your property pristine. In addition to our expertise in exterior
          maintenance, we also have a partnership to provide interior cleaning
          solutions for both residential and commercial properties.
        </p>
        <h2 className="text-2xl md:text-3xl font-bold mb-8 mt-16">
          Our Services{' '}
        </h2>
        <Accordion items={ourServices} keepOthersOpen={true} />
        <h2 className="text-2xl md:text-3xl font-bold mb-8 mt-16">
          Why Choose Us?
        </h2>
        <Accordion items={whyChooseUs} keepOthersOpen={true} />

        <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-16">
          Contact Us
        </h2>
        <p className="mb-6">
          Contact Nevermore Cleaning & Junk Removal today to discover how our
          comprehensive cleaning solutions can benefit your property. We are
          here to provide exceptional service with a focus on quality and
          customer satisfaction.
        </p>
        <div className="flex justify-center md:justify-normal">
          <Link to="/contact/#contact">
            <Button className="text-white" order="primary">
              Contact Us Today
            </Button>
          </Link>
        </div>
        {/* ///////////////////////////////////////////
        <h1 className="mb-14">
          Nevermore Cleaning & Junk Removal —
          <small className="block mb-3 mt-4 text-lg text-slate-600">
            Your All-In-One Cleaning Junk Removal Partner in Baltimore, MD
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
        <p className="mb-6">
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
        </div> */}
      </section>
    </Layout>
  );
};

export default ServicesPage;

export const Head = () => (
  <>
    <title>Nevermore Cleaning & Junk Removal</title>
    <meta charSet="utf-8" />
    <meta
      name="description"
      content="Nevermore Cleaning & Junk Removal offers top-notch services in junk removal, exterior cleaning, and comprehensive interior cleaning. Partnered with the Canton Cleaning Company, we ensure your property is spotless and clutter-free."
    />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, viewport-fit=cover"
    />
    <meta name="theme-color" content="#000000" />
  </>
);
