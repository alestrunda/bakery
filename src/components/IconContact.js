import React from 'react'
import FontAwesome from 'react-fontawesome'
import PropTypes from 'prop-types'

const IconSocial = props => {
  const { target, icon, children } = props

  return (
    <a className="link-clean link-hover-red icon-opening" href={target}>
      <FontAwesome name={icon} className="icon-opening__icon" />
      {children}
    </a>
  )
}

IconSocial.propTypes = {
  icon: PropTypes.string,
  target: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
}

export default IconSocial
