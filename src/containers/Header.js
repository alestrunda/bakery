import React from 'react'
import Link from 'gatsby-link'
import classNames from 'classnames'
import FontAwesome from 'react-fontawesome'

class Header extends React.Component {
  state = {
    menuOpened: false
  }

  handleMenuOpenClick = () => {
    this.setState({
      menuOpened: !this.state.menuOpened
    })
    this.menuResponsive.classList.toggle('active')
  }

  render() {
    return (
      <header className="page-header">
        <div className="container">
          <div className="page-header__content clearfix">
            <div onClick={this.handleMenuOpenClick} className="nav-button">
              <FontAwesome name="reorder"></FontAwesome>
            </div>
            <nav className="nav-container">
              <div className="nav-container__left">
                <ul className="nav-main">
                  <li className="nav-main__item">
                    <Link className="nav-main__link" to="#">Home</Link>
                  </li>
                  <li className="nav-main__item">
                    <Link className="nav-main__link" to="#">About</Link>
                  </li>
                  <li className="nav-main__item">
                    <Link className="nav-main__link" to="#">Menu</Link>
                  </li>
                </ul>
              </div>
              <div className="nav-container__right">
                <ul className="nav-main">
                  <li className="nav-main__item">
                    <Link className="nav-main__link" to="#">Features</Link>
                  </li>
                  <li className="nav-main__item">
                    <Link className="nav-main__link" to="#">Blog</Link>
                  </li>
                  <li className="nav-main__item">
                    <Link className="nav-main__link" to="#">Contact</Link>
                  </li>
                </ul>
              </div>
              <div className="nav-container__img img-logo__container">
                <div className="img-logo__circle"></div>
                <Link to="./"><img className="img-logo" src={require("../../assets/logo.png")} alt="Bakery" /></Link>
              </div>
            </nav>
          </div>
        </div>
        <ul className={classNames("nav-responsive", {"active": this.state.menuOpened})} ref={(element) => { this.menuResponsive = element; }}>
          <li className="nav-responsive__item">
            <Link className="nav-responsive__link" to="#">Home</Link>
          </li>
          <li className="nav-responsive__item">
            <Link className="nav-responsive__link" to="#">About</Link>
          </li>
          <li className="nav-responsive__item">
            <Link className="nav-responsive__link" to="#">Menu</Link>
          </li>
          <li className="nav-responsive__item">
            <Link className="nav-responsive__link" to="#">Features</Link>
          </li>
          <li className="nav-responsive__item">
            <Link className="nav-responsive__link" to="#">Blog</Link>
          </li>
          <li className="nav-responsive__item">
            <Link className="nav-responsive__link" to="#">Contact</Link>
          </li>
        </ul>
      </header>
    )
  }
}

export default Header;