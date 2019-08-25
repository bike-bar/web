import React, { Component } from 'react'
import PropTypes from 'prop-types'

class NeonText extends Component {
  constructor(props) {
    super(props)

    this.state = {
      show: false
    }
  }

  componentDidMount() {
    this.addClass()
  }

  componentWillUnmount() {
    /* eslint-disable no-unused-expressions */
    this._timeout && clearTimeout(this._timeout)
  }

  addClass = () => {
    this.setState({ show: true }, () => {
      this._timeout = setTimeout(() => {
        this.removeClass(this.props.delay)
      }, 1500)
    })
  }

  removeClass = delay => {
    this.setState({ show: false }, () => {
      this._timeout = setTimeout(() => {
        this.addClass()
      }, delay)
    })
  }

  render() {
    const { index, text } = this.props
    const { show } = this.state

    return (
      <>
        <p className={show ? `neon neon--${index}` : 'neon'}>
          <span className="neon__text">{text}</span>
        </p>
      </>
    )
  }
}

/* eslint-disable react/require-default-props */
NeonText.propTypes = {
  text: PropTypes.string.isRequired,
  index: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  delay: PropTypes.number.isRequired
}

export default NeonText
