import React from 'react'
import PropTypes from 'prop-types'

import Hamburger from './hamburger'
import { NeonText } from '../../utilities'

const HeaderNav = ({ handleHeaderChange }) => (
  <div className="navigation">
    <Hamburger handleHeaderChange={handleHeaderChange} />

    <nav className="navigation__menu">
      <ul className="navigation__list">
        <li className="navigation__item">
          {/* eslint-disable-next-line */}
          <a className="navigation__link" href="" tabIndex="0">
            <NeonText text="events" animation="blink" />
          </a>
        </li>
        <li className="navigation__item">
          {/* eslint-disable-next-line */}
          <a className="navigation__link" href="" tabIndex="0">
            <NeonText text="co-op" animation="glow" />
          </a>
        </li>
        <li className="navigation__item">
          {/* eslint-disable-next-line */}
          <a className="navigation__link" href="" tabIndex="0">
            <NeonText text="about us" />
          </a>
        </li>
      </ul>
    </nav>
  </div>
)

HeaderNav.propTypes = {
  handleHeaderChange: PropTypes.func.isRequired
}

export default HeaderNav
