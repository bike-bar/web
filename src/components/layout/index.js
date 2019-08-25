import React from 'react'
import PropTypes from 'prop-types'

import SEO from './seo'
import Footer from './footer/index'
import Header from './header'

const Layout = ({ children, metaData, dropInHeader }) => (
  <>
    <Header dropInHeader={dropInHeader} />
    <SEO metaData={metaData} />
    <main>{children}</main>
    <Footer />
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
