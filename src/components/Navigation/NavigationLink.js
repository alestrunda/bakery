import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { Link as LinkScroll } from 'react-scroll'

class NavigationLink extends React.Component {
  renderLink(className, to, text) {
    return <Link className={className} to={to}>{text}</Link>
  }

  renderLinkScroll(className, to, text, smooth = true, duration = 1000) {
    return (
      <LinkScroll className={className} to={to} smooth={smooth} duration={duration}>
        {text}
      </LinkScroll>
    )
  }

  render() {
    const { to, text, scroll, className } = this.props
    return scroll ? this.renderLinkScroll(className, to, text) : this.renderLink(className, to, text)
  }
}

NavigationLink.propTypes = {
}

export default NavigationLink
