import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import FontAwesome from 'react-fontawesome'
import { Link as LinkScroll } from 'react-scroll'

import Footer from '../containers/Footer'
import Header from '../containers/Header'
import PageHelmet from '../containers/PageHelmet'

import '../scss/main.scss'
import 'slick-carousel/slick/slick.css'

const LayoutIndex = ({ children }) => (
  <div className="page-content">
    <PageHelmet />
    <Header
      fixOnScroll
      menuItemsLeft={[
        <LinkScroll to="top" smooth={true} duration={500}>
          Home
        </LinkScroll>,
        <Link to="/about/">About</Link>,
        <Link to="/menu/">Menu</Link>,
      ]}
      menuItemsRight={[
        <LinkScroll to="featured-recipes" smooth={true} duration={1500}>
          Features
        </LinkScroll>,
        <Link to="/blog/">Blog</Link>,
        <LinkScroll to="contact" smooth={true} duration={2000}>
          Contact
        </LinkScroll>,
      ]}
    />
    <div className="page-content__stretch">{children()}</div>
    <Footer />
  </div>
)

LayoutIndex.propTypes = {
  children: PropTypes.func,
}

export default LayoutIndex
