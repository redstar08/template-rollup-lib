/* eslint-disable */
import { describe, expect, test } from '@jest/globals'
const { name } = require('../src/index')

test('name to equal template-rollup-lib', () => {
  expect(name).toBe('template-rollup-lib')
})
