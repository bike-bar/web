import React from 'react'

import { HandleBars } from '../icons'

const HeroArrows = () => (
  <div className="hero__arrows">
    <div className="hero__arrows-wrapper">
      <HandleBars width="100px" height="100px" />
    </div>
    <div className="hero__arrows-wrapper hero__arrows-wrapper--2">
      <HandleBars width="100px" height="100px" />
    </div>
    <div className="hero__arrows-wrapper hero__arrows-wrapper--3">
      <HandleBars width="100px" height="100px" />
    </div>
  </div>
)

export default HeroArrows
