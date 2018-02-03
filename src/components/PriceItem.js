import React from 'react'
import PropTypes from 'prop-types'

const PriceItem = props => {
  const { title, price } = props
  return (
    <div className="row-price">
      <div className="row-price__title">{title}</div>
      <div className="row-price__dots" />
      <div
        className="row-price__price"
        dangerouslySetInnerHTML={{ __html: price }}
      />
    </div>
  )
}

PriceItem.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
}

export default PriceItem
