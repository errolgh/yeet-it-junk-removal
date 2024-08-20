import React from 'react';
import { StaticImage } from "gatsby-plugin-image"

export default function OurPartners() {
  return (
    <section id="partners">
      <div className="container max-w-7xl mx-auto mb-24">
        <h2 className="text-2xl md:text-4xl font-sans text-center mb-8">
          Our Partners
        </h2>

        {/* image container */}

        <div className="flex md:flex-row flex-col md:justify-around items-center w-full">
          {/* <div className="max-w-[330px]">
            <StaticImage
              src={NevermoreLogoOrange}
              alt="Nevermore Property Maintenance"
            />
          </div> */}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.cantoncleaningco.com/"
          >
            <div className="max-w-[200px] mb-20 md:mb-0">
              <StaticImage loadin='lazy' src='../images/canton-cleaning-logo.png' alt="Canton Cleaning" />
            </div>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.baymgmtgroup.com/"
          >
            <div className="max-w-[250px]">
              <StaticImage loading='lazy' src='../images/bmg-logo.webp' alt="Bay Property Mangement Group" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
