import React from 'react'
import PropTypes from 'prop-types'

import { NeonText } from '../../utilities'

const NavItem = ({ list }) => (
  <>
    {list.map(item => (
      <li className="navigation__item" key={item}>
        <a className="navigation__link" href={item === 'about us' ? 'about-us' : item}>
          <NeonText text={item} /* TODO: need to add animations */ />
        </a>
      </li>
    ))}
  </>
)

NavItem.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default NavItem
