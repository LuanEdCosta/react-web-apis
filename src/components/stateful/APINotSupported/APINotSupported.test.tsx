import { render } from '@testing-library/react'

import { APINotSupported } from '.'

describe('APINotSupported', () => {
  it('should render', () => {
    const { container } = render(<APINotSupported />)
    expect(container).toBeInTheDocument()
  })
})
