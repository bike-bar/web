import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

const SEO = ({ metaData }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            titles {
              home
            }
          }
        }
      }
    `}
    /* eslint-disable arrow-body-style */
    render={data => {
      return (
        <Helmet
          title={data.site.siteMetadata.titles[metaData]}
          meta={[
            {
              name: 'description'
              // content: data.site.siteMetadata.descriptions[metaData]
            }
          ]}
        >
          <html lang="en" />
          <script src="https://apps.elfsight.com/p/platform.js" defer />
        </Helmet>
      )
    }}
  />
)

SEO.propTypes = {
  metaData: PropTypes.string.isRequired
}

export default SEO
