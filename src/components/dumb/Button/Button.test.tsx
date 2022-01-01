import { fireEvent, render } from '@testing-library/react'

import { Button } from '.'

describe('Button', () => {
  it('should render', () => {
    const { getByText } = render(<Button>Button</Button>)
    expect(getByText('Button')).toBeVisible()
  })

  it('should be clickable', () => {
    const handleClick = jest.fn()
    const { getByText } = render(<Button onClick={handleClick}>Button</Button>)
    fireEvent.click(getByText('Button'))
    expect(handleClick).toBeCalledTimes(1)
  })

  it('should be disabled', () => {
    const handleClick = jest.fn()

    const { getByText } = render(
      <Button onClick={handleClick} disabled>
        Button
      </Button>,
    )

    fireEvent.click(getByText('Button'))
    expect(handleClick).not.toBeCalled()
  })
})
