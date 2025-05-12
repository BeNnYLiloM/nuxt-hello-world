import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import MyPage from '../pages/index.vue'

describe('Index page', () => {
  test('проверка пропса и вывода сообщения', () => {
    const wrap = mount(MyPage, {
      propsData: {
        name: 'Roman'
      }
    })

    expect(wrap.text()).toBe('Hello Vanya welcome to test')
  })
})
