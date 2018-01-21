import React from 'react'
import className from 'classnames'
import Link from 'gatsby-link'
import FontAwesome from 'react-fontawesome'
import PropTypes from 'prop-types'

const ArticlePreview = props => {
  const {
    imageSrc,
    layout,
    imageHover,
    align,
    title,
    excerpt,
    link,
    linkText,
  } = props
  const img = (
    <img
      className={className(
        'article-preview__img',
        imageHover ? 'article-preview__img--hover' : ''
      )}
      src={imageSrc}
      alt={title}
    />
  )

  return (
    <div
      className={className(
        'article article-preview',
        `article-preview--layout-${layout}`,
        props.className,
        align ? `article-preview--${align}` : ''
      )}
    >
      {imageSrc && (
        <div className="article-preview__img-wrapper">
          {link ? (
            <Link to={link} className="article-preview__img-inner">
              {img}
            </Link>
          ) : (
            <div className="article-preview__img-inner">{img}</div>
          )}
        </div>
      )}
      <div className="article-preview__content">
        <h4
          className={className(
            'heading-underline text-red text-uppercase',
            align ? `heading-underline--${align}` : ''
          )}
        >
          {title}
        </h4>
        <p>{excerpt}</p>
        {link && (
          <Link to={link} className="link-read-more text-uppercase">
            {linkText}{' '}
            <FontAwesome
              className="link-read-more__icon"
              name="chevron-right"
            />
          </Link>
        )}
      </div>
    </div>
  )
}

ArticlePreview.propTypes = {
  align: PropTypes.string,
  layout: PropTypes.string,
  className: PropTypes.string,
  imageSrc: PropTypes.string,
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string,
  link: PropTypes.string,
  linkText: PropTypes.string,
  imageHover: PropTypes.bool,
}

ArticlePreview.defaultProps = {
  imageHover: true,
  layout: 'center',
  linkText: 'Read more',
}

export default ArticlePreview
