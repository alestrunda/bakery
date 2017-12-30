import React from 'react'
import Link from 'gatsby-link'
import classNames from 'classnames'
import FontAwesome from 'react-fontawesome'

import Button from '../components/Button'
import Navigation from '../components/Navigation'
import NavigationLogo from '../components/NavigationLogo'

class Header extends React.Component {
  state = {
    menuOpened: false
  }

  handleMenuOpenClick = () => {
    this.setState({
      menuOpened: !this.state.menuOpened
    })
  }

  render() {
    const menuItemsLeft = [
      {title: "Home", to: "#"},
      {title: "About", to: "#"},
      {title: "Menu", to: "#"},
    ]
    const menuItemsRight = [
      {title: "Features", to: "#"},
      {title: "Blog", to: "#"},
      {title: "Contact", to: "#"},
    ]

    return (
      <header className="page-header">
        <div className="container">
          <div className="page-header__content clearfix">
            <Button onClick={this.handleMenuOpenClick} className="nav-button">
              <FontAwesome name="reorder"></FontAwesome>
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
          ref={(element) => { this.menuResponsive = element; }}
        />
      </header>
    )
  }
}

export default Header;