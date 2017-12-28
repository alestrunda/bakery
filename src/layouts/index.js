import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import FontAwesome from 'react-fontawesome'

import Header from '../containers/Header'

import '../scss/main.scss'
import "slick-carousel/slick/slick.css";

const Footer = () => (
  <footer className="page-footer bg-dark text-white">
    <div className="container section-content section-content--small">
      <div className="grid">
        <div className="grid__item grid__item--lg-span-3 grid__item--md-span-6 text-big">
          <h5 className="text-yellow">WORKING TIME</h5>
          <p>
            Daily: 8.00 am to 9.00 pm<br />
            Weekday: 9.00 am to 11.00 pm
          </p>
        </div>
        <div className="grid__item grid__item--lg-span-3 grid__item--md-span-6 grid__item--break-sm-25 text-small">
          <h5 className="text-yellow">HAPPY HOURS</h5>
          <p>
            Lorem Ipsum is simply dummy text of the printing.<br />
            <Link to="./">Click Here</Link>
          </p>
        </div>
        <div className="grid__item grid__item--lg-span-3 grid__item--md-span-6 grid__item--break-md-25">
          <h5 className="text-yellow">SOCIAL MEDIA</h5>
          <div className="mb10">
            <Link to="#" className="icon-circle icon-circle--white"><FontAwesome name='facebook-f' /></Link>
            <Link to="#" className="icon-circle icon-circle--white"><FontAwesome name='twitter' /></Link>
            <Link to="#" className="icon-circle icon-circle--white"><FontAwesome name='google-plus' /></Link>
            <Link to="#" className="icon-circle icon-circle--white"><FontAwesome name='pinterest-p' /></Link>
          </div>
        </div>
        <div className="grid__item grid__item--lg-span-3 grid__item--md-span-6 grid__item--break-md-25">
          <h5 className="text-yellow">CONTACT US</h5>
          <Link className="link-clean link-hover-red icon-opening" to="tel:123456789">
            <FontAwesome name='phone' className="icon-opening__icon" />
            123456789
          </Link>
          <Link className="link-clean link-hover-red icon-opening" to="mailto:info@email.com">
            <FontAwesome name='envelope' className="icon-opening__icon" />
            info@email.com
          </Link>
        </div>
      </div>
    </div>
    <div className="page-info bg-red text-yellow text-tiny">
      <div className="container">
        Bakery 2017
      </div>
    </div>
  </footer>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      defaultTitle="Bakery"
    >
      <meta name="description" content="Bakery template powered by Gatsby" />
      <meta name="author" content="Aleš Trunda alestrunda.cz" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link rel="shortcut icon" href="../../assets/favicon.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="favicon-152.png" />

      <link href="https://fonts.googleapis.com/css?family=Open+Sans:300i,400,400i,600i,700,700i|Roboto+Condensed:300,400,700" rel="stylesheet" />
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
    </Helmet>
    <Header />
    {children()}
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
