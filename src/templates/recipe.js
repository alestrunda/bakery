import React from 'react'
import Helmet from 'react-helmet'
import FontAwesome from 'react-fontawesome'

const PageRecipe = ({ data }) => {
  const post = data.markdownRemark
  const {
    title,
    date,
    description,
    ingredients,
    timePrep,
    timeCook,
  } = post.frontmatter
  return (
    <div className="container section-content">
      <Helmet title={title} />

      <div className="article">
        <h1 className="mb5">{title}</h1>
        <p className="text-small text-silver">{date}</p>
        <p className="mb40">{`"${description}"`}</p>
        <div className="grid mb40">
          <div className="grid__item grid__item--md-span-6">
            <h4 className="mb10">
              <FontAwesome className="text-red text-bigger mr5" name="star" />
              Ingredients:
            </h4>
            <div
              className="mb30 text-italic"
              dangerouslySetInnerHTML={{ __html: ingredients }}
            />
            <div className="text-big">
              <span className="text-red-dark">PREP:</span>{' '}
              <strong>{timePrep}min</strong>
              <br />
              <span className="text-red-dark">COOK:</span>{' '}
              <strong>{timeCook}min</strong>
              <br />
              <span className="text-red-dark">READY IN:</span>{' '}
              <strong>{timePrep + timeCook}min</strong>
            </div>
          </div>
          <div className="grid__item grid__item--md-span-6 grid__item--break-sm-30">
            <img
              className="img-responsive"
              alt={title}
              src={
                post.frontmatter.imageSrc.childImageSharp.responsiveSizes.src
              }
            />
          </div>
        </div>
        <h4 className="mb10">
          <FontAwesome className="text-red text-bigger mr5" name="star" />
          Steps:
        </h4>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </div>
  )
}

export const query = graphql`
  query PageRecipeQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD. MM. YYYY")
        description
        ingredients
        timePrep
        timeCook
        imageSrc {
          childImageSharp {
            responsiveSizes(maxWidth: 500) {
              src
            }
          }
        }
      }
    }
  }
`

export default PageRecipe
