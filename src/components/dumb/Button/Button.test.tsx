import { render } from '@testing-library/react'

import { Button } from '.'

describe('Button', () => {
  it('should render', () => {
    const { getByText } = render(<Button>Button</Button>)
    expect(getByText('Button')).toBeVisible()
  })
})
