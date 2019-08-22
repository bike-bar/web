import React from 'react'
import PropTypes from 'prop-types'

/*
  IMAGE ARR STRUCTURE
    [1x img, 2x img, atl tag]
*/

const Image = ({ imageArr }) => (
  <img srcSet={`${imageArr[0]} 1x, ${imageArr[1]} 2x`} src={imageArr[0]} alt={imageArr[2]} />
)

Image.propTypes = {
  imageArr: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Image
