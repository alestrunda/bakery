import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import NavigationItem from './NavigationItem'

const Navigation = props => {
  const items = props.items.map((item, index) => {
    return (
      <li key={index} className={`${props.className}__item`}>
        <NavigationItem className={`${props.className}__link`}>
          {item}
        </NavigationItem>
      </li>
    )
  })
  return (
    <div className={props.classNameContainer}>
      <ul className={classNames(props.className, { active: props.active })}>
        {items}
      </ul>
    </div>
  )
}

Navigation.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  classNameContainer: PropTypes.string,
  items: PropTypes.array.isRequired,
}

Navigation.defaultProps = {
  active: false,
  className: 'nav',
}

export default Navigation
