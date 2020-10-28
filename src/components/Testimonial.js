import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const Testimonial = ({ image, html }) => {
  return (
    <blockquote className="testimonial">
      <div className="testimonial__img">
        <Img className="image-round el-center" fluid={image} alt="image" />
      </div>
      <div className="testimonial__content">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </blockquote>
  )
}

Testimonial.propTypes = {
  image: PropTypes.object.isRequired,
  html: PropTypes.string.isRequired,
}

export default Testimonial
