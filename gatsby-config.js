const titleData = require('./src/meta-data/titles.json')

module.exports = {
  siteMetadata: {
    titles: titleData,
    description: ``,
    author: `Bicycle Bar of Chattanooga`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-force-file-loader`,
      options: {
        rules: [
          'fonts' /* Matches Gatsby default rules for fonts */,
          'images' /* Matches Gatsby default rules for images */,
          'media' /* Matches Gatsby default rules for media (video/audio) */
        ]
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-eslint',
    'gatsby-plugin-sass'
  ]
}
