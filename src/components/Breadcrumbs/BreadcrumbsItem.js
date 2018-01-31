import React from 'react'
import Link from 'gatsby-link'

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

export default BreadcrumbsItem
