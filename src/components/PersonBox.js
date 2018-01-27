import React from 'react'
import PropTypes from 'prop-types'

const PersonBox = props => {
  const { title, name, html, imageSrc } = props

  return (
    <div className="person-box">
      <div className="person-box__img">
        <div className="person-box__border" />
        <img className="img-responsive el-center" src={imageSrc} alt={name} />
      </div>
      <div className="person-box__content">
        <p className="person-box__heading">{`${title} ${name}`}</p>
        {html && <div dangerouslySetInnerHTML={{ __html: html }} />}
      </div>
    </div>
  )
}

PersonBox.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  html: PropTypes.string,
}

export default PersonBox
