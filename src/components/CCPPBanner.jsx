import React from 'react';
import { useLocation } from '@reach/router';
// import { initializeAndTrack } from 'gatsby-plugin-gdpr-cookies';

function isBrowser() {
  return typeof window !== 'undefined';
}

function getValue(key, defaultValue) {
  return isBrowser() && window.localStorage.getItem(key)
    ? JSON.parse(window.localStorage.getItem(key))
    : defaultValue;
}

function setValue(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value));
}

function useStickyState(defaultValue, key) {
  const [value, setter] = React.useState(() => {
    return getValue(key, defaultValue);
  });

  React.useEffect(() => {
    setValue(key, value);
  }, [key, value]);

  return [value, setter];
}

const CCPPBanner = () => {
  const location = useLocation();
  // if (isBrowser()) {
  //   initializeAndTrack(location);
  // }

  const [bannerHidden, setBannerHidden] = useStickyState(
    false,
    'consentCookieHidden'
  );

  const EnableAnalytics = () => {
    document.cookie = 'gatsby-gdpr-google-analytics=true';
    setBannerHidden(true);
  };

  const DeclineAnalytics = () => {
    document.cookie = 'gatsby-gdpr-google-analytics=false';
    setBannerHidden(true);
  };

  const CloseBanner = () => {
    setBannerHidden(true);
  };

  return (
    <>
      {!bannerHidden && (
        <>
          <div
            id="banner"
            tabindex="-1"
            className="relative flex flex-col z-50 gap-8 justify-between items-start py-3 px-4 w-full border-gray-200 sm:items-center bg-gray-700 shadow-xl"
          >
            <button
              data-collapse-toggle="banner"
              type="button"
              className="absolute flex ml-auto top-px-10 right-2"
              onClick={CloseBanner}
            >
              <svg
                className="w-5 h-5"
                fill="#f3f4f6"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <div className="flex">
              <p className="text-gray-100 px-8 pt-4">
                This website uses cookies to improve your user experience. By
                using our website, you consent to all our terms of use in
                accordance with our{' '}
                <a
                  className="font-medium underline hover:no-underline"
                  href="/privacy-policy"
                  target="_blank"
                  rel="noreferrer"
                >
                  Privacy Policy
                </a>
                .{' '}
              </p>

            </div>
            <div className="flex gap-5 px-8 mx-auto">
              <button
                className="text-sm mt-4 py-2 px-8 font-bold rounded-md focus:outline-none shadow-xl bg-transparent border border-indigo-700 text-gray-100 hover:bg-indigo-700"
                onClick={EnableAnalytics}
              >
                Accept
              </button>
              <button
                className="text-sm mt-4 py-2 px-8 font-bold rounded-md focus:outline-none shadow-xl bg-transparent border border-indigo-700 text-gray-100 hover:bg-indigo-700"
                onClick={DeclineAnalytics}
              >
                Decline
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CCPPBanner;
