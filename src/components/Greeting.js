import React, { PropTypes } from 'react'

var Greeting = ({greeting}) => {
	return (
		<div>
			<h1>Greeting</h1>
			<div>{ greeting }</div>
		</div>
	)
}

Greeting.propTypes = {
	greeting: PropTypes.string.isRequired
}

export default Greeting