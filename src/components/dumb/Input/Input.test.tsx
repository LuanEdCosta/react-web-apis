import { render } from '@testing-library/react'

import { Input } from '.'

describe('Input', () => {
  it('should render a simple HTML input element', () => {
    const { container, getByRole } = render(<Input />)
    expect(container).toBeInTheDocument()
    expect(getByRole('textbox')).toBeVisible()
  })
})
