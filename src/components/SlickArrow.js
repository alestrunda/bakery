import React from 'react'

const SlickArrow = (props) => {
	const {className, onClick, children} = props
	return <div className={className} onClick={onClick}>{children}</div>
}

export default SlickArrow;
