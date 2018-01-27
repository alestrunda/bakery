import React from 'react'
import Link from 'gatsby-link'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const NavigationLogo = props => {
  const { className, to } = props

  return (
    <div className={classNames('img-nav-logo__container', className)}>
      <div className="img-nav-logo__circle" />
      <Link to={to}>
        <img
          className="img-nav-logo"
          src={require('../../assets/logo.png')}
          alt="Bakery"
        />
      </Link>
    </div>
  )
}

NavigationLogo.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string.isRequired,
}

export default NavigationLogo
