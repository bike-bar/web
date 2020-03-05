require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

const titleData = require('./src/meta-data/titles.json')

const path = require(`path`)

module.exports = {
  siteMetadata: {
    titles: titleData,
    description: ``,
    author: `Bicycle Bar of Chattanooga`
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-force-file-loader',
      options: {
        rules: [
          'fonts' /* Matches Gatsby default rules for fonts */,
          'images' /* Matches Gatsby default rules for images */,
          'media' /* Matches Gatsby default rules for media (video/audio) */
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `assets`)
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-eslint',
    'gatsby-plugin-sass'
  ]
}
