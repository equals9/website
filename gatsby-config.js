module.exports = {
  siteMetadata: {
    title: 'Gatsby Tachyons',
  },
  plugins: ['gatsby-plugin-react-helmet'],
  plugins: [`gatsby-plugin-postcss`],
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`roboto`, `spectral`],
      },
    },
    [`gatsby-plugin-netlify`],
  ],
}
