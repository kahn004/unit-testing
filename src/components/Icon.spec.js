import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import Icon from './Icon'

describe('Icon', () => {

	it('should render the icon', () => {
		var renderer = TestUtils.createRenderer()
		renderer.render(<Icon name='facebook' />)
		var actual = renderer.getRenderOutput().props.className.includes('facebook')
		var expected = true
		expect(actual).toEqual(expected)
	})
})