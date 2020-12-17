/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-preact`,  
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-minify`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ["src/styles/bootstrap"],
      },
    },
  ],
}
