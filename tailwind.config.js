/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    // screens: { // defaults
    //   'sm': '640px',
    //   'md': '768px',
    //   'lg': '1024px',
    //   'xl': '1280px',
    //   '2xl': '1536px',
    // },
    extend: {
      colors: {
        brandPrimary: '#ca8a04',
        brandSecondary: '#9f2042',
        brandAccent: '#429ea6',

        efferBlue: '#00315A',
        junkGreen: '#327835',
        darkEfferBlue: '#002c58',
        alabaster: '#F9FAFB',
      },
      maxWidth: {
        '8xl': '1440px',
      },
      fontFamily: {
        ubuntu: ['Ubuntu, sans-serif'],
        poppins: ['Poppins, sans-serif'],
      },
    },
  },
  plugins: [],
};
