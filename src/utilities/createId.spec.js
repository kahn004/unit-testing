import expect from 'expect'
import createId from './createId'

describe('CreateId', () => {

	it('should convert a description into a unique id', () => {
		var actual = createId(123, 'Cool example description')
		var expected = '123-cool-example'
		expect(actual).toEqual(expected)
	})
})