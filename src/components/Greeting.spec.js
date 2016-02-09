import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import expectJSX from 'expect-jsx'
import Greeting from './Greeting'

expect.extend(expectJSX)

describe('Greeting', () => {

	it('should render the greeting', () => {
		var renderer = TestUtils.createRenderer()
		renderer.render(<Greeting greeting={'hello world'} />)

		var actual = renderer.getRenderOutput()

		var expected = (
			<div>
				<h1>Greeting</h1>
				<div>hello world</div>
			</div>
		)
		expect(actual).toIncludeJSX(expected)
	})
})