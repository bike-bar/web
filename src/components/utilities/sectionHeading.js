import React from 'react'
import PropTypes from 'prop-types'

const sectionHeading = ({ text, className }) => (
  <h2 className={`${className} section-heading`}>{text}</h2>
)

sectionHeading.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
}

export default sectionHeading
