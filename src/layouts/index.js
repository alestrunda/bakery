import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import FontAwesome from 'react-fontawesome'

import Footer from '../containers/Footer'
import Header from '../containers/Header'

import '../scss/main.scss'
import 'slick-carousel/slick/slick.css'

const TemplateWrapper = ({ children }) => (
  <div className="page-content">
    <Helmet defaultTitle="Bakery">
      <meta name="description" content="Bakery template powered by Gatsby" />
      <meta name="author" content="Aleš Trunda alestrunda.cz" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link rel="shortcut icon" href={require('../../assets/favicon.png')} />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href={require('../../assets/favicon-152.png')}
      />

      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300i,400,400i,600i,700,700i|Roboto+Condensed:300,400,700"
        rel="stylesheet"
      />
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
    </Helmet>
    <Header />
    <div className="page-content__stretch">
      {children()}
    </div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
