import React from 'react'
import PropTypes from 'prop-types'

class Button extends React.Component {
  state = {
    active: false,
  }

  handleClick = e => {
    this.props.onClick && this.props.onClick()
    this.setState({
      active: !this.state.active,
    })
  }

  render() {
    return (
      <button onClick={this.handleClick} className={this.props.className}>
        {this.props.children}
      </button>
    )
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element.isRequired,
    PropTypes.string,
  ]),
}

export default Button
