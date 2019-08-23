import React from 'react'

import Layout from '../components/layout'

import '../sass/main.scss'

const IndexPage = () => {
  // setting a reference to the main content for drop in header
  const dropInHeader = React.createRef()

  return (
    <Layout dropInHeader={dropInHeader}>
      <main ref={dropInHeader} style={{ height: '50em', background: '#414141' }}>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
      </main>
    </Layout>
  )
}

export default IndexPage
