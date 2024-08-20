import React, { useState, useRef } from 'react';
import Layout from '../components/Layout';
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

const phoneRegExp = /^(\+\d{1,4}[\s-]?)?(\(\d{2,3}\)[\s-]?)?[\d\s-]{3,15}$/;

const ContactForm = () => {
  const form = useRef();
  const [buttonText, setButtonText] = useState('Send');
  const [disableSubmit, setDisableSubmit] = useState(false);

  const sendEmail = () => {
    setButtonText('Sending...');
    emailjs
      .sendForm(
        process.env.SERVICE_ID,
        process.env.TEMPLATE_ID,
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
    }),
  });

  return (
    <Layout>
      <section
        id="contact"
        className="flex mb-20 md:mt-6 min-h-full md:mb-24 justify-center items-center"
      >
        <div className="flex flex-col space-y-6 w-full max-w-5xl p-8 md:flex-row md:space-x-6 md:space-y-0">
          <div className="relative flex flex-col justify-between space-y-8 md:p-12 lg:p-6">
            <div>
              <h1 id="contact"> Contact Us</h1>
              <p className="pt-4">
                Ready to experience Nevermore? Schedule your hassle-free
                services today. Let us partner with you to create cleaner, more
                inviting environments for your business or home.
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
                {/* Submission Elements */}
                <button
                  disabled={disableSubmit}
                  type="submit"
                  className="mt-4 py-4 px-8 text-xl font-bold rounded-md lg:py-4 focus:outline-none shadow-xl bg-indigo-600 text-gray-100 hover:bg-indigo-700 hover:text-slate-800 inline-block w-full md:w-auto"
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

export default ContactForm;

export const Head = () => (
  <>
    <html lang="en" />
    <title>Contact Us | Nevermore Cleaning & Junk Removal</title>
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
