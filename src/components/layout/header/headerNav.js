import React from 'react'
import PropTypes from 'prop-types'

import Hamburger from './hamburger'
import NavItem from './navItem'

const HeaderNav = ({ handleHeaderChange }) => (
  <div className="navigation">
    <Hamburger handleHeaderChange={handleHeaderChange} />

    <nav className="navigation__menu">
      <ul className="navigation__list">
        <NavItem list={['events', 'co-open', 'about us']} />
      </ul>
    </nav>
  </div>
)

HeaderNav.propTypes = {
  handleHeaderChange: PropTypes.func.isRequired
}

export default HeaderNav
/* eslint-disable-next-line */
