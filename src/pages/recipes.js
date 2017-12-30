import React from 'react'
import Link from 'gatsby-link'

const Recipes = ({data}) => (
  <div className="section-content container">
    <h1 className="mb30">Recipes ({data.allMarkdownRemark.totalCount})</h1>
    {data.allMarkdownRemark.edges.map(({ node }, index) => {
      return (
        <div className="article-preview">
          <h3 className="mb10">
            <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
          </h3>
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </div>
      )
    })}
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export const query = graphql`
  query RecipesQuery {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/recipes/"}}) {
      totalCount
      edges {
        node {
          frontmatter {
            title
          }
          excerpt(pruneLength: 250)
        }
      }
    }
  }
`

export default Recipes
