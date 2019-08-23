import React from 'react'
import PropTypes from 'prop-types'

import Hamburger from './hamburger'

const HeaderNav = ({ handleHeaderChange }) => (
  <div className="navigation">
    <Hamburger handleHeaderChange={handleHeaderChange} />
    <nav className="navigation__menu">
      <ul className="navigation__list">
        <li className="navigation__item">
          {/* eslint-disable-next-line */}
          <a className="navigation__link" href="" tabIndex="0">
            Events
          </a>
        </li>
        <li className="navigation__item">
          {/* eslint-disable-next-line */}
          <a className="navigation__link" href="" tabIndex="0">
            co-op
          </a>
        </li>
        <li className="navigation__item">
          {/* eslint-disable-next-line */}
          <a className="navigation__link" href="" tabIndex="0">
            about us
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
