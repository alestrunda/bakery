import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const Recipes = ({ data }) => (
  <div className="section-content container">
    <Helmet title="Recipes" />

    <h1 className="mb30">Recipes ({data.allMarkdownRemark.totalCount})</h1>
    {data.allMarkdownRemark.edges.map(({ node }, index) => {
      return (
        <div key={node.id} className="article mb50">
          <h3 className="mb10">
            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
          </h3>
          <strong>Ingredients:</strong>
          <div
            className="mb20 text-italic"
            dangerouslySetInnerHTML={{ __html: node.frontmatter.ingredients }}
          />
          <p>{node.excerpt}</p>
        </div>
      )
    })}
    <div className="m20" />
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
