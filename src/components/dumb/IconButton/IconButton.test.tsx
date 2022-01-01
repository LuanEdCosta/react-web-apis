import { render } from '@testing-library/react'

import { IconButton } from '.'

describe('IconButton', () => {
  it('should render', () => {
    const { getByText } = render(<IconButton>♥</IconButton>)
    expect(getByText('♥')).toBeVisible()
  })
})
