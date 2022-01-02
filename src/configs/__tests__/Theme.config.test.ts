import { APP_THEMES } from '../Theme.config'

describe('Theme Config', () => {
  it('should contain only strings', () => {
    Object.values(APP_THEMES).forEach((theme) => {
      expect(typeof theme).toBe('string')
    })
  })

  it('should key === value', () => {
    Object.entries(APP_THEMES).forEach(([key, value]) => {
      expect(key).toBe(value)
    })
  })
})
