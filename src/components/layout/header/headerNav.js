import React from 'react'
import PropTypes from 'prop-types'

const HeaderNav = ({ handleHeaderChange }) => (
  <div className="navigation">
    <input
      className="navigation__checkbox"
      type="checkbox"
      id="menu_toggle"
      name="menu_toggle"
      onClick={handleHeaderChange}
    />
    <label className="navigation__button" htmlFor="menu_toggle">
      <span className="navigation__icon">
        <span className="hide-display">Menu</span>
      </span>
    </label>
  </div>
)

HeaderNav.propTypes = {
  handleHeaderChange: PropTypes.func.isRequired
}

export default HeaderNav
