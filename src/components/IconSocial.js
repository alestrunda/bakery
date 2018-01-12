import React from 'react'
import Link from 'gatsby-link'
import FontAwesome from 'react-fontawesome'

const IconSocial = props => {
  return (
    <Link to={props.target} className="icon-circle icon-circle--white">
      <FontAwesome name={props.icon} />
    </Link>
  )
}

export default IconSocial
