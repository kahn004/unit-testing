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