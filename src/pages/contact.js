import React, { useState, useRef } from 'react';
import { IoLogoFacebook } from 'react-icons/io5';
// import { IoLogoTwitter } from 'react-icons/io5'
// import { IoLogoLinkedin } from 'react-icons/io5'
import { IoLogoInstagram } from 'react-icons/io5';
import { IoCall } from 'react-icons/io5';
import { IoMailSharp } from 'react-icons/io5';
import { IoLocationSharp } from 'react-icons/io5';
import { Link } from 'gatsby';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Layout from '../components/Layout';
import Button from '../components/Button';
import emailjs from '@emailjs/browser';

// @TODO: once netlify is connected, check gatsby/netlify docs for anything else

// const onSubmit = (data) => netlify.handleSubmit(null, data)

// const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup.object().shape({
  name: yup.string().required('Your Name is required'),
  business: yup.string(),
  email: yup.string().email().required('Email Address is required'),
  number: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
  message: yup.string(),
});

const ContactForm = () => {
  const form = useRef();
  const [buttonText, setButtonText] = useState('Send');

  const sendEmail = (e) => {
    e.preventDefault();
    console.log('form.current: ', form.current);

    emailjs
      .sendForm(
        `${process.env.SERVICE_ID}`,
        `${process.env.TEMPLATE_ID}`,
        form.current,
        {
          publicKey: `${process.env.PUBLIC_KEY}`,
        }
      )
      .then(
        () => {
          console.log('form.current:', form.current);
          console.log('SUCCESS!');
          setButtonText('Sent!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
    e.target.reset();
  };

  const {
    register,
    // handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // handleSubmit & netlify-forms both provide a "data" object
  // const onSubmit = (data) => {
  //   console.log('first', data);
  // };
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
              <a href="sms:+19084721977">
                <div className="inline-flex space-x-2 items-center">
                  <IoCall className="text-junkGreen text-xl md:text-3xl" />
                  <span className="text-gray-600">(908) 472-1977</span>
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
              <Link
                target="_blank"
                rel="noreferrer"
                to="https://www.facebook.com/people/Nevermore-Cleaning-Junk-Removal/61560563170433/"
              >
                <IoLogoFacebook className="text-xl md:text-3xl" />
              </Link>
              {/* <Link to="/">
              <IoLogoTwitter />
            </Link>
            <Link to="/">
              <IoLogoLinkedin />
            </Link> */}
              <Link
                target="_blank"
                rel="noreferrer"
                to="https://www.instagram.com/letstalknevermore"
              >
                <IoLogoInstagram className="text-xl md:text-3xl" />
              </Link>
            </div>
          </div>
          <div>
            <div className="relative bg-white shadow-lg rounded-xl p-8 text-gray-600 h-full">
              <form
                ref={form}
                className="flex flex-col space-y-2 text-sm md:w-80"
                onSubmit={sendEmail}
                // onSubmitt="submit"
                // name="contact v1"
                // method="POST"
                // netlify... we're using emailJS right now
              >
                {/* name input */}
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-1 focus:ring-efferBlue"
                    {...register('name')}
                  ></input>
                  <span className="pl-3 text-red-500">
                    {errors.name?.message}
                  </span>
                </div>
                {/* business input */}
                <div>
                  <input
                    type="text"
                    name="business"
                    placeholder="Your Business (Optional)"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-1 focus:ring-efferBlue"
                    {...register('business')}
                  ></input>
                  <span className="pl-3 text-red-500">
                    {errors.business?.message}
                  </span>
                </div>
                {/* email input */}
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-1 focus:ring-efferBlue"
                    {...register('email')}
                  ></input>
                  <span className="pl-3 text-red-500">
                    {errors.email?.message}
                  </span>
                </div>
                {/* phone input */}
                <div>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-1 focus:ring-efferBlue"
                    {...register('phone')}
                  ></input>
                  <span className="pl-3 text-red-500">
                    {errors.phone?.message}
                  </span>
                </div>
                {/* message input */}
                <div>
                  <textarea
                    rows="4"
                    name="message"
                    placeholder="Type your message here."
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-1 focus:ring-efferBlue"
                    {...register('message')}
                  ></textarea>
                  <span className="pl-3 text-red-500">
                    {errors.message?.message}
                  </span>
                </div>

                {/* Submission Elements */}
                <Button
                  order="primary"
                  type="submit"
                  className="inline-block w-full md:w-auto self-end bg-brandPrimary font-bold text-white rounded-lg px-6 py-2 uppercase"
                >
                  {buttonText}
                </Button>
                {/* as per netlify forms: */}
                <input
                  type="submit"
                  value="Send"
                  className="hidden"
                  name="from_contact"
                />
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
