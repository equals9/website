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
        path: `./src/content/`
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
        limit: 10
      }
    },
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-source-google-photos`,
      options: {
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        albums: ["Webseite"]
        // if you only have one album pass it as an array
      }
    },
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: "GooglePhoto",
        imagePath: "baseUrl"
      }
    },
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
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typescript`
  ]
};
