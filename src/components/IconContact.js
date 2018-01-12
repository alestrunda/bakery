import React from 'react'
import FontAwesome from 'react-fontawesome'

const IconSocial = props => {
  return (
    <a className="link-clean link-hover-red icon-opening" href={props.target}>
      <FontAwesome name={props.icon} className="icon-opening__icon" />
      {props.children}
    </a>
  )
}

export default IconSocial
