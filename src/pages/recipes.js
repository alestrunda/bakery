import React from 'react'
import Link from 'gatsby-link'

const Recipes = ({data}) => (
  <div className="section-content container">
    <h1 className="mb30">Recipes ({data.allMarkdownRemark.totalCount})</h1>
    {data.allMarkdownRemark.edges.map(({ node }, index) => {
      return (
        <div className="article mb50">
          <h3 className="mb10">
            <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
          </h3>
          <strong>Ingredients:</strong>
          <div className="mb20 text-italic" dangerouslySetInnerHTML={{ __html: node.frontmatter.ingredients }} />
          <p>{node.excerpt}</p>
        </div>
      )
    })}
    <div className="m20"></div>
    <Link to="/" className="button button--xsmall button--brown">Back to the homepage</Link>
  </div>
)

export const query = graphql`
  query RecipesListQuery {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/recipes/"}}) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            ingredients
          }
          excerpt(pruneLength: 250)
        }
      }
    }
  }
`

export default Recipes
