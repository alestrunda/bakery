import React from 'react'
import classNames from 'classnames'
import Link from 'gatsby-link'

const Navigation = (props) => {
    const items = props.items.map((item, index) => {
        return (
            <li key={index} className={`${props.className}__item`}>
                <Link className={`${props.className}__link`} to={item.to}>{item.title}</Link>
            </li>
        )
    })
    return (
        <div className={props.classNameContainer}>
            <ul className={classNames(props.className, {"active": props.active})}>
                {items}
            </ul>
        </div>
    )
}

export default Navigation