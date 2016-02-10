import expect from 'expect'
import reduce from './reducers'

const counter = (state = 0, action) => {
	switch (action.type) {
		case 'INCREMENT_COUNTER':
			return state + 1
		case 'DECREMENT_COUNTER':
			return state - 1
		default:
			return state
	}
}

describe('Reducers', () => {

	it('should handle INCREMENT_COUNTER', () => {
		var actual = counter(0, { type: 'INCREMENT_COUNTER' })
		var expected = 1
		expect(actual).toEqual(expected)
	})

	it('should handle DECREMENT_COUNTER type1', () => {
		var actual = counter(2, { type: 'DECREMENT_COUNTER' })
		var expected = 1
		expect(actual).toEqual(expected)
	})

	it('should handle DECREMENT_COUNTER type2', () => {
		var actual = counter(1, { type: 'DECREMENT_COUNTER' })
		var expected = 0
		expect(actual).toEqual(expected)
	})

	it('should handle SOMETHING_ELSE', () => {
		var actual = counter(1, { type: 'SOMETHING_ELSE' })
		var expected = 1
		expect(actual).toEqual(expected)
	})
})