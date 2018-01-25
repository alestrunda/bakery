import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import ArticlePreview from '../components/ArticlePreview'

const Products = ({ data }) => (
  <div className="section-content container">
    <Helmet title="Products" />

    <h1 className="heading-main-single">
      Products ({data.allMarkdownRemark.totalCount})
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
          <div className="mb10">
            <span className="label-box">{node.label}</span>
          </div>
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

export default Products
