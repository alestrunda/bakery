import React from 'react'
import PropTypes from 'prop-types'

const SlickArrow = props => {
  const { className, onClick, children } = props
  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  )
}

SlickArrow.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.element,
}

export default SlickArrow
