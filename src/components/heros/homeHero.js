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
          mobileImage: file(relativePath: { eq: "home-hero-sm.png" }) {
            childImageSharp {
              fluid(maxWidth: 375, quality: 100) {
                ...GatsbyImageSharpFluid
                srcSetWebp
              }
            }
          }
          desktopImage: file(relativePath: { eq: "home-hero-lg.png" }) {
            childImageSharp {
              fluid(maxWidth: 2000, quality: 100) {
                ...GatsbyImageSharpFluid
                srcSetWebp
              }
            }
          }
        }
      `}
      render={data => {
        const sources = [
          data.mobileImage.childImageSharp.fluid,
          {
            ...data.desktopImage.childImageSharp.fluid,
            media: `(min-width: 600px)`
          }
        ]

        return (
          <div className="hero">
            <Image fluid={sources} style={{ position: 'static' }} />
            <div className="hero__heading-wrapper">
              <HeroHeading title="the bicycle bar" />
            </div>
            <HeroArrows scrollToRef={scrollToRef} />
          </div>
        )
      }}
    />
  )
}

HomeHero.propTypes = {
  scrollToRef: PropTypes.func.isRequired
}

export default HomeHero
