import React from 'react'
import PropTypes from 'prop-types'

const Hamburger = ({ handleHeaderChange }) => (
  <>
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
  </>
)

Hamburger.propTypes = {
  handleHeaderChange: PropTypes.func.isRequired
}

export default Hamburger
