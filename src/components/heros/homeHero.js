import React from 'react'

import HeroHeading from './heroHeading'
import HeroArrows from './heroArrows'

const HomeHero = () => (
  <div className="hero">
    <div className="hero__heading-wrapper">
      <HeroHeading title="the bicycle bar" />
    </div>
    <HeroArrows />
  </div>
)

export default HomeHero
