import React from 'react'
import Link from 'gatsby-link'
import FontAwesome from 'react-fontawesome'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import LabelBox from '../components/LabelBox'

const ProductPreview = props => {
  const { link, imageSrc, title, urlShop, urlLike, labelColor, label } = props

  return (
    <LabelBox className="product-preview" label={label} color={labelColor}>
      <Link to={link}>
        <img className="el-full" src={imageSrc} alt={title} />
      </Link>
      <div className="product-preview__hover">
        <div className="product-preview__hover-inner">
          <Link className="link-clean link-hover-yellow" to={link}>
            <em>{title}</em>
          </Link>
        </div>
        <div className="product-preview__hover-icons">
          {urlShop && (
            <a href={urlShop} className="link-hover-yellow ml10">
              <FontAwesome name="shopping-cart" />
            </a>
          )}
          {urlLike && (
            <a href={urlLike} className="link-hover-yellow ml10">
              <FontAwesome name="heart" />
            </a>
          )}
        </div>
      </div>
    </LabelBox>
  )
}

ProductPreview.propTypes = {
  label: PropTypes.string,
  labelColor: PropTypes.string,
  link: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  urlLike: PropTypes.string,
  urlShop: PropTypes.string,
}

ProductPreview.defaultProps = {
  labelColor: 'yellow',
}

export default ProductPreview
