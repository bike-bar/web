import React from 'react'

import Layout from '../components/layout'
import HomeHero from '../components/heros/homeHero'
import { Instagram, SectionHeading } from '../components/utilities'

import '../sass/main.scss'

const IndexPage = () => {
  // setting a reference to the main content for drop in header
  const dropInHeader = React.createRef()

  /* eslint-disable consistent-return */
  const scrollToRef = () => {
    if (dropInHeader && dropInHeader.current) {
      return dropInHeader.current.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'start'
      })
    }
  }

  return (
    <Layout dropInHeader={dropInHeader}>
      <HomeHero scrollToRef={scrollToRef} />
      <main ref={dropInHeader} className="landing">
        <div className="container__inner">
          <section className="instagram">
            <SectionHeading className="instagram__heading section-heading" text="Our Shenanigans" />
          </section>
          <Instagram />
        </div>
      </main>
    </Layout>
  )
}

export default IndexPage
