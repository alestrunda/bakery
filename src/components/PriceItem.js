import React from 'react'
import PropTypes from 'prop-types'

import { addTrailingZeros } from '../utils/helpers'

const PriceItem = (props) => {
  const { title, price } = props
  const priceParts = price.toString().split('.')

  return (
    <div className="row-price">
      <div className="row-price__title">{title}</div>
      <div className="row-price__dots" />
      <div className="row-price__price">
        ${priceParts[0]}.
        <small className="vertical-top">
          {addTrailingZeros(priceParts.length > 1 ? priceParts[1] : 0, 2)}
        </small>
      </div>
    </div>
  )
}

PriceItem.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}

export default PriceItem
