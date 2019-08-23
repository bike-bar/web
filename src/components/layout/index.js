import React from 'react'
import PropTypes from 'prop-types'

import SEO from './seo'
import Footer from './footer/index'

const Layout = ({ children, metaData }) => (
  <>
    <SEO metaData={metaData} />
    <main>{children}</main>
    <Footer />
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
