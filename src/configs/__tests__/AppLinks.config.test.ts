import { GITHUB_REPOSITORY_LINKS } from '../AppLinks.config'

describe('AppLinks Config', () => {
  it('should all links be strings', () => {
    Object.values(GITHUB_REPOSITORY_LINKS).forEach((link) => {
      expect(typeof link).toBe('string')
    })
  })

  it('should all links contain https://', () => {
    Object.values(GITHUB_REPOSITORY_LINKS).forEach((link) => {
      expect(link).toContain('https://')
    })
  })
})
