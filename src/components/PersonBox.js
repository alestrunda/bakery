import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const PersonBox = (props) => {
  const { title, name, html, image } = props

  return (
    <div className="person-box">
      <div className="person-box__img">
        <div className="person-box__border" />
        <Img className="img-responsive el-center" fluid={image} alt={name} />
      </div>
      <div className="person-box__content">
        <p className="person-box__heading">{`${title} ${name}`}</p>
        {html && <div dangerouslySetInnerHTML={{ __html: html }} />}
      </div>
    </div>
  )
}

PersonBox.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  html: PropTypes.string,
}

export default PersonBox
