module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Patua+One`,
          `source sans pro\:400`, // you can also specify font weights and styles
          `Neucha`,
          `source sans pro\:400`,
          `Source+Serif+Pro`,
          `source sans pro\:400, 600, 700`
        ],
      },
    },
  ],
  pathPrefix: `/tecnochild`
}
