import React from 'react'
import PropTypes from 'prop-types'

import { HandleBars } from '../icons'

const HeroArrows = ({ scrollToRef }) => (
  <button className="hero__arrows" type="button" onClick={scrollToRef}>
    <div className="hero__arrows-wrapper">
      <HandleBars width="100px" height="100px" />
    </div>
    <div className="hero__arrows-wrapper hero__arrows-wrapper--2">
      <HandleBars width="100px" height="100px" />
    </div>
    <div className="hero__arrows-wrapper hero__arrows-wrapper--3">
      <HandleBars width="100px" height="100px" />
    </div>
  </button>
)

HeroArrows.propTypes = {
  scrollToRef: PropTypes.func.isRequired
}

export default HeroArrows
