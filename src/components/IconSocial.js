import React from 'react'
import Link from 'gatsby-link'
import FontAwesome from 'react-fontawesome'
import PropTypes from 'prop-types'

const IconSocial = props => {
  const { target, icon, color } = props
  return (
    <Link to={target} className={`icon-circle icon-circle--${color}`}>
      <FontAwesome name={icon} />
    </Link>
  )
}

IconSocial.propTypes = {
  icon: PropTypes.string,
  target: PropTypes.string,
  color: PropTypes.string.isRequired,
}

export default IconSocial
