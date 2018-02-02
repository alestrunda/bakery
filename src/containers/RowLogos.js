import React from 'react'
import PropTypes from 'prop-types'

const RowLogos = props => {
  const items = props.children.map((item, index) => {
    return (
      <div key={index} className="row-logos__item">
        {React.cloneElement(item, {
          className: 'img-gray img-responsive el-center',
          width: '100',
        })}
      </div>
    )
  })
  return <div className="row-logos">{items}</div>
}

RowLogos.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
    .isRequired,
}

export default RowLogos
