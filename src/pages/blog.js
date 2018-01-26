import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import ArticlePreview from '../components/ArticlePreview'

import HeadingMain from '../components/HeadingMain'

const PageBlog = ({ data }) => (
  <div>
    <Helmet title="Blog" />
    <HeadingMain title={`Blog (${data.allMarkdownRemark.totalCount})`} />

    <div className="section-content section-content--bottom-smaller container">
      <div className="grid grid--center">
        {data.allMarkdownRemark.edges.map(({ node }, index) => {
          return (
            <div className="grid__item grid__item--md-span-4" key={node.id}>
              <ArticlePreview
                title={node.frontmatter.title}
                imageSrc={
                  node.frontmatter.imageSrc &&
                  node.frontmatter.imageSrc.childImageSharp.responsiveSizes.src
                }
                link={node.fields.slug}
              >
                {node.excerpt}
              </ArticlePreview>
            </div>
          )
        })}
      </div>
    </div>
  </div>
)

export const query = graphql`
  query PostsQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/posts/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
            imageSrc {
              childImageSharp {
                responsiveSizes(maxWidth: 500) {
                  src
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt(pruneLength: 350)
        }
      }
    }
  }
`

export default PageBlog
