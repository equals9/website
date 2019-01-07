module.exports = {
  siteMetadata: {
    title: 'Daniel Wirtz – Digital Maker',
  },
  plugins: ['gatsby-plugin-react-helmet'],
  plugins: [`gatsby-plugin-postcss`],
  plugins: [`gatsby-plugin-netlify`],
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`roboto`, `spectral`],
      },
    },
  ],
}
