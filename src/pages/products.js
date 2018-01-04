import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const Products = ({ data }) => (
  <div className="section-content container">
    <Helmet title="Products" />

    <h1 className="mb30">Products ({data.allMarkdownRemark.totalCount})</h1>
    {data.allMarkdownRemark.edges.map(({ node }, index) => {
      return (
        <div key={node.id} className="article mb50">
          <h3 className="mb10">
            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
          </h3>
          <strong className="text-red">{node.frontmatter.label}</strong>
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
  query ProductsListQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/products/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            label
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

export default Products
