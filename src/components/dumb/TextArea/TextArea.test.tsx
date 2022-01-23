import { render } from '@testing-library/react'

import { TextArea } from '.'

describe('TextArea', () => {
  it('should render a simple HTML textarea element', () => {
    const { container, getByRole } = render(<TextArea />)
    expect(container).toBeInTheDocument()
    expect(getByRole('textbox')).toBeVisible()
  })
})
