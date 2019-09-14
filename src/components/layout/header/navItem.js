import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import { NeonText } from '../../utilities'

const NavItem = ({ list }) => (
  <>
    {list.map((item, index) => (
      <li className="navigation__item" key={item}>
        <Link className="navigation__link" to={item === 'about us' ? '/about-us' : `/${item}`}>
          <NeonText
            text={item}
            index={index}
            delay={Math.floor(Math.random() * (1000 - 200) + 1) + 200}
          />
        </Link>
      </li>
    ))}
  </>
)

NavItem.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default NavItem
