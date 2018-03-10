import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import ArticlePreview from '../components/ArticlePreview'
import Breadcrumbs from '../components/Breadcrumbs'
import HeadingMain from '../components/HeadingMain'
import Pagination from '../components/Pagination'

const PageBlog = ({ data, pathContext }) => {
  let nextUrl = (pathContext.index + 1).toString()
  let previousUrl = (pathContext.index - 1).toString()
  if (previousUrl === '1') previousUrl = '/blog/'
  else if (previousUrl === '0') previousUrl = ''

  return (
    <div>
      <Helmet title="Blog" />
      <HeadingMain title={`Blog (${data.allMarkdownRemark.totalCount})`} />

      <div className="container">
        <Breadcrumbs items={[{ text: 'Home', to: '/' }, { text: 'Blog' }]} />
      </div>

      <div className="section-content section-content--bottom-smaller section-content--top-smaller container">
        <div className="grid grid--center">
          {pathContext.group.map(({ node }, index) => {
            return (
              <div className="grid__item grid__item--md-span-4" key={node.id}>
                <ArticlePreview
                  title={node.frontmatter.title}
                  imageSrc={
                    node.frontmatter.imageSrc &&
                    node.frontmatter.imageSrc.childImageSharp.responsiveSizes
                      .src
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
          currentPageNumber={pathContext.index}
          maxPageNumber={pathContext.pageCount}
          previousPageUrl={previousUrl}
          nextPageUrl={nextUrl <= pathContext.pageCount ? nextUrl : null}
          basePageUrl="/blog/"
        />
      </div>
    </div>
  )
}

PageBlog.propTypes = {
  data: PropTypes.object,
  pathContext: PropTypes.object,
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
