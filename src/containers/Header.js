import React from 'react'
import classNames from 'classnames'
import FontAwesome from 'react-fontawesome'
import Link from 'gatsby-link'

import Button from '../components/Button'
import Navigation from '../components/Navigation'
import NavigationLogo from '../components/NavigationLogo'

import { Link as LinkScroll } from 'react-scroll'

class Header extends React.Component {
  state = {
    menuOpened: false,
  }

  handleMenuOpenClick = () => {
    this.setState({
      menuOpened: !this.state.menuOpened,
    })
  }

  render() {
    const menuItemsLeft = [
      <LinkScroll to="top" smooth={true} duration={500}>Home</LinkScroll>,
      <Link to="">About</Link>,
      <Link to="">Menu</Link>,
    ]
    const menuItemsRight = [
      <LinkScroll to="featured-recipes" smooth={true} duration={1500}>Features</LinkScroll>,
      <Link to="">Blog</Link>,
      <LinkScroll to="contact" smooth={true} duration={2000}>Contact</LinkScroll>,
    ]

    return (
      <header id="top" className="page-header">
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
          active={this.state.menuOpened}
          className="nav-responsive"
          classNameContainer="nav"
          items={menuItemsLeft.concat(menuItemsRight)}
          ref={element => {
            this.menuResponsive = element
          }}
        />
      </header>
    )
  }
}

export default Header
