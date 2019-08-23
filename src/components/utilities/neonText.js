import React from 'react'
import PropTypes from 'prop-types'

const NeonText = ({ text, animation }) => (
  <>
    <p className={animation ? `neon neon--${animation}` : 'neon'}>
      <span className="neon__text">{text}</span>
    </p>
  </>
)

/* eslint-disable react/require-default-props */
NeonText.propTypes = {
  text: PropTypes.string.isRequired,
  animation: PropTypes.string
}

export default NeonText
