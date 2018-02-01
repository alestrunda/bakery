import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'

const BreadcrumbsItem = props => {
  const { to, text } = props
  return (
    <li className="list-breadcrumbs__item">
      {to ? (
        <Link className="list-breadcrumbs__link" to={to}>
          {text}
        </Link>
      ) : (
        text
      )}
    </li>
  )
}

BreadcrumbsItem.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string.isRequired,
}

export default BreadcrumbsItem
