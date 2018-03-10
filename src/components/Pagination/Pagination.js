import React from 'react'
import FontAwesome from 'react-fontawesome'
import PropTypes from 'prop-types'

import PaginationItem from './PaginationItem'

const Pagination = props => {
  const {
    currentPageNumber,
    maxPageNumber,
    previousPageUrl,
    nextPageUrl,
    basePageUrl,
    hideIfEmpty,
    className,
  } = props

  if (hideIfEmpty && maxPageNumber === 1) return

  let pagingItems = new Array(maxPageNumber - 1).fill(undefined)
  pagingItems = pagingItems.map((item, index) => {
    const pageNumber = index + 2 // there is no page for 0 and page 1 is rendered manually
    const activeClass = pageNumber === currentPageNumber ? 'active' : ''
    return (
      <PaginationItem
        key={index}
        to={pageNumber.toString()}
        className={className}
        classNameExtra={activeClass}
      >
        {pageNumber}
      </PaginationItem>
    )
  })

  return (
    <ul className={className}>
      {previousPageUrl && (
        <PaginationItem
          to={previousPageUrl}
          className={className}
          classNameModifier={'prev'}
        >
          <FontAwesome name="chevron-left" />
        </PaginationItem>
      )}
      <PaginationItem
        to={basePageUrl}
        className={className}
        classNameExtra={currentPageNumber === 1 ? 'active' : ''}
      >
        1
      </PaginationItem>
      {pagingItems}
      {nextPageUrl && (
        <PaginationItem
          to={nextPageUrl}
          className={className}
          classNameModifier={'next'}
        >
          <FontAwesome name="chevron-right" />
        </PaginationItem>
      )}
    </ul>
  )
}

Pagination.propTypes = {
  currentPageNumber: PropTypes.number.isRequired,
  maxPageNumber: PropTypes.number.isRequired,
  previousPageUrl: PropTypes.string,
  nextPageUrl: PropTypes.string,
  basePageUrl: PropTypes.string.isRequired,
  hideIfEmpty: PropTypes.bool,
  className: PropTypes.string,
}

Pagination.defaultProps = {
  hideIfEmpty: true,
  className: 'pagination',
}

export default Pagination
