require("dotenv-safe").config();

module.exports = {
  siteMetadata: {
    title: `Daniel Wirtz`,
    siteUrl: `https://www.danielwirtz.com`,
    description: `Designer & Developer`,
    author: `@wirtzdan`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-trakt-tmdb`,
      options: {
        traktApiKey: process.env.TRAKT_API_KEY,
        username: "wirtzdan",
        tmdbApiKey: process.env.TMDB_API_KEY,
        language: "en-US"
      }
    },
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-source-spotify`,
      options: {
        clientId: process.env.SPOTIFY_CLIENT_ID,
        clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
        refreshToken: process.env.SPOTIFY_REFRESH_TOKEN,

        fetchPlaylists: false,
        fetchRecent: true,
        timeRanges: ["short_term", "medium_term", "long_term"]
      }
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: ""
      }
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typescript`
  ]
};
