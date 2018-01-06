import React from 'react'
import Helmet from 'react-helmet'

const PagePost = ({ data }) => {
  const post = data.markdownRemark
  const { title } = post.frontmatter
  return (
    <div className="container section-content">
      <Helmet title={title} />

      <div className="article">
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </div>
  )
}

export const query = graphql`
  query PagePostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default PagePost
