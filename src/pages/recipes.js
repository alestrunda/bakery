import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

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
          excerpt={node.excerpt}
          textAlign="left"
          layout="left"
          imageSrc={
            node.frontmatter.imageSrc &&
            node.frontmatter.imageSrc.childImageSharp.responsiveSizes.src
          }
          link={node.fields.slug}
        />
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
