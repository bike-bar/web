const titleData = require('./src/meta-data/titles.json')

module.exports = {
  siteMetadata: {
    titles: titleData,
    description: ``,
    author: `Bicycle Bar of Chattanooga`
  },
  plugins: ['gatsby-plugin-react-helmet', 'gatsby-plugin-eslint', 'gatsby-plugin-sass']
}
