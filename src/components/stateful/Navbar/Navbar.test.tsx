import { fireEvent, render, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { APP_THEMES, LOCAL_STORAGE_KEYS } from '~/src/configs'

import { Navbar } from '.'

describe('Navbar', () => {
  beforeEach(() => localStorage.clear())

  it('should render', () => {
    const { container, getByTestId } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    )

    expect(container).toBeInTheDocument()
    expect(getByTestId('navbar-back-button')).toBeVisible()
    expect(getByTestId('navbar-github-button')).toBeVisible()
    expect(getByTestId('navbar-language-button')).toBeVisible()
    expect(getByTestId('navbar-theme-button')).toBeVisible()
  })

  it('should hide back button', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Navbar showBackButton={false} />
      </MemoryRouter>,
    )

    expect(() => getByTestId('navbar-back-button')).toThrow()
  })

  it('should all buttons be clickable', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    )

    ;[
      getByTestId('navbar-back-button'),
      getByTestId('navbar-github-button'),
      getByTestId('navbar-language-button'),
      getByTestId('navbar-theme-button'),
    ].forEach((button) => {
      const handleClick = jest.fn()
      button.onclick = handleClick
      fireEvent.click(button)
      expect(handleClick).toBeCalledTimes(1)
    })
  })

  it('should toggle the theme', () => {
    const setItemSpy = jest.spyOn(window.localStorage.__proto__, 'setItem')

    const { getByTestId } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    )

    const themeButton = getByTestId('navbar-theme-button')

    fireEvent.click(themeButton)
    expect(setItemSpy).toBeCalledWith(LOCAL_STORAGE_KEYS.THEME, APP_THEMES.DARK)

    fireEvent.click(themeButton)
    expect(setItemSpy).toBeCalledWith(
      LOCAL_STORAGE_KEYS.THEME,
      APP_THEMES.LIGHT,
    )
  })

  it('should change language', async () => {
    const setItemSpy = jest.spyOn(window.localStorage.__proto__, 'setItem')

    const { getByTestId } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    )

    const languageButton = getByTestId('navbar-language-button')
    fireEvent.click(languageButton)
    await waitFor(() => expect(setItemSpy).toBeCalledTimes(1))
    fireEvent.click(languageButton)
    await waitFor(() => expect(setItemSpy).toBeCalledTimes(2))
  })
})
