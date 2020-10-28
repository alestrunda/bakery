import React from 'react'
import FontAwesome from 'react-fontawesome'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

const Recipe = (props) => {
  const { recipe, title } = props

  return (
    <article className="recipe-simple">
      <div className="recipe-simple__content">
        {title && <h2 className="recipe-simple__title">{title}</h2>}
        <div dangerouslySetInnerHTML={{ __html: `"${recipe.text}"` }} />
        <h4 className="mb10 mt25">
          <FontAwesome className="text-red text-bigger mr5" name="star" />
          Ingredients
        </h4>
        <div
          className="text-italic"
          dangerouslySetInnerHTML={{ __html: recipe.ingredients.join('<br>') }}
        />
      </div>
      <div className="recipe-simple__photo">
        <Link to={recipe.link}>
          <Img
            className="el-full recipe-simple__img"
            fluid={recipe.image}
            alt="image"
          />
        </Link>
        <div className="row-attrs">
          <div className="row-attrs__item">
            <span className="text-brown-light">PREP:</span>
            <br />
            {recipe.timePrep} mins
          </div>
          <div className="row-attrs__item">
            <span className="text-brown-light">COOK:</span>
            <br />
            {recipe.timeCook} mins
          </div>
          <div className="row-attrs__item">
            <span className="text-brown-light">READY IN:</span>
            <br />
            {recipe.timePrep + recipe.timeCook} mins
          </div>
        </div>
      </div>
    </article>
  )
}

Recipe.propTypes = {
  title: PropTypes.string,
  recipe: PropTypes.object.isRequired,
}

export default Recipe
