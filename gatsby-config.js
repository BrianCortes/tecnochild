module.exports = {
  siteMetadata: {
    title: 'TecnoChild',
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
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/assets/favicon.png",
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    }
  ],
  pathPrefix: `/tecnochild`
}
