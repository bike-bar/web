import React from 'react'
import PropTypes from 'prop-types'
import Image from 'gatsby-image'
import { graphql, StaticQuery } from 'gatsby'

import HeroHeading from './heroHeading'
import HeroArrows from './heroArrows'

const HomeHero = ({ scrollToRef }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          file(relativePath: { eq: "home-hero-sm.png" }) {
            childImageSharp {
              fluid(maxWidth: 800, quality: 100) {
                ...GatsbyImageSharpFluid
                srcSet
              }
            }
          }
        }
      `}
      render={data => (
        <div className="hero">
          <Image
            fluid={data.file.childImageSharp.fluid}
            objectFit="cover"
            style={{ position: 'static' }}
          />
          <div className="hero__heading-wrapper">
            <HeroHeading title="the bicycle bar" />
          </div>
          <HeroArrows scrollToRef={scrollToRef} />
        </div>
      )}
    />
  )
}

HomeHero.propTypes = {
  scrollToRef: PropTypes.func.isRequired
}

export default HomeHero
