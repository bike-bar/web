import React from 'react'
import PropTypes from 'prop-types'

/*
  IMAGE ARR STRUCTURE
    [
      [small-1x, small-2x], [lg-1x, lg-2x], atl tag]
    [
*/

const Picture = ({ className, imageArr, minWidth }) => (
  <div className={className}>
    <picture>
      <source srcSet={`${imageArr[1][0]} 1x, ${imageArr[1][1]} 2x`} media={minWidth} />

      <source srcSet={`${imageArr[0][0]} 1x, ${imageArr[0][1]} 2x`} />

      {/* IE does not support picture tag, this is the fall back */}
      <img src={`${imageArr[1][0]}`} alt={imageArr[2]} />
    </picture>
  </div>
)

Picture.propTypes = {
  className: PropTypes.string.isRequired,
  imageArr: PropTypes.arrayOf(PropTypes.stings).isRequired,
  minWidth: PropTypes.string.isRequired // ex: "(min-width: 70.02em)"
}

export default Picture
