import React from 'react'
import { graphql } from 'gatsby'

import ArticleNavigation from '../components/ArticleNavigation'
import Breadcrumbs from '../components/Breadcrumbs'
import IconLink from '../components/IconLink'
import ImageLightbox from '../components/ImageLightbox'
import LabelBox from '../components/LabelBox'

import Layout from '../layouts/Post'

const PageProduct = ({ data }) => {
  const { currentPost, allPosts } = data
  const { title, label, urlShop, urlLike } = currentPost.frontmatter
  const articleNav = (
    <ArticleNavigation currentPost={currentPost} posts={allPosts.edges} />
  )

  return (
    <Layout title={title}>
      <div className="container">
        <Breadcrumbs
          items={[
            { text: 'Home', to: '/' },
            { text: 'Products', to: '/products/' },
            { text: title },
          ]}
        />
        <div className="section-content section-content--top-small">
          <div className="mb30">{articleNav}</div>
          <div className="article">
            {currentPost.frontmatter.imageSrc && (
              <div className="article__img">
                <LabelBox label={label}>
                  <ImageLightbox
                    previewImages={[
                      currentPost.frontmatter.imageSrc.childImageSharp.fluid,
                    ]}
                    fullImages={[
                      currentPost.frontmatter.imageSrc.childImageSharp.fluid
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
            <div dangerouslySetInnerHTML={{ __html: currentPost.html }} />
          </div>
          {articleNav}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query PageProductQuery($slug: String!) {
    currentPost: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      id
      frontmatter {
        title
        urlLike
        urlShop
        label
        imageSrc {
          childImageSharp {
            fluid(maxWidth: 950) {
              ...GatsbyImageSharpFluid
              originalImg
            }
          }
        }
      }
    }
    allPosts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/products/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default PageProduct
