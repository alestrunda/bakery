import React from 'react'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'

import ArticlePreview from '../components/ArticlePreview'
import Breadcrumbs from '../components/Breadcrumbs'
import HeadingMain from '../components/HeadingMain'
import Layout from '../layouts/Page'

const PAGE_TITLE = 'Products'

const Products = ({ data }) => (
  <Layout title={PAGE_TITLE}>
    <HeadingMain
      title={`${PAGE_TITLE} (${data.allMarkdownRemark.totalCount})`}
    />
    <div className="container">
      <Breadcrumbs items={[{ text: 'Home', to: '/' }, { text: PAGE_TITLE }]} />
    </div>
    <div className="section-content section-content--top-smaller container">
      {data.allMarkdownRemark.edges.map(({ node }) => {
        return (
          <ArticlePreview
            key={node.id}
            title={node.frontmatter.title}
            textAlign="left"
            layout="left"
            imageShadow={true}
            imageSrc={
              node.frontmatter.imageSrc &&
              node.frontmatter.imageSrc.childImageSharp.fluid.src
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
  </Layout>
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
                fluid(maxWidth: 400) {
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
