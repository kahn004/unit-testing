import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import LikeCounter from './LikeCounter'

describe('LikeCounter', () => {

	it('should be a link', () => {
		var renderer = TestUtils.createRenderer()
		renderer.render(<LikeCounter counter={5} />)
		var actual = renderer.getRenderOutput().type
		var expected = 'button'
		expect(actual).toEqual(expected)
	})
})