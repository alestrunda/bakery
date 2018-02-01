import React from 'react'
import PropTypes from 'prop-types'

import BreadcrumbsItem from '../Breadcrumbs/BreadcrumbsItem'

const Breadcrumbs = props => {
  return (
    <ul className="list-breadcrumbs">
      {props.items.map((item, index) => (
        <BreadcrumbsItem key={index} to={item.to} text={item.text} />
      ))}
    </ul>
  )
}

Breadcrumbs.propTypes = {
  items: PropTypes.array.isRequired,
}

export default Breadcrumbs
