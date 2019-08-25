import React from 'react'
import PropTypes from 'prop-types'

import { NeonText } from '../../utilities'

const NavItem = ({ list }) => (
  <>
    {list.map((item, index) => (
      <li className="navigation__item" key={item}>
        <a className="navigation__link" href={item === 'about us' ? 'about-us' : item}>
          <NeonText
            text={item}
            index={index}
            delay={Math.floor(Math.random() * (1000 - 200) + 1) + 200}
          />
        </a>
      </li>
    ))}
  </>
)

NavItem.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default NavItem
