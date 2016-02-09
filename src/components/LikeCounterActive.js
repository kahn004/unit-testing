import React, { PropTypes } from 'react'
import classNames from 'classnames'

var LikeCounterActive = ({counter, isActive}) => {
	var btnClasses = classNames({
		'btn-counter': true,
		'is-active': isActive
	})
	return (
		<button className={btnClasses}>{ counter }</button>
	)
}

LikeCounterActive.propTypes = {
	counter: PropTypes.number.isRequired,
	isActive: PropTypes.bool.isRequired
}

export default LikeCounterActive