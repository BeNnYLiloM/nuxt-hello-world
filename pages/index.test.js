import { describe, test, expect, vi } from 'vitest'
import MyPage from './index.vue'
import mockUserResponse from '../mocks/users.json'
import { registerEndpoint, mountSuspended } from '@nuxt/test-utils/runtime'

const getUsersMock = vi.fn()

registerEndpoint('/api/users', getUsersMock)

describe('Index page', () => {
  test('test render users length', async () => {
    getUsersMock.mockImplementationOnce(() => Promise.resolve({ users: mockUserResponse }))

    const wrap = await mountSuspended(MyPage)
    const users = wrap.findAll('[data-testid="user"]')
    
    expect(users.length).toBe(1)
  })

  test('test failed request', async () => {
    getUsersMock.mockImplementationOnce(() => Promise.reject())

    const wrap = await mountSuspended(MyPage)
    
    expect(wrap.vm.isFailed.value).toBe(true)
  })
})
