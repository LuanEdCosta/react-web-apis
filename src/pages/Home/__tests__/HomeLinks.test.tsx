import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import { HomeLinks } from '../HomeLinks'

describe('Home/HomeLinks', () => {
  it('should render', () => {
    const { container } = render(<HomeLinks />, { wrapper: MemoryRouter })
    expect(container).toBeInTheDocument()
  })
})
