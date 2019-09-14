import React from 'react'
import PropTypes from 'prop-types'

import SEO from './seo'
import Footer from './footer/index'
import Header from './header'

import '../../sass/main.scss'

const Layout = ({ children, metaData, dropInHeader }) => (
  <div className="layout">
    <Header dropInHeader={dropInHeader} />
    <SEO metaData={metaData} />
    {children}
    <Footer />
  </div>
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
