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
    // {
    //   resolve: `gatsby-plugin-gdpr-cookies`,
    //   options: {
    //     googleAnalytics: {
    //       trackingId: 'G-KKB7VPM5ZD', // leave empty if you want to disable the tracker
    //       cookieName: 'gatsby-gdpr-google-analytics', // default
    //       anonymize: true, // default
    //       allowAdFeatures: false, // default
    //     },
    //     // googleTagManager: {
    //     //   trackingId: 'YOUR_GOOGLE_TAG_MANAGER_TRACKING_ID', // leave empty if you want to disable the tracker
    //     //   cookieName: 'gatsby-gdpr-google-tagmanager', // default
    //     //   dataLayerName: 'dataLayer', // default
    //     // },
    //     // facebookPixel: {
    //     //   pixelId: 'YOUR_FACEBOOK_PIXEL_ID', // leave empty if you want to disable the tracker
    //     //   cookieName: 'gatsby-gdpr-facebook-pixel', // default
    //     // },
    //     // tikTokPixel: {
    //     //   pixelId: 'YOUR_TIKTOK_PIXEL_ID', // leave empty if you want to disable the tracker
    //     //   cookieName: 'gatsby-gdpr-tiktok-pixel', // default
    //     // },
    //     // hotjar: {
    //     //   hjid: 'YOUR_HOTJAR_ID',
    //     //   hjsv: 'YOUR_HOTJAR_SNIPPET_VERSION',
    //     //   cookieName: 'gatsby-gdpr-hotjar', // default
    //     // },
    //     // linkedin: {
    //     //   trackingId: 'YOUR_LINKEDIN_TRACKING_ID', // leave empty if you want to disable the tracker
    //     //   cookieName: 'gatsby-gdpr-linked-in', // default
    //     // },
    //     // defines the environments where the tracking should be available  - default is ["production"]
    //     environments: ['production', 'development'],
    //   },
    // },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          'G-KKB7VPM5ZD', // Google Analytics / GA
          // 'AW-CONVERSION_ID', // Google Ads / Adwords / AW
          // 'DC-FLOODIGHT_ID', // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        // gtagConfig: {
        //   optimize_id: 'OPT_CONTAINER_ID',
        //   anonymize_ip: true,
        //   cookie_expires: 0,
        // },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          // respectDNT: true,
          // // Avoids sending pageview hits from custom paths
          // exclude: ['/preview/**', '/do-not-track/me/too/'],
          // Defaults to https://www.googletagmanager.com
          // origin: 'YOUR_SELF_HOSTED_ORIGIN',
          // Delays processing pageview events on route update (in milliseconds)
          delayOnRouteUpdate: 0,
        },
      },
    },
  ],
};
