import { render } from '@testing-library/react'

import { Error } from '.'

describe('Error', () => {
  it('should render', () => {
    const { container } = render(<Error />)
    expect(container).toBeInTheDocument()
  })

  it('should render its children', () => {
    const { getByText } = render(<Error>Children</Error>)
    expect(getByText('Children')).toBeVisible()
  })
})
