import { fireEvent, render } from '@testing-library/react'

import { IconButton } from '.'

describe('IconButton', () => {
  it('should render', () => {
    const { getByText } = render(<IconButton>♥</IconButton>)
    expect(getByText('♥')).toBeVisible()
  })

  it('should be clickable', () => {
    const handleClick = jest.fn()
    const { getByText } = render(
      <IconButton onClick={handleClick}>♥</IconButton>,
    )

    fireEvent.click(getByText('♥'))
    expect(handleClick).toBeCalledTimes(1)
  })

  it('should be disabled', () => {
    const handleClick = jest.fn()

    const { getByText } = render(
      <IconButton onClick={handleClick} disabled>
        ♥
      </IconButton>,
    )

    fireEvent.click(getByText('♥'))
    expect(handleClick).not.toBeCalled()
  })
})
