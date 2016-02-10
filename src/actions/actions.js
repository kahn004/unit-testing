export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'
export const ADD_TODO = 'ADD_TODO'


export function increment () {
	return {
		type: INCREMENT_COUNTER
	}
}

export function decrement () {
	return {
		type: DECREMENT_COUNTER
	}
}

export function addTodo (text) {
	return {
		type: ADD_TODO,
		text
	}
}