import expect from 'expect'
import reducer from './todos'

/*
const initialState = [
	{
		text: 'Unit test',
		completed: false
	}
]

export default function todos (state = initialState, action) {
	switch (action.type) {
		case 'ADD_TODO':
			return [
				{
					text: action.text,
					completed: false
				},
				...state
			]
		default:
			return state
	}
}
*/

describe('Todos reducer', () => {

	it('should return the initial state', () => {
		expect(
			reducer(undefined, {})
		).toEqual([
			{
				text: 'Unit test',
				completed: false
			}
		])
	})

	it('should handle ADD_TODO', () => {
		expect(
			reducer([], {
				type: 'ADD_TODO',
				text: 'Run the tests'
			})
		).toEqual([
			{
				text: 'Run the tests',
				completed: false
			}
		])

		expect(
			reducer(
				[
					{
						text: 'Unit test',
						completed: false
					}
				],
				{
					type: 'ADD_TODO',
					text: 'Run the tests'
				}
			)
		).toEqual([
			{
				text: 'Run the tests',
				completed: false	
			},
			{
				text: 'Unit test',
				completed: false
			}
		])
	})
})