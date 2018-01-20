import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import ArticlePreview from '../components/ArticlePreview'

const PageBlog = ({ data }) => (
  <div className="section-content container">
    <Helmet title="Blog" />

    <h1>Blog</h1>
    {data.posts.edges.map(({ node }, index) => {
      return (
        <ArticlePreview
          key={node.id}
          align="left"
          title={node.frontmatter.title}
          excerpt={node.excerpt}
        />
      )
    })}
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
          }
          excerpt(pruneLength: 350)
        }
      }
    }
  }
`

export default PageBlog
