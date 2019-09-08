import React from 'react'

import Layout from '../components/layout'
import HomeHero from '../components/heros/homeHero'
import { Instagram } from '../components/utilities'

import '../sass/main.scss'

const IndexPage = () => {
  // setting a reference to the main content for drop in header
  const dropInHeader = React.createRef()

  return (
    <Layout dropInHeader={dropInHeader}>
      <HomeHero />
      <main ref={dropInHeader} className="landing">
        <div className="container__inner">
          <Instagram />
        </div>
      </main>
    </Layout>
  )
}

export default IndexPage
