/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Jonathan Portfolio',
    description: 'This is Jonathan Portfolio Site',
    linkedIn:'https://www.linkedin.com/in/jonathan-nilsson-lahti-a72356110',
  
    siteUrl: 'https://jonathan-lahti.netlify.app',
  },
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${ __dirname }/src/assets/`,
      },
    },
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: 'http://localhost:1337',
        queryLimit: 1000,
        contentTypes: [ 'jobs' , 'projects', ],
        singleTypes:[ 'about' ],
      },
    },
  ],
};
