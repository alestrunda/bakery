import React from 'react'
import className from 'classnames'
import Link from 'gatsby-link'
import FontAwesome from 'react-fontawesome'
import PropTypes from 'prop-types'

import LabelBox from '../components/LabelBox'

const ArticlePreview = props => {
  const {
    children,
    imageSrc,
    layout,
    imageHover,
    imageShadow,
    imageLabel,
    textAlign,
    title,
    excerpt,
    link,
    linkText,
  } = props

  const img = (
    <LabelBox label={imageLabel}>
      <img
        className={className(
          'article-preview__img',
          imageHover ? 'article-preview__img--hover' : ''
        )}
        src={imageSrc}
        alt={title}
      />
    </LabelBox>
  )
  const articlePreviewImgInnerClasses = className(
    'article-preview__img-inner',
    imageShadow ? 'article-preview__img-inner--shadow' : ''
  )

  return (
    <article
      className={className(
        'article article-preview',
        `article-preview--layout-${layout}`,
        props.className,
        textAlign ? `article-preview--${textAlign}` : ''
      )}
    >
      {imageSrc && (
        <div className="article-preview__img-wrapper">
          {link ? (
            <Link to={link} className={articlePreviewImgInnerClasses}>
              {img}
            </Link>
          ) : (
            <div className={articlePreviewImgInnerClasses}>{img}</div>
          )}
        </div>
      )}
      <div className="article-preview__content">
        <h4
          className={className(
            'heading-underline text-red text-uppercase',
            textAlign ? `heading-underline--${textAlign}` : ''
          )}
        >
          {title}
        </h4>
        <div className="article-preview__content-inner">{children}</div>
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
    </article>
  )
}

ArticlePreview.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array, PropTypes.string])
    .isRequired,
  textAlign: PropTypes.string,
  layout: PropTypes.string,
  className: PropTypes.string,
  imageSrc: PropTypes.string,
  imageLabel: PropTypes.string,
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
  linkText: PropTypes.string,
  imageHover: PropTypes.bool,
  imageShadow: PropTypes.bool,
}

ArticlePreview.defaultProps = {
  imageHover: true,
  imageShadow: false,
  layout: 'center',
  linkText: 'Read more',
}

export default ArticlePreview
