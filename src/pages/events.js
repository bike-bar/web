import React from 'react'

import Layout from '../components/layout'
import HomeHero from '../components/heros/homeHero'
import { FacebookEvents, SectionHeading } from '../components/utilities'

const EventsPage = () => {
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
      <main ref={dropInHeader} className="events">
        <div className="container__inner">
          <section className="facebook">
            <SectionHeading className="facebook__heading section-heading" text="Events" />
          </section>
          <FacebookEvents />
        </div>
      </main>
    </Layout>
  )
}

export default EventsPage
