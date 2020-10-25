import React from 'react'
import PropTypes from 'prop-types'

import ArticlePreview from '../components/ArticlePreview'
import Breadcrumbs from '../components/Breadcrumbs'
import HeadingMain from '../components/HeadingMain'
import Pagination from '../components/Pagination'

import Layout from '../layouts/Page'

const PAGE_TITLE = 'Blog'

const PageBlog = ({ data, pageContext }) => {
  return (
    <Layout title={PAGE_TITLE}>
      <HeadingMain
        title={`${PAGE_TITLE} (${data.allMarkdownRemark.totalCount})`}
      />
      <div className="container">
        <Breadcrumbs
          items={[{ text: 'Home', to: '/' }, { text: PAGE_TITLE }]}
        />
      </div>
      <div className="section-content section-content--bottom-smaller section-content--top-smaller container">
        <div className="grid grid--center">
          {pageContext.group.map(({ node }) => {
            return (
              <div className="grid__item grid__item--md-span-4" key={node.id}>
                <ArticlePreview
                  title={node.frontmatter.title}
                  imageSrc={
                    node.frontmatter.imageSrc &&
                    node.frontmatter.imageSrc.childImageSharp.fluid.src
                  }
                  link={node.fields.slug}
                >
                  {node.excerpt}
                </ArticlePreview>
              </div>
            )
          })}
        </div>
        <Pagination
          currentPageNumber={pageContext.index}
          maxPageNumber={pageContext.pageCount}
          basePageUrl="/blog/"
        />
      </div>
    </Layout>
  )
}

PageBlog.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object,
}

export const query = graphql`
  query PostsQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/posts/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
    }
  }
`

export default PageBlog
