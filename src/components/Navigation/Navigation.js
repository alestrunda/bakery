import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import NavigationItem from './NavigationItem'

const Navigation = props => {
  const { items, isActive, className, classNameContainer } = props
  const navItems = items.map((item, index) => {
    return (
      <li key={index} className={`${className}__item`}>
        <NavigationItem className={`${className}__link`}>{item}</NavigationItem>
      </li>
    )
  })
  return (
    <div className={classNameContainer}>
      <ul className={classNames(className, { active: isActive })}>
        {navItems}
      </ul>
    </div>
  )
}

Navigation.propTypes = {
  isActive: PropTypes.bool,
  className: PropTypes.string,
  classNameContainer: PropTypes.string,
  items: PropTypes.array.isRequired,
}

Navigation.defaultProps = {
  isActive: false,
  className: 'nav',
}

export default Navigation
