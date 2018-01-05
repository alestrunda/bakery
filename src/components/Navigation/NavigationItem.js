import React from 'react'
import PropTypes from 'prop-types'

const NavigationItem = props => {
  //add className to the child
  const link = React.cloneElement(props.children, {
    className: props.className
  })

  return link
}

NavigationItem.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
}

export default NavigationItem
