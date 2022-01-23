import { render } from '@testing-library/react'

import { Hint } from '.'

describe('Hint', () => {
  it('should render', () => {
    const { container } = render(<Hint />)
    expect(container).toBeInTheDocument()
  })

  it('should render its children', () => {
    const { getByText } = render(<Hint>Children</Hint>)
    expect(getByText('Children')).toBeVisible()
  })
})
