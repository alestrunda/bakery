import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const LabelBox = props => {
  return (
    <div className={classNames('label-box-container', props.className)}>
      {props.label && (
        <span className={`label-box label-box--${props.color}`}>
          {props.label}
        </span>
      )}
      {props.children}
    </div>
  )
}

LabelBox.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.array,
  ]),
}

LabelBox.defaultProps = {
  color: 'yellow',
}

export default LabelBox
