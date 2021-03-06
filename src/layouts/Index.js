import React from 'react'
import PropTypes from 'prop-types'

import Footer from '../containers/Footer'
import Header from '../containers/Header'
import PageHelmet from '../containers/PageHelmet'

const LayoutIndex = ({ children }) => (
  <div className="page-content">
    <PageHelmet />
    <Header
      isFixedOnScroll
      className="page-header--bottom-clean"
      menuItemsLeft={[
        { isScrollingLink: true, to: 'top', text: 'Home' },
        {
          to: '/menu/',
          text: 'Menu',
          items: [{ to: '/products/', text: 'Products' }],
        },
        { isScrollingLink: true, to: 'featured-recipes', text: 'Features' },
      ]}
      menuItemsRight={[
        {
          to: '/blog/',
          text: 'Blog',
          items: [{ to: '/recipes/', text: 'Recipes' }],
        },
        { to: '/about/', text: 'About' },
        { isScrollingLink: true, to: 'contact', text: 'Contact' },
      ]}
    />
    <div className="page-content__stretch">{children}</div>
    <Footer />
  </div>
)

LayoutIndex.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default LayoutIndex
