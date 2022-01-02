import { LOCAL_STORAGE_KEYS } from '../LocalStorage.config'

describe('LocalStorage Config', () => {
  const appPrefix = '@REACT_WEB_APIS'

  it('should contain the app prefix in every key', () => {
    Object.values(LOCAL_STORAGE_KEYS).forEach((key) => {
      expect(key).toContain(appPrefix)
    })
  })

  it('should the key be in the value', () => {
    Object.entries(LOCAL_STORAGE_KEYS).forEach(([key, value]) => {
      expect(value).toBe(`${appPrefix}/${key}`)
    })
  })
})
