import React from 'react'
import PropTypes from 'prop-types'

/*
  IMAGE ARR STRUCTURE
    [
      [small-1x, small-2x], [lg-1x, lg-2x], atl tag]
    [
*/

const Picture = ({ classNameArr, imageArr, minWidth }) => (
  <div className={classNameArr[0]}>
    <picture className={classNameArr[1]}>
      <source srcSet={`${imageArr[1][0]} 1x, ${imageArr[1][1]} 2x`} media={minWidth} />

      <source srcSet={`${imageArr[0][0]} 1x, ${imageArr[0][1]} 2x`} />

      {/* IE does not support picture tag, this is the fall back */}
      <img className={classNameArr[1]} src={`${imageArr[1][0]}`} alt={imageArr[2]} />
    </picture>
  </div>
)

Picture.propTypes = {
  classNameArr: PropTypes.array.isRequired,
  imageArr: PropTypes.array.isRequired,
  minWidth: PropTypes.string.isRequired // ex: "(min-width: 70.02em)"
}

export default CardPicture
