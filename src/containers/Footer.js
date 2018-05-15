import React from 'react'
import Link from 'gatsby-link'

import IconContact from '../components/IconContact'
import IconLink from '../components/IconLink'

const Footer = props => {
  return (
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
              <Link to="/about/">Click Here</Link>
            </p>
          </div>
          <div className="grid__item grid__item--lg-span-3 grid__item--md-span-6 grid__item--break-md-25">
            <h5 className="text-yellow">SOCIAL MEDIA</h5>
            <div className="mb10">
              <IconLink icon="facebook-f" target="#" color="white" />
              <IconLink icon="twitter" target="#" color="white" />
              <IconLink icon="google-plus" target="#" color="white" />
              <IconLink icon="pinterest-p" target="#" color="white" />
            </div>
          </div>
          <div className="grid__item grid__item--lg-span-3 grid__item--md-span-6 grid__item--break-md-25">
            <h5 className="text-yellow">CONTACT US</h5>
            <IconContact target="tel:123456789" icon="phone">
              123456789
            </IconContact>
            <IconContact target="mailto:info@email.com" icon="envelope">
              info@email.com
            </IconContact>
          </div>
        </div>
      </div>
      <div className="page-info bg-red text-yellow text-tiny">
        <div className="container">Bakery &copy; 2018</div>
      </div>
    </footer>
  )
}

export default Footer
