import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import ArticlePreview from '../components/ArticlePreview'
import Breadcrumbs from '../components/Breadcrumbs'
import HeadingMain from '../components/HeadingMain'

const Products = ({ data }) => (
  <div>
    <Helmet title="Products" />
    <HeadingMain title={`Products (${data.allMarkdownRemark.totalCount})`} />

    <div className="container">
      <Breadcrumbs items={[{ text: 'Home', to: '/' }, { text: 'Products' }]} />
    </div>

    <div className="section-content container">
      {data.allMarkdownRemark.edges.map(({ node }, index) => {
        return (
          <ArticlePreview
            key={node.id}
            title={node.frontmatter.title}
            textAlign="left"
            layout="left"
            imageShadow={true}
            imageSrc={
              node.frontmatter.imageSrc &&
              node.frontmatter.imageSrc.childImageSharp.responsiveSizes.src
            }
            imageLabel={node.frontmatter.label}
            link={node.fields.slug}
          >
            {node.excerpt}
          </ArticlePreview>
        )
      })}
      <Link to="/" className="button button--xsmall button--brown">
        Back to the homepage
      </Link>
    </div>
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
