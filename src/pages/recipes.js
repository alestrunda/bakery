import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import FontAwesome from 'react-fontawesome'

import ArticlePreview from '../components/ArticlePreview'

const Recipes = ({ data }) => (
  <div className="section-content container">
    <Helmet title="Recipes" />

    <h1 className="heading-main-single">
      Recipes ({data.allMarkdownRemark.totalCount})
    </h1>
    {data.allMarkdownRemark.edges.map(({ node }, index) => {
      return (
        <ArticlePreview
          key={node.id}
          title={node.frontmatter.title}
          textAlign="left"
          layout="left"
          imageSrc={
            node.frontmatter.imageSrc &&
            node.frontmatter.imageSrc.childImageSharp.responsiveSizes.src
          }
          link={node.fields.slug}
        >
          <h4 className="mb10 mt25">
            <FontAwesome className="text-red text-bigger mr5" name="star" />
            Ingredients
          </h4>
          <div className="mb25 text-italic" dangerouslySetInnerHTML={{ __html: node.frontmatter.ingredients }} />
          {node.excerpt}
        </ArticlePreview>
      )
    })}
    <Link to="/" className="button button--xsmall button--brown">
      Back to the homepage
    </Link>
  </div>
)

export const query = graphql`
  query RecipesListQuery {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/recipes/" } }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            ingredients
            imageSrc {
              childImageSharp {
                responsiveSizes(maxWidth: 400) {
                  src
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt(pruneLength: 250)
        }
      }
    }
  }
`

export default Recipes
