import React from 'react'
import PropTypes from 'prop-types'

const Testimonial = props => {
  const { imageSrc, html } = props

  return (
    <blockquote className="testimonial">
      <div className="testimonial__img">
        <img className="image-round el-center" src={imageSrc} alt="image" />
      </div>
      <div className="testimonial__content">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </blockquote>
  )
}

Testimonial.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
}

export default Testimonial
