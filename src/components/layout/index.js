import React from 'react'
import PropTypes from 'prop-types'

import SEO from './seo'
import Header from './header'

const Layout = ({ children, metaData, dropInHeader }) => (
  <>
    <Header dropInHeader={dropInHeader} />
    <SEO metaData={metaData} />
    {children}
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  metaData: PropTypes.string,
  dropInHeader: PropTypes.object.isRequired
}

Layout.defaultProps = {
  metaData: 'home'
}

export default Layout
