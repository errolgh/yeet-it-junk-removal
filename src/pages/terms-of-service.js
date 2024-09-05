import React from 'react';
import Layout from '../components/Layout';

const TermsOfService = () => {
  return (
    <Layout>
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Terms of Service
          </h1>

          <p className="mb-4 text-gray-600">
            Welcome to Nevermore Cleaning & Junk Removal ("Company", "we", "us",
            "our"). By using our website, services, and products, you agree to
            comply with and be bound by the following terms and conditions
            ("Terms of Service").
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            1. Services
          </h2>
          <p className="mb-4 text-gray-600">
            Nevermore Cleaning & Junk Removal provides professional cleaning,
            junk removal, and related services for both residential and
            commercial clients ("Services"). These Services are provided based
            on the service agreement outlined between you ("Client") and us at
            the time of booking or contract signing.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            2. Booking and Payment
          </h2>
          <p className="mb-4 text-gray-600">
            Clients can book Services through our website or by contacting us
            directly. All prices for Services will be provided during the
            booking process. Payment must be made in full upon completion of the
            service unless otherwise agreed. We accept payments via major credit
            cards, bank transfers, and other payment methods specified on our
            website.
          </p>
          <p className="mb-4 text-gray-600">
            If a booking is canceled less than 24 hours prior to the scheduled
            service, we reserve the right to charge a cancellation fee.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            3. Client Responsibilities
          </h2>
          <p className="mb-4 text-gray-600">
            The Client is responsible for providing accurate information when
            booking Services, including any specific instructions or details
            about the job. It is also the Client’s responsibility to ensure that
            our team has access to the property and that all areas to be
            serviced are clear and ready for work.
          </p>
          <p className="mb-4 text-gray-600">
            We are not responsible for any delays or inability to complete the
            service due to the Client's failure to provide necessary access or
            clear instructions.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            4. Limitation of Liability
          </h2>
          <p className="mb-4 text-gray-600">
            Nevermore Cleaning & Junk Removal will not be held liable for any
            indirect, incidental, or consequential damages that arise from the
            use of our Services. We will make reasonable efforts to perform the
            Services as described, but we do not guarantee any specific results
            or outcomes.
          </p>
          <p className="mb-4 text-gray-600">
            Any claims for damages must be reported within 24 hours of service
            completion. In the event that damage is caused to your property as a
            direct result of our Services, our liability will be limited to the
            cost of the service provided or the cost of repair, whichever is
            lower.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            5. Termination
          </h2>
          <p className="mb-4 text-gray-600">
            We reserve the right to terminate or suspend your access to our
            Services at any time for any reason, including breach of these
            Terms. If you violate any terms or engage in any fraudulent or
            illegal activities, your service agreement with us will be
            immediately terminated.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            6. Changes to Terms
          </h2>
          <p className="mb-4 text-gray-600">
            We may update or modify these Terms of Service at any time without
            prior notice. It is your responsibility to review these Terms
            periodically to ensure that you are aware of any changes. Continued
            use of our Services after changes have been made constitutes your
            acceptance of the revised Terms.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            7. Governing Law
          </h2>
          <p className="mb-4 text-gray-600">
            These Terms of Service and any agreements between the Client and the
            Company will be governed by and construed in accordance with the
            laws of the state of Maryland, without regard to its conflict of law
            provisions.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Collection and Use of Phone Numbers
          </h2>
          <p className="mb-4 text-gray-600">
            When you provide your phone number through our website or other
            intake forms, you are consenting to receive text message
            communications from Nevermore Cleaning & Junk Removal. These
            communications may include, but are not limited to, service
            reminders, promotional messages, and scheduling confirmations. Your
            phone number will not be shared with third parties without your
            explicit consent.
          </p>
          <p className="mb-4 text-gray-600">
            If you wish to opt out of receiving SMS communications at any time,
            you can reply "STOP" to any text message you receive from us, or
            contact us directly at (443)883-8595 or via email at
            LetsTalkNevermore@gmail.com.
          </p>
          <p className="mb-4 text-gray-600">
            We comply with all applicable laws and carrier guidelines regarding
            SMS communications. Your personal information, including phone
            numbers, will be stored securely and only used for the purposes you
            consented to.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            8. Contact Information
          </h2>
          <p className="mb-4 text-gray-600">
            If you have any questions about these Terms of Service or our
            Services, please contact us at:
          </p>
          <p className="mb-4 text-gray-600">
            Nevermore Cleaning & Junk Removal
            <br />
            Baltimore, MD
            <br />
            Email: LetsTalkNevermore@gmail.com
            <br />
            Phone: (443)883-8595
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default TermsOfService;

export const Head = () => (
  <>
    <title>Terms of Service | Nevermore Cleaning & Junk Removal</title>
    <meta
      name="description"
      content="Terms of Service for Nevermore Cleaning & Junk Removal, outlining the use of our services, booking process, client responsibilities, and more."
    />
  </>
);
