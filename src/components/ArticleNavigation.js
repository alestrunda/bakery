import React from 'react'
import Link from 'gatsby-link'
import FontAwesome from 'react-fontawesome'
import PropTypes from 'prop-types'

class ArticleNavigation extends React.Component {
  getPrevPost(posts, currentPost) {
    if (posts.length === 1) return
    let prevPostIndex = -1
    posts.map((item, index) => {
      item.node.id === currentPost.id && (prevPostIndex = index - 1)
    })
    if(prevPostIndex === -1)
      return
    return prevPostIndex >= 0
      ? posts[prevPostIndex].node
      : posts[posts.length - 1].node
  }

  getNextPost(posts, currentPost) {
    if (posts.length === 1) return
    let nextPostIndex = -1
    posts.map((item, index) => {
      item.node.id === currentPost.id && (nextPostIndex = index + 1)
    })
    if(nextPostIndex === -1)
      return
    return nextPostIndex < posts.length
      ? posts[nextPostIndex].node
      : posts[0].node
  }

  render() {
    const { currentPost, posts } = this.props
    const prevPost = this.getPrevPost(posts, currentPost)
    const nextPost = this.getNextPost(posts, currentPost)
    return (
      <div className="grid grid--small">
        <div className="grid__item grid__item--sm-span-6 text-xs-center">
          {prevPost && (
            <Link
              className="button button--xsmall button--brown"
              to={prevPost.fields.slug}
            >
              <FontAwesome className="mr10" name="angle-left" />
              {prevPost.frontmatter.title}
            </Link>
          )}
        </div>
        <div className="grid__item grid__item--sm-span-6 grid__item--break-xs-20 text-right text-xs-center">
          {nextPost && (
            <Link
              className="button button--xsmall button--brown"
              to={nextPost.fields.slug}
            >
              {nextPost.frontmatter.title}
              <FontAwesome className="ml10" name="angle-right" />
            </Link>
          )}
        </div>
      </div>
    )
  }
}

ArticleNavigation.propTypes = {
  currentPost: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired,
}

export default ArticleNavigation
