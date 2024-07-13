import React from 'react';
import CantonCleaningLogo from '../images/canton-cleaning-logo.png';
import NevermoreLogoOrange from '../images/nevermorelogo-orange.png';

export default function OurPartners() {
  return (
    <section>
      <div className="container max-w-7xl mx-auto mb-24">
        <h2 className="text-2xl md:text-4xl font-sans text-center mb-8">
          Our Partners
        </h2>

        {/* image container */}

        <div className="flex md:flex-row flex-col justify-around items-center w-full">
          {/* <div className="max-w-[330px]">
            <img
              src={NevermoreLogoOrange}
              alt="Nevermore Property Maintenance"
            />
          </div> */}
          <a href="https://www.cantoncleaningco.com/">
            <div className="max-w-[250px]">
              <img src={CantonCleaningLogo} alt="Canton Cleaning" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
