import { renderHook } from '@testing-library/react-hooks'

import { useDocumentTitle } from 'src/hooks'

describe('useDocumentTitle', () => {
  it('should set the document title when the hook renders', () => {
    const newDocumentTitle = 'New Title'
    expect(document.title).not.toBe(newDocumentTitle)
    renderHook(() => useDocumentTitle(newDocumentTitle))
    expect(document.title).toBe(newDocumentTitle)
  })
})
