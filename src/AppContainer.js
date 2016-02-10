// import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Counter from './components/Counter'
// import createId from './utilities/createId'
import * as CounterActions from './actions/actions'

// class AppContainer extends Component {

// 	render () {
// 		return (
// 			<h1>{ createId(23, 'sam is awesome') }</h1>
// 		)
// 	}
// }

function mapStateToProps (state) {
	return {
		counter: state.counter
	}
}

function mapDispatchToProps (dispatch) {
	return bindActionCreators(CounterActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)