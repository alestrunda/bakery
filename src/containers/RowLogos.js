import React from 'react'

const RowLogos = props => {
  const items = props.children.map(item => {
    return (
      <div className="row-logos__item">
        {React.cloneElement(item, {
          className: 'img-gray img-responsive el-center',
          width: '100',
        })}
      </div>
    )
  })
  return <div className="row-logos">{items}</div>
}

export default RowLogos
