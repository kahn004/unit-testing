import React, { PropTypes } from 'react'

var LikeCounter = ({counter}) => {
	return (
		<button onClick={() => console.log('add counter')}>{ counter }</button>
	)
}

LikeCounter.propTypes = {
	counter: PropTypes.number.isRequired
}

export default LikeCounter