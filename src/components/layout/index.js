import React from 'react'
import PropTypes from 'prop-types'

import SEO from './seo'

const Layout = ({ children, metaData }) => (
  <>
    <SEO metaData={metaData} />
    <main>{children}</main>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  metaData: PropTypes.string
}

Layout.defaultProps = {
  metaData: 'home'
}

export default Layout
