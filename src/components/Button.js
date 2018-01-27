import React from 'react'
import PropTypes from 'prop-types'

class Button extends React.Component {
  state = {
    active: false,
  }

  handleClick = e => {
    this.props.onClick && this.props.onClick(e)
    this.setState({
      active: !this.state.active,
    })
  }

  render() {
    const { children, className } = this.props
    return (
      <button onClick={this.handleClick} className={className}>
        {children}
      </button>
    )
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    .isRequired,
}

export default Button
