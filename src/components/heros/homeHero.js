import React from 'react'
import PropTypes from 'prop-types'

import HeroHeading from './heroHeading'
import HeroArrows from './heroArrows'

const HomeHero = ({ scrollToRef }) => (
  <div className="hero">
    <div className="hero__heading-wrapper">
      <HeroHeading title="the bicycle bar" />
    </div>
    <HeroArrows scrollToRef={scrollToRef} />
  </div>
)

HomeHero.propTypes = {
  scrollToRef: PropTypes.func.isRequired
}

export default HomeHero
