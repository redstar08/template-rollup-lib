/* eslint-disable */
import { describe, expect, test } from '@jest/globals'
const { sum } = require('../src/utils/index')

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})
