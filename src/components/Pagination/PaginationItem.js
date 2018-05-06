import React from 'react'
import Link from 'gatsby-link'
import className from 'classnames'
import PropTypes from 'prop-types'

const PaginationItem = props => {
  const { classNameExtra, classNameModifier, children, to } = props
  return (
    <li
      className={className(
        `${props.className}__item`,
        classNameModifier
          ? `${props.className}__item--${classNameModifier}`
          : '',
        classNameExtra ? classNameExtra : ''
      )}
    >
      <Link to={to} className={`${props.className}__link`}>
        {children}
      </Link>
    </li>
  )
}

PaginationItem.propTypes = {
  className: PropTypes.string.isRequired,
  classNameExtra: PropTypes.string,
  classNameModifier: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  to: PropTypes.string.isRequired,
}

PaginationItem.defaultProps = {
  classNameModifier: 'default',
}

export default PaginationItem
