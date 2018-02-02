import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import NavigationLink from './NavigationLink'

class Navigation extends React.Component {
  renderNavigationLink(index, className, item) {
    return (
      <li key={index} className={`${className}__item`}>
        <NavigationLink className={`${className}__link`} {...item} />
        {item.items && <Navigation className={`${className}__sub`} items={item.items} />}
      </li>
    )
  }

  render() {
    const { items, isActive, className, classNameContainer } = this.props
    return (
      <div className={classNameContainer}>
        <ul className={classNames(className, { active: isActive })}>
          {items.map((item, index) => this.renderNavigationLink(index, className, item))}
        </ul>
      </div>
    )
  }
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
