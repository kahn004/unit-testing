import React, { PropTypes } from 'react'

var Icon = ({name}) => {
	return (
		<i className={name}></i>
	)
}

Icon.propTypes = {
	name: PropTypes.string.isRequired
}

export default Icon