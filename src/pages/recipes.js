import React from 'react'
import Link from 'gatsby-link'

const Recipes = ({data}) => (
  <div className="section-content container">
    <h1 className="mb30">Recipes</h1>
    {data.allMarkdownRemark.edges.map(({ node }, index) => {
      return (
        <div>
          <h3>{node.frontmatter.title}</h3>
          <div dangerouslySetInnerHTML={{ __html: node.html }} />
        </div>
      )
    })}
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export const query = graphql`
  query MyFilesQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
          }
          html
        }
      }
    }
  }
`

export default Recipes
