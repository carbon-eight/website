require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const {
  NODE_ENV,
  IS_STAGING,
  PRISMIC_REPO_NAME,
  PRISMIC_API_KEY,
  GOOGLE_ANALYTICS_ID,
  STRIPE_API_KEY,
  STRIPE_SECRET_KEY,
  STRIPE_ONCE_OFF_PROD_ID,
  STRIPE_MONTHLY_PROD_ID,
  STRIPE_VARIABLE_SKU,
  MAILCHIMP_ENDPOINT,
} = process.env;

const prismicHtmlSerializer = require('./src/gatsby/htmlSerializer');

const website = require('./config/website');

const pathPrefix = website.pathPrefix === '/' ? '' : website.pathPrefix;

// Robots txt warning on build
if (IS_STAGING && NODE_ENV !== 'development') {
  console.log('\x1b[41m%s\x1b[0m', 'Blocking search engines, change IS_STAGING env variable to prevent this');
}
if (!IS_STAGING && NODE_ENV !== 'development') {
  console.log('\x1b[42m%s\x1b[0m', 'Visible to search engines, change IS_STAGING env variable to prevent this');
}

module.exports = {
  /* General Information */
  pathPrefix: website.pathPrefix,
  siteMetadata: {
    siteUrl: website.url + pathPrefix, // For gatsby-plugin-sitemap
    pathPrefix,
    title: website.title,
    titleAlt: website.titleAlt,
    description: website.description,
    banner: website.logo,
    headline: website.headline,
    siteLanguage: website.siteLanguage,
    ogLanguage: website.ogLanguage,
    author: website.author,
    twitter: website.twitter,
    facebook: website.facebook,
    stripeApiKey: STRIPE_API_KEY,
    stripeOnceOffProdKey: STRIPE_ONCE_OFF_PROD_ID,
    stripeMonthlyProdKey: STRIPE_MONTHLY_PROD_ID,
    stripeVariableSku: STRIPE_VARIABLE_SKU,
  },
  /* Plugins */
  plugins: [
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: ['/thank-you/'],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        sitemap: '/sitemap.xml',
        policy: IS_STAGING ? (
          [{ userAgent: '*', disallow: '/' }]
        ) : (
          [{ userAgent: '*', allow: '/', disallow: ['/thank-you/'] }]
        ),
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: website.url,
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        data: '@import "resources.scss";',
        includePaths: [
          'src/sass/base',
        ],
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: GOOGLE_ANALYTICS_ID,
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: MAILCHIMP_ENDPOINT,
      },
    },
    'gatsby-plugin-stripe',
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: PRISMIC_REPO_NAME,
        accessToken: PRISMIC_API_KEY,
        // Get the correct URLs in blog posts
        linkResolver: () => post => `/${post.uid}`,
        // PrismJS highlighting for labels and slices
        htmlSerializer: () => prismicHtmlSerializer,
      },
    },
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ['Sku', 'Plan'],
        secretKey: STRIPE_SECRET_KEY,
        downloadFiles: true,
      },
    },
    'gatsby-plugin-lodash',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: GOOGLE_ANALYTICS_ID,
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: website.title,
        short_name: website.titleAlt,
        description: website.description,
        start_url: pathPrefix,
        background_color: website.backgroundColor,
        theme_color: website.themeColor,
        display: 'standalone',
        icon: website.favicon,
      },
    },
    // Must be placed at the end
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
  ],
};
