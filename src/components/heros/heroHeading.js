import React from 'react'
import PropTypes from 'prop-types'

const HeroHeading = ({ title }) => (
  <>
    <h1 className="hero-heading">{title}</h1>
  </>
)

HeroHeading.propTypes = {
  title: PropTypes.string.isRequired
}

export default HeroHeading
