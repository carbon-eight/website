module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Carbon8 » Regenerative Agriculture NFP', // Navigation and Site Title
  titleAlt: 'Carbon8', // Title for JSONLD
  description: 'Carbon8 supports farmers to transition to regenerative agriculture by assisting them in rebuilding the carbon (organic matter) in their soil.',
  headline: 'Websites with Character', // Headline for schema.org JSONLD
  url: 'https://www.carbon8.org.au', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  logo: '/logos/logo-1024.png', // Used for SEO
  ogLanguage: 'en_US', // Facebook Language

  // JSONLD / Manifest
  favicon: 'src/favicon.png', // Used for manifest favicon generation
  shortName: 'Carbon8', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Carbon8', // Author for schemaORGJSONLD
  themeColor: '#3D63AE',
  backgroundColor: '#EBEDF2',

  twitter: '@loveyourfarmer', // Twitter Username
  facebook: 'loveyourfarmer', // Facebook Site Name

  skipNavId: 'reach-skip-nav', // ID for the "Skip to content" a11y feature

  // Slugs
  blogSlug: 'blog',
  categorySlug: 'category',
};
