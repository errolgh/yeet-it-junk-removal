import React from 'react';

export default function GratefulPlug() {
  return (
    <div className="bg-brandPrimary pl-2 pb-2 text-center text-sm">
      <a
        href="https://www.gratefulwebdesigns.com/"
        rel="noreferrer"
        target="_blank"
        className="text-black no-underline sm:text-base transition-colors duration-300 ease-in-out hover:underline hover:font-bold"
      >
        Powered by &copy; Grateful Web Designs
      </a>
    </div>
  );
}
