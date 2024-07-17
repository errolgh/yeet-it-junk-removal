import * as React from 'react';
import Layout from '../components/Layout.jsx';
import { Link } from 'gatsby';
import Button from '../components/Button.jsx';

const AboutPage = () => {
  return (
    <Layout>
      <section id="about" className="mt-20 mb-20 px-6 mx-auto max-w-lg md:max-w-xl lg:max-w-4xl">
        <h1 className="mb-14">About Us</h1>
        <p className="mb-6">
          Welcome to Nevermore Cleaning & Junk Removal, where passion for
          cleanliness meets dedication to community. Founded in April 2024 by
          Errol Watson and Mel Burman, we are proud to be a Black and Queer
          owned business based in the heart of Baltimore, Maryland.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-16">Our Story</h2>
        <p className="mb-6">
          Errol, originally from Brooklyn, New York, brings a wealth of
          technical expertise as a software engineer. Mel, hailing from
          Columbus, Ohio, serves as the director of client services for a
          successful cleaning company, bringing invaluable industry experience
          and a commitment to exceptional service. Friends since 2017, we have
          always shared a vision of entrepreneurship and a desire to make a
          positive impact in our community.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-16">
          Our Mission
        </h2>
        <p className="mb-6">
          Driven by our love for Baltimore, we are on a mission to enhance the
          beauty and cleanliness of our beloved city. At Nevermore Cleaning &
          Junk Removal, we believe that a clean environment fosters pride and
          improves quality of life. Our goal is not only to provide superior
          cleaning and junk removal services, but also to contribute to a
          cleaner, more vibrant Baltimore.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-16">
          What Sets Us Apart
        </h2>
        <p className="mb-6">
          As a locally owned business, we understand the unique needs and
          challenges of our community. We prioritize sustainability and
          responsible disposal practices, aiming to minimize our environmental
          footprint while delivering efficient and reliable service.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-16">
          Community Commitment
        </h2>
        <p className="mb-6">
          Beyond business, Nevermore Cleaning & Junk Removal is deeply committed
          to social responsibility. We actively support initiatives that promote
          inclusivity, diversity, and equality. By choosing our services, you
          are not only investing in a cleaner environment but also supporting a
          business that values community empowerment.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-16">
          Get in Touch
        </h2>
        <p className="mb-6">
          Whether you need regular cleaning services, junk removal, or a partner
          in maintaining a pristine environment, Nevermore Cleaning & Junk
          Removal is here to serve you. Join us in making Baltimore a cleaner
          and more beautiful place to live, work, and thrive.
        </p>
        <p className="mb-6">
          Thank you for supporting local business and sustainability with
          Nevermore Cleaning & Junk Removal. Let’s build a cleaner future
          together.
        </p>

        <div className="flex justify-center md:justify-normal">
          <Link to="/contact">
            <Button className="text-white" order="primary">
              Contact Us Today
            </Button>
          </Link>
        </div>

        {/* <h1 className="mb-14">Welcome to Nevermore Cleaning & Junk Removal</h1>
        <p className='mb-6' className="mb-6">
          We offer comprehensive exterior cleaning and junk removal services to
          keep your property pristine. In addition to our expertise in exterior
          maintenance, we also have a partnership to provide interior cleaning
          solutions for both residential and commercial properties.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-16" className="text-2xl font-bold mb-4 mt-16">Our Services</h2>

        <h3>Exterior Cleaning & Junk Removal</h3>
        <ul>
          <li>
            <strong>Parking Lots:</strong> Thorough cleanup and debris removal
            for safety and cleanliness.
          </li>
          <li>
            <strong>Sidewalks:</strong> Pressure washing to remove dirt and
            grime.
          </li>
          <li>
            <strong>Dumpster Areas:</strong> Removal of trash to maintain a tidy
            environment.
          </li>
          <li>
            <strong>Bulk Trash & Junk Removal:</strong> Efficient disposal of
            large items and debris.
          </li>
        </ul>

        <h3>Interior Cleaning</h3>
        <ul>
          <li>
            <strong>Residential:</strong> Cleaning for homes and apartments to
            maintain comfort and hygiene.
          </li>
          <li>
            <strong>Commercial:</strong> Comprehensive cleaning for offices and
            facilities to create a professional atmosphere.
          </li>
        </ul>

        <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-16">Why Choose Us?</h2>

        <h3>Comprehensive Solutions</h3>
        <ul>
          <li>
            From exterior maintenance to detailed interior cleaning, we handle
            it all.
          </li>
          <li>
            Simplify your property maintenance with our convenient one-stop-shop
            approach.
          </li>
        </ul>

        <h3>Professional Partnerships</h3>
        <ul>
          <li>
            Partnered with Canton Cleaning Company, ensuring top-notch interior
            cleaning services.
          </li>
          <li>
            Vendor for BMG (Bay Management Group): Trusted provider for a
            leading property management group.
          </li>
        </ul>

        <h3>Local Commitment</h3>
        <ul>
          <li>
            Dedicated to serving Baltimore with reliable and efficient cleaning
            services.
          </li>
          <li>
            Responsive customer service to address your cleaning and junk
            removal needs promptly.
          </li>
        </ul>

        <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-16" className="text-2xl font-bold mb-4 mt-16">Contact Us</h2>
        <p className='mb-6' className="mb-6">
          Contact Nevermore Cleaning & Junk Removal today to discover how our
          comprehensive cleaning solutions can benefit your property. We are
          here to provide exceptional service with a focus on quality and
          customer satisfaction.
        </p>
///////////////////////////////////////////
        <h1 className="mb-14">
          Nevermore Cleaning & Junk Removal —
          <small className="block mb-3 mt-4 text-lg text-slate-600">
            Your Trusted Cleaning Junk Removal Partner in Baltimore, MD
          </small>
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-16" className="text-2xl font-bold mb-4 mt-16">Responsible Disposal</h2>
        <p className='mb-6' className="mb-6">
          At Nevermore, we believe in going beyond cleaning and just removal.
          Our commitment to responsible cleaning and disposal is at the core of
          our mission. We ensure that items we collect are disposed of
          ethically, with a focus on recycling and minimizing environmental
          impact. Your clutter doesn't just disappear; it's handled with care
          for a sustainable tomorrow.
        </p>
        <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-16" className="text-2xl font-bold mb-4 mt-16">
          Up and Coming Business
        </h2>
        <p className='mb-6' className="mb-6">
          As an up-and-coming business, Nevermore is passionate about making a
          mark in the cleaning and junk removal industry. With fresh ideas, a
          dedicated team, and a commitment to customer satisfaction, we're
          excited to bring a new level of service to Baltimore. Join us on this
          journey of growth and transformation!
        </p>
        <p className='mb-6' className="mb-6">
          Thank you for considering Nevermore for your cleaning and junk removal
          needs. We look forward to serving you and making a positive impact on
          your space and our community.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-16" className="text-2xl font-bold mb-4 mt-16">Mission Statement</h2>
        <p className='mb-6' className="mb-6">
          To provide efficient, affordable, responsible cleaning and junk
          removal services to the Baltimore community. We aim to exceed
          expectations in every job, making a positive impact on our clients'
          spaces and the environment.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-16" className="text-2xl font-bold mb-4 mt-16">Contact Us</h2>
        <p className='mb-6' className="mb-6">
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

export default AboutPage;
