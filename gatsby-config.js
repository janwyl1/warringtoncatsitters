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
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ["src/styles/bootstrap"],
      },
    },
    {
      resolve: "gatsby-plugin-prettier-eslint",
      options: {
        cwd: process.cwd(), // path to a directory that should be considered as the current working directory
        watch: true, // format/lint on save
        initialScan: true, // if true, will format/lint the whole project on Gatsby startup
        onChangeFullScanLint: false, // if true, on file save always perform full scan lint
        onChangeFullScanFormat: false, // if true, on file save always perform full scan format
        prettierLast: false, // if true, will run Prettier after ESLint
        ignorePatterns: [
          "**/node_modules/**/*",
          "**/.git/**/*",
          "**/dist/**/*",
          ".cache/**/*",
          "public/**/*",
        ],
        prettier: {
          patterns: [
            // the pattern "**/*.{js,jsx,ts,tsx}" is not used because we will rely on `eslint --fix`
            "**/*.{css,scss,less}",
            "**/*.{json,json5}",
            "**/*.{graphql}",
            "**/*.{md,mdx}",
            "**/*.{html}",
            "**/*.{yaml,yml}",
          ],
        },
        eslint: {
          patterns: "**/*.{js,jsx,ts,tsx}",
          customOptions: {
            fix: true,
            cache: true,
          },
        },
      },
    },
  ],
}
