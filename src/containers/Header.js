import React from 'react'
import classNames from 'classnames'
import FontAwesome from 'react-fontawesome'
import PropTypes from 'prop-types'
import throttle from 'lodash.throttle'

import Button from '../components/Button'
import Navigation from '../components/Navigation'
import NavigationLogo from '../components/NavigationLogo'

class Header extends React.Component {
  state = {
    menuOpened: false,
    headerFixed: false,
    prevScrollTop: 0,
  }

  componentDidMount() {
    this.props.isFixedOnScroll && this.addScrollHandler()
  }

  componentWillUnmount() {
    this.throttledHandleScroll && this.removeScrollHanlder()
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
      menuOpened: !this.state.menuOpened,
    })
  }

  handleScroll = () => {
    if (this.isScrolledUpwards()) !this.isHeaderFixed() && this.fixHeader()
    else this.isHeaderFixed() && this.unfixHeader()

    this.setState({
      prevScrollTop: document.documentElement.scrollTop,
    })
  }

  isHeaderFixed() {
    return this.state.headerFixed
  }

  isScrolledUpwards() {
    const scrollTop = document.documentElement.scrollTop
    return scrollTop < this.state.prevScrollTop
  }

  fixHeader() {
    this.headerPlaceholderEl.style.height = this.headerEl.offsetHeight + 'px'
    this.headerEl.classList.add('page-header--fixed')
    this.setState({
      headerFixed: true,
    })
  }

  unfixHeader() {
    this.headerPlaceholderEl.style.height = 0
    this.headerEl.classList.remove('page-header--fixed')
    this.setState({
      headerFixed: false,
    })
  }

  render() {
    const { menuItemsLeft, menuItemsRight, className } = this.props

    return (
      <div>
        <header
          id="top"
          className={classNames('page-header', className)}
          ref={el => {
            this.headerEl = el
          }}
        >
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
            isActive={this.state.menuOpened}
            className="nav-responsive"
            classNameContainer="nav"
            items={menuItemsLeft.concat(menuItemsRight)}
            ref={element => {
              this.menuResponsive = element
            }}
          />
        </header>
        <div
          className="page-header-placeholder"
          ref={el => {
            this.headerPlaceholderEl = el
          }}
        />
      </div>
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
