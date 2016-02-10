import expect from 'expect'
import * as CounterActions from './actions'

describe('Actions', () => {

	it('should create an action to increment counter', () => {
		var expected = { type: 'INCREMENT_COUNTER' }
		expect(CounterActions.increment()).toEqual(expected)
	})

	it('should create an action to decrement counter', () => {
		var expected = { type: 'DECREMENT_COUNTER' }
		expect(CounterActions.decrement()).toEqual(expected)
	})

	it('should create an action to add a todo', () => {
		var text = 'Laugh out loud'
		var expectedAction = {
			type: 'ADD_TODO',
			text
		}
		expect(CounterActions.addTodo(text)).toEqual(expectedAction)
	})
})