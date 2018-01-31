import React from 'react'

import BreadcrumbsItem from '../Breadcrumbs/BreadcrumbsItem'

const Breadcrumbs = (props) => {
    return (
        <ul className="list-breadcrumbs">
            {props.items.map((item, index) => (
                <BreadcrumbsItem key={index} to={item.to} text={item.text} />
            ))}
        </ul>
    )
}

export default Breadcrumbs