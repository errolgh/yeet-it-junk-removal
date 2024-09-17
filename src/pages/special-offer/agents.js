import React, { useState, useRef } from 'react';
import Layout from '../../components/Layout';
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoCall,
  IoMailSharp,
  IoLocationSharp,
} from 'react-icons/io5';
import emailjs from '@emailjs/browser';
import * as yup from 'yup';
import { useFormik } from 'formik';

/*


Match Keywords to campaign

Use GA4 Analytics

REALTORREADY15

emailjs google analytics tracking




*/

const phoneRegExp = /^(\+\d{1,4}[\s-]?)?(\(\d{2,3}\)[\s-]?)?[\d\s-]{3,15}$/;

const LandingPage = () => {
  const form = useRef();
  const [buttonText, setButtonText] = useState('Send');
  const [disableSubmit, setDisableSubmit] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const sendEmail = () => {
    setButtonText('Sending...');
    emailjs
      .sendForm(
        process.env.OFFER_SERVICE_ID,
        process.env.OFFER_TEMPLATE_ID,
        form.current,
        process.env.PUBLIC_KEY
      )
      .then(
        () => {
          console.log('SUCCESS!');
          formik.handleReset();
          setButtonText('Sent!');
          setDisableSubmit(true);
        },
        (error) => {
          console.log('FAILED...', error);
          setButtonText('Error :(');
          setDisableSubmit(false);
        }
      );
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      business: '',
      email: '',
      phone: '',
      message: '',
    },
    onSubmit: sendEmail,
    validationSchema: yup.object({
      name: yup
        .string()
        .max(40, 'Name must be 40 characters or less.')
        .required('Your name is required.'),
      business: yup
        .string()
        .max(60, 'Business Name must be 60 characters or less.'),
      email: yup
        .string()
        .email()
        .max(60, 'Your email must be 60 characters or less.')
        .required('Your email address is required.'),
      phone: yup
        .string()
        .matches(phoneRegExp, 'Phone number is not valid')
        .required('Phone number is required'),
      message: yup
        .string()
        .max(700, 'Your message must be 700 characters or less.'),
      termsAccepted: yup
        .boolean()
        .oneOf([true], 'You must accept the Terms and Conditions.'),
    }),
  });

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    formik.setFieldValue('termsAccepted', event.target.checked);
  };

  return (
    <Layout>
      <div className="min-h-screen py-10 font-poppins">
        {/* Header Section */}
        <header className="text-center text-white py-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight max-w-6xl mx-auto">
            Make Your Properties Show-Ready with Nevermore Cleaning & Junk
            Removal
          </h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto font-semibold">
            Maximize Your Listings' Appeal – 15% Off Cleaning & Junk Removal!
          </p>
        </header>

        {/* Services Section */}
        <section className="container mx-auto px-6 py-12 md:py-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
              Why Choose Nevermore Cleaning?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 text-center">
                Comprehensive Cleaning Services
              </h3>
              <p className="text-gray-700">
                From move-in/move-out cleanings to exterior care and junk
                removal, we offer customizable cleaning solutions tailored to
                your property’s needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 text-center">
                Local and Trusted
              </h3>
              <p className="text-gray-700">
                Based in Baltimore, we’re fully insured for up to $1 million,
                giving you peace of mind while we get the job done.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 text-center">
                Exclusive Realtor Discount
              </h3>
              <p className="text-gray-700">
                Enjoy 15% off when you refer a client using the code:{' '}
                <strong className="text-indigo-600">REALTORREADY15</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Services List Section */}
        <section className="bg-gray-900 py-12 pb-16 mb-8">
          <div className="container mx-auto px-6 ">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-200">
                Services We Provide
              </h2>
            </div>

            <ul className="list-disc list-inside text-lg text-gray-200 max-w-2xl mx-auto space-y-4">
              <li>Free estimates and walkthroughs for commercial spaces.</li>
              <li>
                Deep cleaning and exterior care customized for your specific
                needs.
              </li>
              <li>Quick and reliable junk and bulk trash removal.</li>
              <li>
                Lawn care and exterior clean-up services to boost curb appeal.
              </li>
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        {/* <section className="bg-gray-900 text-white py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white">Ready to Get Started?</h2>
            <p className="mt-4 text-lg text-white">
              Contact us today to schedule your free estimate and walkthrough,
              and let’s discuss how we can make your properties stand out.
            </p>
            <a
              href="/contact"
              className="mt-8 inline-block bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold py-3 px-8 rounded-lg transition duration-300"
            >
              Get Your Free Estimate
            </a>
          </div>
        </section> */}
      </div>
      <section
        id="contact"
        className="flex mb-20 md:mt-6 min-h-full md:mb-24 justify-center items-center"
      >
        <div className="flex flex-col space-y-6 w-full max-w-5xl p-8 md:flex-row md:space-x-6 md:space-y-0">
          <div className="relative flex flex-col justify-between space-y-8 md:p-12 lg:p-6">
            <div>
              <h1 id="contact">Ready to Get Started?</h1>
              <p className="pt-4"><i><strong>
                Contact us today to schedule your free estimate and walkthrough,
                and let’s discuss how we can make your properties stand out.</strong></i>
              </p>
              <p className="pt-4">
                Filling out this form will notify someone from our team. Let us
                know what your needs are so we can provide what we do best!
              </p>
            </div>
            <div className="flex flex-col space-y-6">
              <a href="sms:+14438838595">
                <div className="inline-flex space-x-2 items-center">
                  <IoCall className="text-junkGreen text-xl md:text-3xl" />
                  <span className="text-gray-600">(443)883-8595</span>
                </div>
              </a>
              <a href="mailto:LetsTalkNevermore@gmail.com">
                <div className="inline-flex space-x-2 items-center">
                  <IoMailSharp className="text-junkGreen text-xl md:text-3xl" />
                  <span className="text-gray-600">
                    LetsTalkNevermore@gmail.com
                  </span>
                </div>
              </a>
              <div className="inline-flex space-x-2 items-center">
                <IoLocationSharp className="text-junkGreen text-xl md:text-3xl" />
                <span className="text-gray-600">Baltimore, MD</span>
              </div>
            </div>
            <div className="flex text-lg space-x-4 text-junkGreen">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/people/Nevermore-Cleaning-Junk-Removal/61560563170433/"
                aria-label="Visit our Facebook page"
              >
                <IoLogoFacebook className="text-xl md:text-3xl" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/letstalknevermore"
                aria-label="Visit our Instagram page"
              >
                <IoLogoInstagram className="text-xl md:text-3xl" />
              </a>
            </div>
          </div>
          {/* FORM */}
          <div>
            <div className="relative bg-white shadow-lg rounded-xl p-8 text-gray-600 h-full">
              <form
                className="flex flex-col space-y-2 text-sm md:w-80"
                onSubmit={formik.handleSubmit}
                ref={form}
              >
                {/* name input */}
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Your first & last name"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-1 focus:ring-efferBlue"
                  ></input>
                  <label className="pl-3 text-red-500">
                    {formik.errors.name &&
                      formik.touched.name &&
                      formik.errors.name}
                  </label>
                </div>
                {/* business input */}
                <div>
                  <input
                    type="text"
                    name="business"
                    value={formik.values.business}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Your business (optional)"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-1 focus:ring-efferBlue"
                  ></input>
                  <label className="pl-3 text-red-500">
                    {formik.errors.business &&
                      formik.touched.business &&
                      formik.errors.business}
                  </label>
                </div>
                {/* email input */}
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Email address"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-1 focus:ring-efferBlue"
                  ></input>
                  <label className="pl-3 text-red-500">
                    {formik.errors.email &&
                      formik.touched.email &&
                      formik.errors.email}
                  </label>
                </div>
                {/* phone input */}
                <div>
                  <input
                    type="text"
                    name="phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Phone number"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-1 focus:ring-efferBlue"
                  ></input>
                  <label className="pl-3 text-red-500">
                    {formik.errors.phone &&
                      formik.touched.phone &&
                      formik.errors.phone}
                  </label>
                </div>
                {/* message input */}
                <div>
                  <textarea
                    rows="4"
                    name="message"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Type your message here."
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-1 focus:ring-efferBlue"
                  ></textarea>
                  <label className="text-red-500">
                    {formik.errors.message &&
                      formik.touched.message &&
                      formik.errors.message}
                  </label>
                  <div className="mt-1 text-right">
                    <span
                      className={`text-xs ${
                        formik.values.message.length > 700
                          ? 'text-red-500'
                          : 'text-gray-400'
                      }`}
                    >
                      {`${formik.values.message.length}/700`}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 mt-4 pb-5">
                  <input
                    type="checkbox"
                    id="termsAccepted"
                    name="termsAccepted"
                    checked={formik.values.termsAccepted}
                    onChange={handleCheckboxChange}
                    onBlur={formik.handleBlur}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded cursor-pointer"
                  />
                  <label htmlFor="termsAccepted" className="text-gray-600">
                    I agree to the{' '}
                    <a
                      href="/terms-of-service"
                      target="_blank"
                      rel="noreferrer"
                      className="underline text-indigo-600 hover:no-underline"
                    >
                      Terms of Service
                    </a>
                  </label>
                </div>
                {/* Submission Elements */}
                <button
                  disabled={!isChecked || disableSubmit}
                  type="submit"
                  className={`mt-4 py-4 px-8 text-xl font-bold rounded-md lg:py-4 focus:outline-none shadow-xl ${
                    !isChecked || disableSubmit
                      ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                      : 'bg-indigo-600 text-gray-100 hover:bg-indigo-700 hover:text-slate-800'
                  } inline-block w-full md:w-auto`}
                >
                  {buttonText}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LandingPage;

export const Head = () => (
  <>
    <html lang="en" />
    <title>Landing Page | Nevermore Cleaning & Junk Removal</title>
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
