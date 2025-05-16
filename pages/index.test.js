import { describe, test, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import MyPage from './index.vue'
import mockUserResponse from '../mocks/users.json'
import { registerEndpoint } from '@nuxt/test-utils/runtime'

const getUsersMock = vi.fn(() => Promise.resolve({ users: mockUserResponse }))

registerEndpoint('/api/users', getUsersMock)

describe('Index page', () => {
  const wrap = mount(MyPage)

  test('test render users length', () => {
    const users = wrap.findAll('[data-testid="user"]')
    
    expect(users.length).toBe(1)
  })

  test('test failed request', () => {

    expect(wrap.vm.isFailed).toBe(false)
  })
})
