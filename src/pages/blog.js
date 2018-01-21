import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import ArticlePreview from '../components/ArticlePreview'

const PageBlog = ({ data }) => (
  <div className="section-content section-content--bottom-smaller container">
    <Helmet title="Blog" />

    <h1 className="heading-main-single">Blog</h1>
    <div className="grid grid--center">
      {data.posts.edges.map(({ node }, index) => {
        return (
          <div className="grid__item grid__item--md-span-4">
            <ArticlePreview
              key={node.id}
              title={node.frontmatter.title}
              excerpt={node.excerpt}
              imageSrc={node.frontmatter.imageSrc && node.frontmatter.imageSrc.childImageSharp.responsiveSizes.src}
              link={node.fields.slug}
            />
          </div>
        )
      })}
    </div>
  </div>
)

export const query = graphql`
  query PostsQuery {
    posts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/posts/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
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
