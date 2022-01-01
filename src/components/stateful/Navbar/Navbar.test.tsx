import { fireEvent, render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import { Navbar } from '.'

describe('Navbar', () => {
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
})
