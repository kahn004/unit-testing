import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import LikeCounterActive from './LikeCounterActive'

describe('LikeCounterActive', () => {

	describe('isActive', () => {

		function renderLikeCounter (isActive) {
			var renderer = TestUtils.createRenderer()
			renderer.render(<LikeCounterActive counter={1} isActive={isActive} />)
			return renderer.getRenderOutput().props.className.includes('is-active')
		}
		it('should show the like count as active', () => {
			expect(renderLikeCounter(true)).toEqual(true)
		})

		it('should show the like count as inactive', () => {
			expect(renderLikeCounter(false)).toEqual(false)
		})
	})
})