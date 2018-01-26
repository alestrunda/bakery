import React from 'react'
import GoogleMapReact from 'google-map-react'

const ContactMap = props => {
  return (
    <div className="map">
      <div className="map__inner">
        <div className="map__canvas">
          <GoogleMapReact
            className="map__canvas"
            defaultCenter={{ lat: 40.715, lng: -73.999 }}
            defaultZoom={12}
          />
        </div>
      </div>
      <div className="container container--md-clean">
        <div className="map__over box-orange">
          <h2 className="heading-big text-white heading-underline2">
            CONTACT US
          </h2>
          <form>
            <input className="input-text" type="text" placeholder="Your Name" />
            <input
              className="input-text"
              type="email"
              placeholder="Your Email"
            />
            <textarea
              className="input-text input-textarea"
              placeholder="Message"
            />
            <div className="text-center">
              <input
                className="button button--white"
                type="submit"
                value="Send message"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactMap
