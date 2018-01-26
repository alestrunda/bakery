import React from 'react'
import PropTypes from 'prop-types'

const HeadingMain = props => {
  return (
    <div className="heading-main">
      <h1 className="heading-main__title">{props.title}</h1>
    </div>
  )
}

HeadingMain.propTypes = {
  title: PropTypes.string,
}

export default HeadingMain
