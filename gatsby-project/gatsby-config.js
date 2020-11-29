module.exports = {
  siteMetadata: {
    title: `Silly site - All the things I miss`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`, 
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: 'h632r4yx',
        dataset:'production',
        overlayDrafts:true,
        watchMode: true,
        token: `sk2Erp1q82565ovJalDwmsYRPR8b25m04kJbkpoSfwMl1BMk0joLLDt1bYQsTLoFhe6ZWxYqNklcyslaVOBwk6bR9Id3FxNwcktxw32neqLUjBfe1CyEVprL1gYEguCEDtQLqtVwcD9RCCLakKpbL8pyoLlx3x5Nr2G31cLXh8GaY09fC0XZ`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      }, 
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
