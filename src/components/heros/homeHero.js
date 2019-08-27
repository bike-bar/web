import React from 'react'

import HeroHeading from './heroHeading'
import { HandleBars } from '../icons'

const HomeHero = () => (
  <div className="hero">
    <div className="hero__heading-wrapper">
      <HeroHeading />
    </div>
    <div className="hero__arrow">
      <HandleBars width="100px" height="100px" />
    </div>
    <div className="hero__arrow hero__arrow--2">
      <HandleBars width="100px" height="100px" />
    </div>
    <div className="hero__arrow hero__arrow--3">
      <HandleBars width="100px" height="100px" />
    </div>
  </div>
)

export default HomeHero
