/* eslint-disable */
import { describe, expect, test } from '@jest/globals'
const { name, sum } = require('../src/index')

test('name to equal template-rollup-lib', () => {
  expect(name).toBe('template-rollup-lib')
})

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})
