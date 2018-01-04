import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'

const NavigationItem = props => {
  return (
    <Link className={props.className} to={props.to}>
      {props.title}
    </Link>
  )
}

NavigationItem.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  title: PropTypes.string,
}

export default NavigationItem
