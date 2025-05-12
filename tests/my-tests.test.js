import { test, expect } from 'vitest'
import myFunctions from '../my-test-practics/first'

test('проверяем функцию на "успех"', () => {
  expect(myFunctions.getGreeting('Roman', 33)).toBe('hey Roman, you are 33 old')
})

test('проверяем функцию на возраст меньше 18', () => {
  expect(myFunctions.getGreeting('Roman', 15)).toBe('you are not allowed')
})