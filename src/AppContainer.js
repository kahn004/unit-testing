import React, { Component } from 'react'
import createId from './utilities/createId'

class AppContainer extends Component {

	render () {
		return (
			<h1>{ createId(23, 'sam is awesome') }</h1>
		)
	}
}

export default AppContainer