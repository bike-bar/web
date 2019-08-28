import React, { Component } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

// import { Image } from '../../utilities'
import HeaderNav from './headerNav'
import { Beer } from '../../icons'

// import logo1x from '../../../assets/header-logo.png'
// import logo2x from '../../../assets/header-logo@2x.png'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasScrolled: false,
      changeHeaderStyle: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  /* eslint-disable consistent-return */
  handleScroll = () => {
    if (this.props.dropInHeader && this.props.dropInHeader.current) {
      return window.pageYOffset > this.props.dropInHeader.current.offsetTop
        ? this.setState({ hasScrolled: true })
        : this.setState({ hasScrolled: false })
    }
  }

  handleHeaderChange = () => {
    this.setState(prevState => ({ changeHeaderStyle: !prevState.changeHeaderStyle }))
  }

  render() {
    const { hasScrolled, changeHeaderStyle } = this.state

    return (
      <header
        className={this.state.hasScrolled ? 'header-wrap sticky ' : 'header-wrap'}
        style={
          changeHeaderStyle
            ? {
                position: 'sticky',
                background: 'linear-gradient(to bottom right, #80709a 0%, #4b405f 100%)'
              }
            : null
        }
      >
        <div className="container__inner">
          <div className={hasScrolled ? 'header header--no-border' : 'header'}>
            <div className="header__logo">
              {/* TODO: Update html to <picture></picture> once we get the logo */}
              <Link to="/">
                {/* <Image imageArr={[logo1x, logo2x, 'Bike Bar logo']} /> */}
                <Beer />
              </Link>
            </div>

            <HeaderNav handleHeaderChange={this.handleHeaderChange} />
          </div>
        </div>
      </header>
    )
  }
}

Header.defaultName = 'Header'

Header.propTypes = {
  dropInHeader: PropTypes.object.isRequired
}

export default Header
