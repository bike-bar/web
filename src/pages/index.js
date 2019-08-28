import React from 'react'

import Layout from '../components/layout'
import HomeHero from '../components/heros/homeHero'

import '../sass/main.scss'

const IndexPage = () => {
  // setting a reference to the main content for drop in header
  const dropInHeader = React.createRef()

  return (
    <Layout dropInHeader={dropInHeader}>
      <HomeHero />
      <main
        ref={dropInHeader}
        style={{ height: '50em', background: '#414141', marginTop: '-.5em' }}
      >
        <div className="container__inner">hello</div>
      </main>
    </Layout>
  )
}

export default IndexPage
