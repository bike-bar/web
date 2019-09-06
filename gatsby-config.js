require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

console.log(`Using environment config: ${process.env.NODE_ENV}`)

const titleData = require('./src/meta-data/titles.json')

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
      resolve: 'gatsby-source-instagram',
      options: {
        username: 'thebicyclebar',
        access_token: process.env.INSTAGRAM_API_ACCESS_TOKEN,
        instagram_id: process.env.INSTAGRAM_API_ID
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-eslint',
    'gatsby-plugin-sass'
  ]
}
