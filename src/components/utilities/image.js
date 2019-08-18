import React from 'react'
import PropTypes from 'prop-types'

/*
  IMAGE ARR STRUCTURE
    [1x img, 2x img, atl tag]
*/

const Image = ({ className, imageArr }) => (
  <img
    className={className}
    srcSet={`${imageArr[0]} 1x, ${imageArr[1]} 2x`}
    src={imageArr[0]}
    alt={imageArr[2]}
  />
)

/* eslint-disable react/require-default-props */
Image.propTypes = {
  className: PropTypes.string,
  imageArr: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Image
