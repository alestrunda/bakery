import React from 'react'
import classNames from 'classnames'
import FontAwesome from 'react-fontawesome'
import PropTypes from 'prop-types'
import throttle from 'lodash.throttle'

import Button from '../components/Button'
import Navigation from '../components/Navigation'
import NavigationLogo from '../components/NavigationLogo'

class Header extends React.Component {
  componentDidMount() {
    this.props.isFixedOnScroll && this.addScrollHandler()
  }

  componentWillUnmount() {
    this.throttledHandleScroll && this.removeScrollHanlder()
  }

  state = {
    isMenuOpened: false,
    isHeaderFixed: false,
    prevScrollTop: 0,
  }

  addScrollHandler() {
    const throttleWait = 250
    this.throttledHandleScroll = throttle(this.handleScroll, throttleWait)
    window.addEventListener('scroll', this.throttledHandleScroll)
  }

  removeScrollHanlder() {
    window.removeEventListener('scroll', this.throttledHandleScroll)
  }

  handleMenuOpenClick = () => {
    this.setState({
      isMenuOpened: !this.state.isMenuOpened,
    })
  }

  handleScroll = () => {
    if (this.isScrolledUpwards() && this.isScrolledFromTop()) !this.isHeaderFixed() && this.fixHeader()
    else this.isHeaderFixed() && this.unfixHeader()

    this.setState({
      prevScrollTop: document.documentElement.scrollTop,
    })
  }

  isHeaderFixed() {
    return this.state.isHeaderFixed
  }

  isScrolledUpwards() {
    const scrollTop = document.documentElement.scrollTop
    return scrollTop < this.state.prevScrollTop
  }

  isScrolledFromTop() {
    const scrollFromTopThreshold = 600
    return document.documentElement.scrollTop > scrollFromTopThreshold
  }

  fixHeader() {
    this.headerEl.classList.add('active')
    this.setState({
      isHeaderFixed: true,
    })
  }

  unfixHeader() {
    this.headerEl.classList.remove('active')
    this.setState({
      isHeaderFixed: false,
    })
  }

  render() {
    const {
      menuItemsLeft,
      menuItemsRight,
      className,
      isFixedOnScroll,
    } = this.props

    const headerContent = (
      <div>
        <div className="container">
          <div className="page-header__content clearfix">
            <Button onClick={this.handleMenuOpenClick} className="nav-button">
              <FontAwesome name="reorder" />
            </Button>
            <nav className="nav-container">
              <Navigation
                className="nav-main"
                classNameContainer="nav-container__left"
                items={menuItemsLeft}
              />
              <Navigation
                className="nav-main"
                classNameContainer="nav-container__right"
                items={menuItemsRight}
              />
              <NavigationLogo className="nav-container__img" to="/" />
            </nav>
          </div>
        </div>
        <Navigation
          isActive={this.state.isMenuOpened}
          className="nav-responsive"
          classNameContainer="nav"
          items={menuItemsLeft.concat(menuItemsRight)}
          ref={element => {
            this.menuResponsive = element
          }}
        />
      </div>
    )

    return (
      <header id="top">
        <div className={classNames('page-header page-header--default', className)}>
          {headerContent}
        </div>
        {isFixedOnScroll && (
          <div
            className={classNames('page-header page-header--fixed', className)}
            ref={el => {
              this.headerEl = el
            }}
          >
            {headerContent}
          </div>
        )}
      </header>
    )
  }
}

Header.propTypes = {
  menuItemsLeft: PropTypes.array.isRequired,
  menuItemsRight: PropTypes.array.isRequired,
  className: PropTypes.string,
  isFixedOnScroll: PropTypes.bool,
}

Header.defaultProps = {
  isFixedOnScroll: false,
}

export default Header
