import React from 'react'
import Link from 'gatsby-link'
import FontAwesome from 'react-fontawesome'

const ProductPreview = (props) => {
    const label = <span className="label-box label-box--yellow">{props.label}</span>
    return (
        <div className="product-preview label-box-container">
            <Link to={props.link}>
                <img className="el-full" src={require("../../assets/products/1_thumb.jpg")} alt={props.title} />
            </Link>
            <div className="product-preview__hover">
                <div className="product-preview__hover-inner">
                    <Link className="link-clean link-hover-yellow" to={props.link}><em>{props.title}</em></Link>
                </div>
                <div className="product-preview__hover-icons">
                    <a href={props.urlShop} className="link-hover-yellow ml10"><FontAwesome name="shopping-cart" /></a>
                    <a href={props.urlLike} className="link-hover-yellow ml10"><FontAwesome name="heart" /></a>
                </div>
            </div>
            {props.label && label}
        </div>
    )
}

export default ProductPreview