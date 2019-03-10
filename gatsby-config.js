require("dotenv-safe").config();

module.exports = {
  siteMetadata: {
    title: `Daniel Wirtz`,
    siteUrl: `https://www.danielwirtz.com`,
    description: `Designer & Developer`,
    author: `@wirtzdan`
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/content/`
      }
    },
    {
      resolve: `gatsby-source-trakt-tmdb`,
      options: {
        limit: 6,
        traktApiKey: process.env.TRAKT_API_KEY,
        username: "wirtzdan",
        tmdbApiKey: process.env.TMDB_API_KEY
      }
    },
    {
      resolve: `gatsby-source-google-photos`,
      options: {
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        albums: ["Webseite2"]
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
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: "GooglePhoto",
        imagePath: "baseUrl"
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-yaml`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: ""
      }
    },
    `gatsby-plugin-offline`
  ]
};
