import { act, renderHook } from '@testing-library/react-hooks'

import { useTheme } from 'src/hooks'
import { APP_THEMES, LOCAL_STORAGE_KEYS } from 'src/configs'

describe('useTheme', () => {
  beforeEach(() => localStorage.clear())

  it('should return the correct structure', () => {
    const { result } = renderHook(() => useTheme())
    expect(typeof result.current.handleToggleTheme).toBe('function')
    expect(typeof result.current.handleGetCurrentTheme).toBe('function')
    expect(typeof result.current.handleSetCurrentTheme).toBe('function')
  })

  it('should get the current theme', () => {
    const { result } = renderHook(() => useTheme())
    const getItemSpy = jest.spyOn(window.localStorage.__proto__, 'getItem')

    act(() => {
      expect(result.current.handleGetCurrentTheme()).toBe(APP_THEMES.LIGHT)
      expect(getItemSpy).toHaveBeenCalledWith(LOCAL_STORAGE_KEYS.THEME)
    })
  })

  it('should set the current theme', () => {
    const { result } = renderHook(() => useTheme())
    const setItemSpy = jest.spyOn(window.localStorage.__proto__, 'setItem')

    act(() => {
      result.current.handleSetCurrentTheme()
      expect(setItemSpy).toHaveBeenCalledWith(
        LOCAL_STORAGE_KEYS.THEME,
        APP_THEMES.LIGHT,
      )
    })
  })

  it('should toggle the theme', () => {
    const { result } = renderHook(() => useTheme())
    const setItemSpy = jest.spyOn(window.localStorage.__proto__, 'setItem')

    act(() => {
      result.current.handleToggleTheme()
      expect(setItemSpy).toHaveBeenCalledWith(
        LOCAL_STORAGE_KEYS.THEME,
        APP_THEMES.DARK,
      )

      // Setting the theme dark again, because its the current theme
      result.current.handleSetCurrentTheme()
      expect(setItemSpy).toHaveBeenCalledWith(
        LOCAL_STORAGE_KEYS.THEME,
        APP_THEMES.DARK,
      )

      result.current.handleToggleTheme()
      expect(setItemSpy).toHaveBeenCalledWith(
        LOCAL_STORAGE_KEYS.THEME,
        APP_THEMES.LIGHT,
      )
    })
  })
})
