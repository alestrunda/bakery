import React from 'react'
import Helmet from 'react-helmet'

import Breadcrumbs from '../components/Breadcrumbs'
import ImageLightbox from '../components/ImageLightbox'

const PagePost = ({ data }) => {
  const post = data.markdownRemark
  const { title } = post.frontmatter
  return (
    <div className="container">
      <Breadcrumbs
        items={[
          { text: 'Home', to: '/' },
          { text: 'Blog', to: '/blog/' },
          { text: title },
        ]}
      />

      <div className="section-content">
        <Helmet title={title} />

        <div className="article">
          {post.frontmatter.imageSrc && (
            <ImageLightbox
              classNameImg="el-center mb60"
              previewImages={[
                post.frontmatter.imageSrc.childImageSharp.responsiveSizes.src,
              ]}
              fullImages={[
                post.frontmatter.imageSrc.childImageSharp.responsiveSizes
                  .originalImg,
              ]}
              alt={title}
            />
          )}
          <h1>{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
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
        imageSrc {
          childImageSharp {
            responsiveSizes(maxWidth: 950) {
              src
              originalImg
            }
          }
        }
      }
    }
  }
`

export default PagePost
