require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  // pathPrefix: "/cpal-site",
  siteMetadata: {
    title: `Community Resource Explorer`,
    description: `All Dallas neighborhoods should have what they need to thrive.`,
    author: `Child Poverty Action Lab`,
    mapboxApiKey: `${process.env.GATSBY_MAPBOX_API_TOKEN}`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/map/schools.json`,
        typeName: `Schools`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-react-bootstrap`,
        short_name: `react-bootstrap`,
        start_url: `/`,
        background_color: `#20232a`,
        theme_color: `#20232a`,
        display: `minimal-ui`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
