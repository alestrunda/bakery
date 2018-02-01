import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import FontAwesome from 'react-fontawesome'

import Footer from '../containers/Footer'
import Header from '../containers/Header'
import PageHelmet from '../containers/PageHelmet'

import '../scss/main.scss'
import 'slick-carousel/slick/slick.css'

const LayoutPost = ({ children }) => (
  <div className="page-content">
    <PageHelmet />
    <Header
      className="page-header--offset-bottom"
      menuItemsLeft={[
        <Link to="/">Home</Link>,
        <Link to="/about/">About</Link>,
        <Link to="/menu/">Menu</Link>,
      ]}
      menuItemsRight={[
        <Link to="/#featured-recipes">Features</Link>,
        <Link to="/blog/">Blog</Link>,
        <Link to="/#contact">Contact</Link>,
      ]}
    />
    <div className="page-content__stretch">{children()}</div>
    <Footer />
  </div>
)

LayoutPost.propTypes = {
  children: PropTypes.func,
}

export default LayoutPost
