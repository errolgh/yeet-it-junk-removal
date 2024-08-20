import * as React from 'react';
import Layout from '../components/Layout.jsx';
import FormfacadeEmbed from '@formfacade/embed-react';

const CCOPage = () => {
  return (
    <Layout>
      <div className="mt-8 mb-24 px-4">
        <FormfacadeEmbed
          formFacadeURL="https://formfacade.com/include/110462996932306478338/form/1FAIpQLSeHOHz6oVQ1rM6cCARfBJUcor39_4FF4N1iHQqzFEtM_SW7Tw/classic.js/?div=ff-compose"
          onSubmitForm={() => console.log('Form submitted')}
        />
      </div>
    </Layout>
  );
};

export default CCOPage;

export const Head = () => (
  <>
    <html lang="en" />
    <title>
      Commercial Client Onboarding | Nevermore Cleaning & Junk Removal
    </title>
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
