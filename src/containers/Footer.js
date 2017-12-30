import React from 'react'

const Footer = (props) => {
  return(
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
}

export default Footer