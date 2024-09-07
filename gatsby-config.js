/**
 * @type {import('gatsby').GatsbyConfig}
 */

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `trucking-company`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  flags: {
    DEV_SSR: false,
  },

  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: -40,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images\/.*\.svg/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        icon: `src/images/nevermorelogo-orange.png`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `standalone`,
      },
    },
    {
      resolve: 'gatsby-plugin-env-variables',
      options: {
        allowList: ['SERVICE_ID', 'TEMPLATE_ID', 'PUBLIC_KEY'],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ['G-KKB7VPM5ZD'],
        pluginConfig: {
          head: true,
          delayOnRouteUpdate: 0,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`poppins\:300,400,500,700`, `ubuntu\:400,500,700`],
        display: 'swap',
      },
    },
  ],
};
