import React from 'react'
import FontAwesome from 'react-fontawesome'
import Helmet from 'react-helmet'

import IconLink from '../components/IconLink'
import ImageLightbox from '../components/ImageLightbox'
import LabelBox from '../components/LabelBox'

const PageProduct = ({ data }) => {
  const post = data.markdownRemark
  const { title, label, urlShop, urlLike } = post.frontmatter
  return (
    <div className="container section-content">
      <Helmet title={title} />

      <div className="article">
        {post.frontmatter.imageSrc && (
          <div className="wrapper-centering mb60">
            <LabelBox label={label}>
              <ImageLightbox
                previewImages={[
                  post.frontmatter.imageSrc.childImageSharp.responsiveSizes.src,
                ]}
                fullImages={[
                  post.frontmatter.imageSrc.childImageSharp.responsiveSizes
                    .originalImg,
                ]}
                alt={title}
              />
            </LabelBox>
          </div>
        )}
        <h1 className="mb15">{title}</h1>
        <div className="mb20">
          <IconLink icon="shopping-cart" target={urlShop} color="brown" />
          <IconLink icon="heart" target={urlLike} color="brown" />
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </div>
  )
}

export const query = graphql`
  query PageProductQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        urlLike
        urlShop
        label
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

export default PageProduct
